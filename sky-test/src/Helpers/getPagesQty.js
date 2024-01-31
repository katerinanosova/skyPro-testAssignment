export const getPagesQuantity = (count) => {

    const pagesQty = Math.ceil(count / 30)

    const pages = Array.from({ length: pagesQty }, (_, index) => (
        {pageNumber: index + 1}
    ))

    return pages

}

export const getVisiblePages = ({ pages, activePage }) => {
    const maxVisiblePages = 7;
    const firstVisiblePage = Math.max(1, activePage - Math.floor(maxVisiblePages / 2));
    const lastVisiblePage = Math.min(pages.length, firstVisiblePage + maxVisiblePages - 1);

    const visiblePages = pages.slice(firstVisiblePage - 1, lastVisiblePage);

    return visiblePages
}