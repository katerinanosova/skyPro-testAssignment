import { useState } from 'react'
import * as S from './Main.styled'
import { Search } from "../../Components/Search/Search"


export const Main = () => {
    // const [searchUserByLogin, setSearchUserByLogin] = useState('');


    return (
        <S.Wrapper>
            <S.Container>
                <Search 
                // setSearchUserByLogin={setSearchUserByLogin} searchUserByLogin={searchUserByLogin} 
                />
            </S.Container>
        </S.Wrapper>
        
    )
}