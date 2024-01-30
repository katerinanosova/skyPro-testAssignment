import styled from "styled-components";

export const UserCardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
row-gap: 10px;

`

export const UserImage = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
margin-bottom: 15px;
`

export const UserName = styled.p`
max-width: 150px;
color: black;
font-size: 22px;
font-weight: 700;
line-height: 26px;
text-align: center;
`