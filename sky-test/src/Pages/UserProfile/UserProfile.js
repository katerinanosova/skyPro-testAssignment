import { useParams } from 'react-router-dom'
import * as S from './UserProfile.styled'
import { useEffect, useState } from 'react';
import { getUserByID } from '../../API/userLoginApi';

export const UserProfile = () => {

    const params = useParams();
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        getUserByID(params.id)
        .then((user) => {
            setUserData(user.items)})
        .catch((error) => console.error(error))
    }, [params.id])


    useEffect(() => {
        if (userData) {
            setIsLoading(false)
        }
    }, [userData]);



    return (
        isLoading ? <S.Loading>Грузимся</S.Loading> : 
        <S.ProfileWrapper>
            <S.ProfileContainer>Привет, {userData[0].login}</S.ProfileContainer>
        </S.ProfileWrapper>
    
    )
}