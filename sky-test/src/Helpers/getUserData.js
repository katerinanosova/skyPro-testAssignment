export const getIsAdmin = (isSiteAdmin) => {
    if (isSiteAdmin) {
        return 'да'
    }
    return 'нет'
}

export const shortenNameString = (name) => {

    if (name.length > 12) {
        const shortenName = name.slice(0, 11) + '...'
        return shortenName
    }

    return name
}