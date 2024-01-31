import { getUsers, getUsersByPage } from '../../API/userLoginApi';
import * as S from './Search.styled';

export const Search = ({ searchUserByLogin, setSearchUserByLogin, setFoundUsers }) => {
    
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchUserByLogin.length > 0) {
            getUsersByPage({ query: searchUserByLogin, page: 1})
            .then((users) => {setFoundUsers(users);})
            .catch((error) => {console.error('Ошибка при выполнении запроса:', error)})
        }
    }
    
    const clearSearch = () => {
        setSearchUserByLogin('');
        setFoundUsers();
    }

    return (
        <S.MainSearch>
            <S.SearchLogoIcon src='/img/logo.png' onClick={() => clearSearch()} />
            <S.SearchForm>
                <S.SearchText
                    type='search'
                    placeholder='Поиск по пользователям'
                    value={searchUserByLogin}
                    onChange={(e) => setSearchUserByLogin(e.target.value)}
                />
                <S.SearchButton type='submit' onClick={(e) => handleSearch(e)} >Найти</S.SearchButton>
            </S.SearchForm>
        </S.MainSearch>
    )
}