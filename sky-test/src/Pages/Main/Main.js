import { useEffect, useState } from 'react'
import * as S from './Main.styled'
import { Search } from "../../Components/Search/Search"
import { UserCard } from '../../Components/UserCard/UserCard';
import { SearchResult } from '../../Components/SearchResult/SearchResult';


export const Main = () => {
    const [searchUserByLogin, setSearchUserByLogin] = useState('');
    const [foundUsers, setFoundUsers] = useState();
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (foundUsers) {
            setQuery(searchUserByLogin)
        }
    }, [foundUsers])


    return (
        <S.Wrapper>
            <S.Container>
                <Search 
                setSearchUserByLogin={setSearchUserByLogin} searchUserByLogin={searchUserByLogin}
                setFoundUsers={setFoundUsers}
                />
                {foundUsers ? 
                <SearchResult count={foundUsers?.total_count} query={query} setFoundUsers={setFoundUsers} /> : ''}
                <S.MainContent>
                    {foundUsers?.items.map((user) => (
                        <UserCard key={user.id} user={user} />))
                    }
                </S.MainContent>
            </S.Container>
        </S.Wrapper>
        
    )
}