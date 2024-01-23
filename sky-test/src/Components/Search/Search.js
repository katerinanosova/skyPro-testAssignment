import * as S from './Search.styled';

export const Search = () => {
    return (
        <S.MainSearch>
            <S.SearchLogoIcon src='/img/logo.png' />
            <S.SearchForm>
                <S.SearchText
                    type='search'
                    placeholder='Поиск по пользователям'
                />
                <S.SearchButton type='submit'>Найти</S.SearchButton>
            </S.SearchForm>
        </S.MainSearch>
    )
}