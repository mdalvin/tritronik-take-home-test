import styled from "styled-components";

export const InputContainer = styled.div`
  height: 200px;
  display: flex;
  padding: 50px 50px;
  align-items: center;
  justify-content: center;
  background-color: #1f386f;

  @media screen and (max-width: 375px) {
    padding: 0px 0px;
    height: 290px;
  }
`;

export const InputWrapper = styled.div`
  height: 100px;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    display: grid;
    top: 0;
    width: 375px;
  }
`;

export const InputForm = styled.form`
  height: 100px;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    padding: 0px 0px;
    height: 130px;
    display: grid;
  }
`;

export const InputField = styled.input`
  width: 400px;
  height: 50px;
  background-color: #fff;
  color: #1f386f;
  font-size: 20px;
  border: none;
  border-radius: 20px;
  margin-right: 25px;
  padding: 0 20px;

  @media screen and (max-width: 375px) {
    margin-bottom: 20px;
    width: 300px;
    height: 35px;
    margin-left: 25px;
  }
`;

export const InputButton = styled.button`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 35px;
  padding-top: 8px;
  color: #1f386f;
  background-color: #fec14a;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:hover {
    transition: 0.3s all ease-in-out;
    color: #fec14a;
    background-color: #1f386f;
    border: 3px solid #fec14a;
    font-size: 30px;
    padding-top: none;
  }

  @media screen and (max-width: 375px) {
    width: 300px;
    height: 35px;
    border-radius: 25px;
    font-size: 20px;
    margin-left: 25px;
  }
`;
