import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 1000px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #1f386f;
`;

export const FormWrap = styled.div`
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-text: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  magin-top: 32px;
  text-decoration: none;
  color: #d43e2b;
  font-weight: 700;
  font-size: 50px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #fec14a;
  max-width: 480px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }

  @media screen and (max-width: 480px) {
    transform: scale(0.8);
    margin-top: 0;
  }
`;

export const FormH1 = styled.div`
  margin-bottom: 40px;
  color: #1f386f;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #1f386f;
`;

export const FormInput = styled.input`
  padding: 12px 12px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #1f386f;
  padding: 12px 0;
  border: none;
  border-radius: 4px;
  color: #fec14a;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
    transition: 0.2s all ease-in-out;
    font-weight: 600;
    color: #fec14a;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const HomeLogo = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;

  &:hover {
    transition: 0.2s all ease-in-out;
    filter: grayscale(100%);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 20px;
  margin-left: 20px;
  height: 60px;
  z-index: 1;
  width: 1400px;

  @media screen and (max-width: 480px) {
    margin-bottom: 15px;
  }
`;