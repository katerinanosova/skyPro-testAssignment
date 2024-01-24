import { Link } from 'react-router-dom'
import * as S from './UserCard.styled'

export const UserCard = ({ user }) => {

    return (
        <S.UserCardContainer>
            <Link to={`/users/${user.login}`}>
                <S.UserImage src={user.avatar_url} />
                <S.UserName>{user.login}</S.UserName>
            </Link>
        </S.UserCardContainer>
    )
}