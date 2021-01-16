import styled from "styled-components";

const InputContainerStyled = styled.div`
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

export { InputContainerStyled };
