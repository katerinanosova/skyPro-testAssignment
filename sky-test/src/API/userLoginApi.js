export const getUsersByPage = async ({ query, page }) => {

    const queryString = encodeURIComponent(`${query} in:login`);

    const response = await fetch(`https://api.github.com/search/users?q=${queryString}&page=${page}`);

    if (response.status === 403) {
        throw new Error("Слишком много запросов в минуту. Без регистрации - без шансов. Надо подождать");
    } else if (response.status === 503) {
        throw new Error("Сервер нихт арбайтен");
    }

    const data = await response.json();
    return data

}

export const getUsersSort = async ({ query, sortOrder, page }) => {

    const queryString = encodeURIComponent(`${query} in:login sort:repositories-${sortOrder}`);

    const response = await fetch(`https://api.github.com/search/users?q=${queryString}&page=${page}`);

    if (response.status === 403) {
        throw new Error("Слишком много запросов в минуту. Без регистрации - без шансов. Надо подождать");
    } else if (response.status === 503) {
        throw new Error("Сервер нихт арбайтен");
    }

    const data = await response.json();
    return data
}

export const getUserByID = async (query) => {

    const queryString = encodeURIComponent(`user:${query}`);
    
    const response = await fetch(`https://api.github.com/search/users?q=${queryString}`);

    if (response.status === 403) {
        throw new Error("Слишком много запросов в минуту. Без регистрации - без шансов. Надо подождать");
    } else if (response.status === 503) {
        throw new Error("Сервер нихт арбайтен");
    }

    const data = await response.json();
    return data
}

export const getUserRepos = async (query) => {
    
    const response = await fetch(`https://api.github.com/users/${query}/repos`);

    if (response.status === 403) {
        throw new Error("Слишком много запросов в минуту. Без регистрации - без шансов. Надо подождать");
    } else if (response.status === 503) {
        throw new Error("Сервер нихт арбайтен");
    }

    const data = await response.json();
    return data

}