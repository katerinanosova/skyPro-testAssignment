export const getUsers = async (userLoginQuery) => {
    
    const queryString = encodeURIComponent(`${userLoginQuery} in:login`);

    const response = await fetch(`https://api.github.com/search/users?q=${queryString}`);

    const data = await response.json();
    return data
}

export const getUsersSort = async ({ query, sortOrder }) => {

    const queryString = encodeURIComponent(`${query} in:login sort:repositories-${sortOrder}`);

    const response = await fetch(`https://api.github.com/search/users?q=${queryString}`);

    const data = await response.json();
    return data
}

