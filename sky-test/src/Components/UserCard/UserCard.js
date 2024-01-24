import * as S from './UserCard.styled'

export const UserCard = ({ user }) => {

    return (
        <S.UserCardContainer>
            <S.UserImage src={user.avatar_url} />
            <S.UserName>{user.login}</S.UserName>
        </S.UserCardContainer>
    )
}