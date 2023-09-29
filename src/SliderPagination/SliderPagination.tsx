import clsx from "clsx";
import { useEffect, useState } from "react";

const PAGE_NUMBER_LIMIT = 5;

function SliderPagination({
  productsPerPage,
  totalProducts,
  currentPage,
  setCurrentPage,
}: {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
}) {
  const [pageNumbers, setPageNumbers] = useState<Array<number>>([]);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  useEffect(() => {
    const newPageNumbers: Array<number> = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  }, [totalProducts, productsPerPage]);

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + PAGE_NUMBER_LIMIT);
      setminPageNumberLimit(minPageNumberLimit + PAGE_NUMBER_LIMIT);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % PAGE_NUMBER_LIMIT === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - PAGE_NUMBER_LIMIT);
      setminPageNumberLimit(minPageNumberLimit - PAGE_NUMBER_LIMIT);
    }
  };

  const pageIncrementBtn =
  pageNumbers.length > maxPageNumberLimit ? (
    <li key='rightDots'>
      <button className="text-blue-500 bg-white" onClick={handleNextBtn}>
        &hellip;
      </button>
    </li>
  ) : null;

  function getButton(
    btnName: string | number,
    onClickFunction: () => void,
    controlButton?: boolean,
  ) {
    return (
      <li key={String(btnName)}>
        <button 
        className={clsx(
          "py-2 px-2 text-base font-semibold rounded-lg cursor-pointer transition duration-500 ease-in-out",
          btnName === currentPage || controlButton
            ? "text-white bg-blue-500"
            : "text-blue-500 bg-white"
        )}
        onClick={onClickFunction}
        disabled={(btnName === 'Prev' && currentPage === pageNumbers[0]) ||
        (btnName === 'Next' && currentPage === pageNumbers[pageNumbers.length - 1])}>
        {btnName}
        </button>
      </li>
    );
  }
  const pageDecrementBtn =
    minPageNumberLimit >= 1 ? (
      <li key='leftDots'>
        <button className="text-blue-500 bg-white" onClick={handlePrevBtn}>
          &hellip;
        </button>
      </li>
    ) : null;

    const renderPageNumbers = pageNumbers.map((number) => {
      if (number < maxPageNumberLimit + 1  && number > minPageNumberLimit) {
        return (
          getButton(number, () => setCurrentPage(number))
        );
      } else {
        return null;
      }
    });

  return (
    <ul className="flex justify-center items-center mt-[50px] mb-[50px] desktop:gap-[20px] sm:max-w-full sm:whitespace-nowrap sm:overflow-x-auto sm:gap-[3px]">
      {getButton("Prev", handlePrevBtn, true)}
      {pageDecrementBtn}
      {renderPageNumbers}
      {pageIncrementBtn}
      {getButton(
        "Next",
        () => {
          handleNextBtn();
        },
        true
      )}
    </ul>
  );
}

export default SliderPagination;
