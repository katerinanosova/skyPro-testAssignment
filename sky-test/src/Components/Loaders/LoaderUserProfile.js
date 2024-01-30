import * as S from './LoaderUserProfile.styled'

export const LoaderUserProfile = () => {

    return (
        <S.LoaderUserProfileContent>
            <S.LoaderUserProfileImage />
            <S.LoaderUserProfileDescription>
                <S.LoaderUserProfileName />
                <S.LoaderUserProfileData />
                <S.LoaderUserProfileData />
            </S.LoaderUserProfileDescription>
        </S.LoaderUserProfileContent>
    )
}