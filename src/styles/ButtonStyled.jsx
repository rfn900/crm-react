import styled from "styled-components";

const ButtonStyled = styled.button`
  background: #2a9d8f;
  border: none;
  padding: 10px 30px;
  color: #fff;
  border-radius: 20px;
  font-size: 18px;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  :hover {
    background-color: #1f7067;
  }
  display: flex;
  align-items: center;
  :disabled {
    background: #666;
    opacity: 0.4;
    cursor: inherit;
  }
  svg {
    margin-right: 5px;
    fill: white;
  }
`;

export { ButtonStyled };
