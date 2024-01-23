import * as S from './Search.styled';

export const Search = () => {
    return (
        <S.SearchForm>
            <S.SearchText
                type='search'
                placeholder='Поиск по пользователям'
             />
            <S.SearchButton type='submit'>Найти</S.SearchButton>
        </S.SearchForm>
    )
}