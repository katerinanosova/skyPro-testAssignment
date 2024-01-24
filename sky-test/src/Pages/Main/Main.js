import { useEffect, useState } from 'react'
import * as S from './Main.styled'
import { Search } from "../../Components/Search/Search"
import { UserCard } from '../../Components/UserCard/UserCard';


export const Main = () => {
    // const [searchUserByLogin, setSearchUserByLogin] = useState('');

    const [foundUsers, setFoundUsers] = useState();

    useEffect(() => {
        if (foundUsers) {
            console.log(foundUsers.items);
        }
    }, [foundUsers])


    return (
        <S.Wrapper>
            <S.Container>
                <Search 
                // setSearchUserByLogin={setSearchUserByLogin} searchUserByLogin={searchUserByLogin}
                setFoundUsers={setFoundUsers}
                />
                <S.MainContent>
                    {foundUsers?.items.map((user) => (
                        <UserCard key={user.id} user={user} />))
                    }
                </S.MainContent>
            </S.Container>
        </S.Wrapper>
        
    )
}