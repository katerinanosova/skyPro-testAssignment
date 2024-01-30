import { useEffect, useState } from 'react';
import { getPagesQuantity } from '../../Helpers/getPagesQty'
import * as S from './PaginationBar.styled'
import { getUsersByPage } from '../../API/userLoginApi';

export const PaginationBar = ({ count, query, setFoundUsers }) => {

    console.log(getPagesQuantity(count));
    const [ pages, setPages ] = useState([]);
    
    useEffect(() => {
        setPages(getPagesQuantity(count))
    }, [count])

    const goToPage = (page) => {
        getUsersByPage({ query, page })
        .then((users) => {setFoundUsers(users)})
        .catch((error) => {console.error(error)})
    }

    

    return (
        <S.PaginationBarContent>
            <S.PaginationBarReturnButton src='./img/return.png' />
            {pages.map((page) => (
                <S.PaginationBarPage key={page.index} onClick={() => goToPage(page.pageNumber)}>{page.pageNumber}</S.PaginationBarPage>
            ))}            
            <S.PaginationBarForwardButton src='./img/forward.png' />
        </S.PaginationBarContent>
    )
}