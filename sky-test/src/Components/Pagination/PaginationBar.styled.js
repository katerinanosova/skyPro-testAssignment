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
cursor: pointer;

&:hover {
    border-bottom: 1px solid black;
}

`

export const PaginationBarPage = styled.p`
cursor: pointer;
color: ${({ $isActive }) => ($isActive ? "#009EE4" : "black")};
text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};

&:hover {
    text-decoration: underline;
}

`

export const PaginationBarForwardButton = styled.img`
height: 17px;
margin-left: 10px;
cursor: pointer;

&:hover {
    border-bottom: 1px solid black;
}
`