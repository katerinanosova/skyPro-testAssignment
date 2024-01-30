export const getPagesQuantity = (count) => {

    const pagesQty = Math.ceil(count / 30)

    const pages = Array.from({ length: pagesQty }, (_, index) => (
        {pageNumber: index + 1}
    ))

    return pages

}