import styled from "styled-components";

export const InputContainer = styled.div`
  height: 200px;
  display: flex;
  padding: 50px 50px;
  align-items: center;
  justify-content: center;
  background-color: #1f386f;
`;

export const InputWrapper = styled.div`
  height: 100px;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputForm = styled.form`
  height: 100px;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
