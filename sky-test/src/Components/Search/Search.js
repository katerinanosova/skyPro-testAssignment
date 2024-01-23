import { useEffect, useState } from 'react';
import { getUsers } from '../../API/userLoginApi';
import * as S from './Search.styled';

export const Search = (
    // { searchUserByLogin, setSearchUserByLogin }
    ) => {
     
    useEffect(() => {
        getUsers('mojodo').then((users) => {console.log(users);}).catch((error) => {console.error('Ошибка при выполнении запроса:', error)})
    }, []);

    const [searchUserByLogin, setSearchUserByLogin] = useState('');



    return (
        <S.MainSearch>
            <S.SearchLogoIcon src='/img/logo.png' />
            <S.SearchForm>
                <S.SearchText
                    type='search'
                    placeholder='Поиск по пользователям'
                    value={searchUserByLogin}
                    onChange={(e) => setSearchUserByLogin(e.target.value)}
                />
                <S.SearchButton type='submit' >Найти</S.SearchButton>
            </S.SearchForm>
        </S.MainSearch>
    )
}