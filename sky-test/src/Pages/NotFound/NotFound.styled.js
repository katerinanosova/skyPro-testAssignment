import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;

export const NotFoundContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

export const NotFoundBox = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 400px;
    margin-left: 40px;
    margin-right: 40px;

    @media screen and (max-width: 590px) {
        max-width: 500px;
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 150px;
    }
    
`

export const NotFoundTitle = styled.h1`
    color: #000;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    // line-height: 220%;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 40px;


    @media screen and (max-width: 590px) {
        font-size: 24px;
        line-height: 120%;
    }
`

export const NotFoundLogoIcon = styled.img`
    width: 54px;
    height: 54px;
`

export const NotFoundDescription = styled.p`
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 32px;
    margin-top: 12px;

    @media screen and (max-width: 590px) {
        font-size: 22px;
        line-height: 28px;
    }
`

export const NotFoundReturnButton = styled.button`
    width: 241px;
    height: 50px;
    background-color: #009ee4;
    border: 1px solid #009ee4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;

    &:hover {
    background-color: #0080c1;
    }
`