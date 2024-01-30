import styled from "styled-components";

export const PaginationBarContent = styled.div`
max-width: 1178px;
margin: 20px auto;
padding: 0px 10px 0px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`

export const PaginationBarReturnButton = styled.img`
height: 17px;
margin-right: 10px;

`

export const PaginationBarPage = styled.p`
cursor: pointer;

&:hover {
    text-decoration: underline;
}

`

export const PaginationBarForwardButton = styled.img`
height: 17px;
margin-left: 10px;
`