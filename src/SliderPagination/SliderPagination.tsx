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

  function getButton(
    btnName: string | number,
    onClickFunction: () => void,
    controlButton?: boolean
  ) {
    return (
      <li key={btnName}>
        <button 
        className={clsx(
          "text-base font-semibold py-2 px-2 rounded-lg cursor-pointer transition duration-500 ease-in-out",
          btnName === currentPage || controlButton
            ? "text-white bg-blue-500"
            : "text-blue-500 bg-white"
        )}
        onClick={onClickFunction}
        disabled={btnName === 'Prev' || btnName === 'Next' ? ((currentPage === pageNumbers[0] && btnName === 'Prev')
         || (btnName === 'Next' && currentPage === pageNumbers[pageNumbers.length - 1]) ? true : false) : false}>
        {btnName}
        </button>
      </li>
    );
  }
  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1  && number > minPageNumberLimit) {
      return (
        getButton(number, () => setCurrentPage(number))
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + PAGE_NUMBER_LIMIT);
      setminPageNumberLimit(minPageNumberLimit + PAGE_NUMBER_LIMIT);
    }
  };

  const handlePrevbtn = () => {
    
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % PAGE_NUMBER_LIMIT === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - PAGE_NUMBER_LIMIT);
      setminPageNumberLimit(minPageNumberLimit - PAGE_NUMBER_LIMIT);
    }
  };

  let pageIncrementBtn = null;
  if (pageNumbers.length > maxPageNumberLimit) {
    pageIncrementBtn = <li className="text-blue-500 bg-white" onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className="text-blue-500 bg-white" onClick={handlePrevbtn}> &hellip; </li>;
  }

  return (
    <ul className="sm:max-w-full sm:whitespace-nowrap sm:overflow-x-auto flex justify-center items-center mt-[50px] mb-[50px] sm:gap-[3px] desktop:gap-[20px]">
      {getButton("Prev", handlePrevbtn, true)}
      {pageDecrementBtn}
      {renderPageNumbers}
      {pageIncrementBtn}
      {getButton(
        "Next",
        () => {
          handleNextbtn();
        },
        true
      )}
    </ul>
  );
}

export default SliderPagination;
