import styled from "styled-components";

const ContainerStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ErrorTabStyled = styled.p`
  background: #f4f4f4;
  text-align: center;
  color: red;
  padding: 10px 0;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
  span {
    position: absolute;
    left: 0;
    top: 1px;
    width: 30px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3a4145;
    z-index: 1;
    padding: 0 5px;
  }
`;

const InputStyled = styled.input`
  width: 300px;
  height: 45px;
  border: none;
  border-radius: 5px;
  background: #ecf3f2;
  padding-left: 40px;
  ::placeholder {
    color: #b3baba;
  }
`;

export { InputContainer, InputStyled, ErrorTabStyled, ContainerStyled };
