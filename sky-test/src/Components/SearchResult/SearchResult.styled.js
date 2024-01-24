import styled from "styled-components";

export const SearchResultWrapper = styled.div`
max-width: 1178px;
margin: 20px auto;
padding: 31px 10px 0px;
display: flex;
justify-content: space-between;
`

export const SearchResultBox = styled.div`

`

export const SearchSortBox = styled.div`
span {
    text-decoration: underline;
    cursor: pointer;
}
`

export const SortList = styled.div`
position: absolute;
width: 137px;
display: flex;
flex-flow: column;
justify-content: flex-end;
align-items: flex-end;
overflow: hidden;
transition: height 0.3s ease-in-out 0s;
height: ${({ $sortIsVisible }) => ($sortIsVisible ? "45px" : "0")};
`

export const SortListItem = styled.div`
&:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`