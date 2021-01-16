import styled from "styled-components";

const AdminCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AdminCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  width: 20em;
  height: 15em;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.05);
  transition: all 150ms ease-out;
  &:hover {
    box-shadow: 5px 10px 40px rgba(0, 0, 0, 0.1);
    transform: scale(1.025);
  }

  h2 {
    margin-bottom: 1em;
    text-align: center;
  }

  p {
    font-size: 1.5em;
  }
`;

export { AdminCardContainer, AdminCardStyled };
