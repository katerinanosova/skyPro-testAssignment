import { useState } from 'react'
import * as S from './SearchResult.styled'
import { getUsersSort } from '../../API/userLoginApi';

export const SearchResult = ({ count, query, setFoundUsers }) => {

    const [sortIsVisible, setSortIsVisible] = useState(false);

    const sortAppear = () => {
        setSortIsVisible(!sortIsVisible);
    }

    const sortResults = (sortOrder) => {
        getUsersSort({ query, sortOrder })
        .then((users) => {setFoundUsers(users);})
        .catch((error) => {console.error('Ошибка при выполнении запроса:', error)})
    }

    return (
        <S.SearchResultWrapper>
            <S.SearchResultBox>Found {count} results for {query}</S.SearchResultBox>
            <S.SearchSortBox onClick={() => sortAppear()}>Sort by <span>repositories</span>
                <S.SortList $sortIsVisible={sortIsVisible}>
                    <S.SortListItem onClick={() => sortResults('asc')}>Ascending</S.SortListItem>
                    <S.SortListItem onClick={() => sortResults('desc')}>Descending</S.SortListItem>
                </S.SortList>
            </S.SearchSortBox>
        </S.SearchResultWrapper>
    )
}