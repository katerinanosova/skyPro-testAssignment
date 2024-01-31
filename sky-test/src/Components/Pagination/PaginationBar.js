import { useEffect, useState } from 'react';
import { getPagesQuantity, getVisiblePages } from '../../Helpers/getPagesQty'
import * as S from './PaginationBar.styled'
import { getUsersByPage } from '../../API/userLoginApi';

export const PaginationBar = ({ count, query, setFoundUsers, activePage, setActivePage }) => {

    const [ pages, setPages ] = useState([]);
    
    useEffect(() => {
        setPages(getPagesQuantity(count))
    }, [count])

    const goToPage = (page) => {
        getUsersByPage({ query, page })
        .then((users) => {
            setFoundUsers(users)
            setActivePage(page)
        })
        .catch((error) => {console.error(error)})
    }

    const maxVisiblePages = 7;

    const showMorePages = () => {
        const newMaxVisiblePages = maxVisiblePages + 7;
        if (newMaxVisiblePages > pages.length) {
          setActivePage(pages.length);
        } else {
          setActivePage(activePage + 7);
        }
      };

    

    return (
        <S.PaginationBarContent>
            <S.PaginationBarReturnButton onClick={() => goToPage(activePage - 1)} src='./img/return.png' />
            {getVisiblePages({ pages, activePage }).map((page) => (
                <S.PaginationBarPage key={page.pageNumber} $isActive={activePage === page.pageNumber} onClick={() => goToPage(page.pageNumber)}>{page.pageNumber}</S.PaginationBarPage>
            ))}

            {pages.length > maxVisiblePages && activePage <= pages.length - maxVisiblePages && (
                <S.PaginationBarPage onClick={() => showMorePages()} >...</S.PaginationBarPage>
            )}


            <S.PaginationBarForwardButton onClick={() => goToPage(activePage + 1)} src='./img/forward.png' />
        </S.PaginationBarContent>
    )
}