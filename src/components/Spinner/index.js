import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 10px solid #3583F5;
  border-right: 10px solid #3583F5;
  border-bottom: 10px solid #3583F5;
  border-left: 12px solid #fec14a;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default Spinner;
