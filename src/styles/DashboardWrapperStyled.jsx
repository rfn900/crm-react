import styled from "styled-components";

const DashboardWrapperStyled = styled.div`
  margin: 1em;
  display: flex;

  flex-direction: column;
  & > div {
    margin-top: 1em;
  }
  h1 {
    margin-bottom: 0.75em;
  }
  .list-more {
    margin: 0.75em 0.2em 0 auto;
  }

  button {
    margin-top: 0.5em;
  }

  .pagination {
    margin-left: auto;
    span {
      font-size: 1.5rem;

      margin-right: 5px;
      a {
        font-weight: 700;
        font-size: 1.5rem;
      }
    }
  }
`;

export { DashboardWrapperStyled };
