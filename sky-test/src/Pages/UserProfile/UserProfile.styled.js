import styled from "styled-components";

export const ProfileWrapper = styled.div`
width: 100%;
height: 100vh;
background-color: #f1f1f1;
display: flex;
flex-direction: column;
`

export const ProfileContainer = styled.div`
max-width: 1440px;
width: 100%;
height: 100%;
margin: 0 auto;
background-color: #ffffff;
`

export const Loading = styled.div`

`

export const ProfileReturn = styled.div`
position: center;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
padding: 11px 0;
max-width: 1178px;
margin: 0 auto;
padding: 31px 10px 0px;
`

export const ProfileReturnLogo = styled.img`
width: 54px;
height: auto;
cursor: pointer;
`

export const ProfileReturnButton = styled.button`
margin-left: 50px;
width: 158px;
height: 50px;
background-color: #009EE4;
border: 1px solid #009EE4;
border-radius: 6px;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;

&:hover {
    background-color: #0080C1;
}
`

export const ProfileContent = styled.div`
display: flex;
gap: 50px;
margin: 80px;
padding: 0px 10px 0px;
`

export const ProfileImage = styled.img`
width: 170px;
height: 170px;
border-radius: 50%;
background-color: #f0f0f0;
`

export const ProfileDescription = styled.div`

`

export const ProfileUserName = styled.h3`
font-size: 40px;
font-weight: 600;
line-height: 70px;
margin-bottom: 15px;
`

export const ProfileUserRepos = styled.p`
font-size: 20px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
`

export const ProfileUserIsAdmin = styled.p`
font-size: 20px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
`