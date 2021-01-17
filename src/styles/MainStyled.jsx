import styled from "styled-components";

const MainStyled = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  color: #313131;
  flex: 6;
  background: #fafafa;
  .main-container {
    position: relative;
    margin: auto;
    height: 100vh;
    max-width: 1680px;
    display: flex;
    flex-direction: column;
  }

  .homepage-container {
    height: auto;
    display: flex;
    flex: 1;
  }

  a {
    padding: 0;
    margin: 0 !important;
    text-decoration: none;
    color: #2a9d8f;
  }
`;

export { MainStyled };
