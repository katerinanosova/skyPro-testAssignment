import { useState } from 'react'
import * as S from './SearchResult.styled'

export const SearchResult = ({ count, query }) => {

    const [sortIsVisible, setSortIsVisible] = useState(false);

    const sortAppear = () => {
        setSortIsVisible(!sortIsVisible);
    }

    return (
        <S.SearchResultWrapper>
            <S.SearchResultBox>Found {count} results for {query}</S.SearchResultBox>
            <S.SearchSortBox onClick={() => sortAppear()}>Sort by <span>repositories</span>
                <S.SortList $sortIsVisible={sortIsVisible}>
                    <S.SortListItem>Ascending</S.SortListItem>
                    <S.SortListItem>Descending</S.SortListItem>
                </S.SortList>
            </S.SearchSortBox>
        </S.SearchResultWrapper>
    )
}