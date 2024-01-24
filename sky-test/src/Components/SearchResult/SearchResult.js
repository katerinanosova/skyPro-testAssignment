import * as S from './SearchResult.styled'

export const SearchResult = ({ count, query }) => {
    return (
        <S.SearchResultBox>Found {count} results for {query}</S.SearchResultBox>
    )
}