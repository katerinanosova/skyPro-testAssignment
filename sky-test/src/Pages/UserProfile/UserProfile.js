import { useParams } from 'react-router-dom'
import * as S from './UserProfile.styled'
import { useEffect, useState } from 'react';
import { getUserByID, getUserRepos } from '../../API/userLoginApi';
import { getIsAdmin } from '../../Helpers/getUserData';
import { LoaderUserProfile } from '../../Components/Loaders/LoaderUserProfile';

export const UserProfile = () => {

    const params = useParams();
    const [userData, setUserData] = useState(null);
    const [userRepos, setUserRepos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        getUserByID(params.id)
        .then((user) => {
            setUserData(user.items[0])})
        .catch((error) => console.error(error))
        
        getUserRepos(params.id)
        .then((repos) => {
            setUserRepos(repos)})
        .catch((error) => console.error(error))
    }, [params.id])


    useEffect(() => {
        if (userData) {
            setIsLoading(false)
        }
    }, [userData]);





    return (
        <S.ProfileWrapper>
            <S.ProfileContainer> 
                <S.ProfileReturn>
                    <S.ProfileReturnLogo src='/img/logo.png' />
                    <S.ProfileReturnButton>Назад</S.ProfileReturnButton>
                </S.ProfileReturn>
                {isLoading ? <LoaderUserProfile /> :
                <S.ProfileContent>
                    <S.ProfileImage src={userData.avatar_url} />
                    <S.ProfileDescription>
                        <S.ProfileUserName>{userData.login}</S.ProfileUserName>
                        <S.ProfileUserRepos>Репозитории: {userRepos.length}</S.ProfileUserRepos>
                        <S.ProfileUserIsAdmin>Админ: {getIsAdmin(userData.site_admin)}</S.ProfileUserIsAdmin>
                    </S.ProfileDescription>
                </S.ProfileContent>}
            </S.ProfileContainer>
        </S.ProfileWrapper>
    
    )
}