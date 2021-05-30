import styled from "styled-components";

export const FooterContainer = styled.div`
    height: 70px;
    display: flex;
    background-color: #fec14a;
    color: #1f386f;
    justify-content: right;
    align-items: center;
    padding: 0 100px;

    @media screen and (max-width: 375px) {
        padding: 0 60px;
    }
`;

export const FooterWrapper = styled.footer`
    height: 70px;
    padding-top: 10px;
    display: flex;
    text-align: right;

    @media screen and (max-width: 375px) {
        height: 70px;
        display: flex;
        text-align: center;     
    }
`;

export const FooterP = styled.p`
    font-weight: 600;
    font-size: 16px;
`;