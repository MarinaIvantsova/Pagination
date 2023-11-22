import clsx from 'clsx'
import { useEffect, useState } from 'react'

const PAGE_NUMBER_LIMIT = 5

function SliderPagination({
    productsPerPage,
    totalProducts,
    currentPage,
    setCurrentPage,
}: {
    productsPerPage: number
    totalProducts: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
}) {
    const [pageNumbers, setPageNumbers] = useState<Array<number>>([])
    const [maxPageNumberLimit, setmaxPageNumberLimit] =
        useState(PAGE_NUMBER_LIMIT)
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0)

    useEffect(() => {
        const newPageNumbers: Array<number> = []
        for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
            newPageNumbers.push(i)
        }
        setPageNumbers(newPageNumbers)
    }, [totalProducts, productsPerPage])

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1)

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + PAGE_NUMBER_LIMIT)
            setminPageNumberLimit(minPageNumberLimit + PAGE_NUMBER_LIMIT)
        }
    }

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)

        if ((currentPage - 1) % PAGE_NUMBER_LIMIT === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - PAGE_NUMBER_LIMIT)
            setminPageNumberLimit(minPageNumberLimit - PAGE_NUMBER_LIMIT)
        }
    }

    const renderPageDots = (key: string, onClick: () => void) => {
        return (
            <li key={key}>
                <button className="text-blue-500 bg-white" onClick={onClick}>
                    &hellip;
                </button>
            </li>
        )
    }

    function getButton(
        btnName: string | number,
        onClickFunction: () => void,
        controlButton?: boolean
    ) {
        return (
            <li key={btnName}>
                <button
                    className={clsx(
                        'py-2 px-2 text-base font-semibold rounded-lg cursor-pointer transition duration-500 ease-in-out',
                        btnName === String(currentPage) || controlButton
                            ? 'text-white bg-blue-500'
                            : 'text-blue-500 bg-white'
                    )}
                    onClick={onClickFunction}
                    disabled={
                        (btnName === 'Prev' &&
                            currentPage === pageNumbers[0]) ||
                        (btnName === 'Next' &&
                            currentPage === pageNumbers[pageNumbers.length - 1])
                    }
                >
                    {btnName}
                </button>
            </li>
        )
    }

    const renderPageNumbers = pageNumbers.map((number) => {
        if (!(number < maxPageNumberLimit + 1 && number > minPageNumberLimit)) {
            return
        }
        return getButton(String(number), () => setCurrentPage(number))
    })
    return (
        <ul className="flex justify-center items-center mt-[50px] mb-[50px] desktop:gap-[20px] sm:max-w-full sm:whitespace-nowrap sm:overflow-x-auto sm:gap-[3px]">
            {getButton('Prev', handlePrevBtn, true)}
            {minPageNumberLimit >= 1 &&
                renderPageDots('leftDots', handlePrevBtn)}
            {renderPageNumbers}
            {pageNumbers.length > maxPageNumberLimit &&
                renderPageDots('rightDots', handleNextBtn)}
            {getButton(
                'Next',
                () => {
                    handleNextBtn()
                },
                true
            )}
        </ul>
    )
}

export default SliderPagination
