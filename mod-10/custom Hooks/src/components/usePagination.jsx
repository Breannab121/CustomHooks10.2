import { useState, useEffect} from 'react'


function usePagination(totalItems, itemsPerPage, initialPage) {
    const [currentPage, setCurrentPage] = useState(initialPage)
    const totalPages = Math.ceil(totalItems/itemsPerPage)
    const startIndex = (currentPage-1)*itemsPerPage
    const endIndex = startIndex + itemsPerPage
    //const itemsOnCurrentPage = totalItems

    useEffect(() => {
    if (currentPage > totalPages) {
        setCurrentPage(totalPages);
    }
    }, [totalPages]);

    const setPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    } 

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const canNextPage = currentPage < totalPages

    const canPrevPage = currentPage > 1

    return {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        setPage,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage,
    }
}

export default usePagination
