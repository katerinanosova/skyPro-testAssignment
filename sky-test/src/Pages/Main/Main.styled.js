import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const MainContent = styled.div`
width: 100%;
max-width: 1178px;
overflow: auto;
display: grid;
grid-template-columns: repeat(5, 1fr);
column-gap: 26px;
row-gap: 55px;
margin: 20px auto;
padding: 31px 0px 0px;
overflow-y: scroll;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}
`

export const MainErrorMessage = styled.div`
width: 100%;
max-width: 1178px;
margin: 20px auto;
padding: 31px 0px 0px;
`