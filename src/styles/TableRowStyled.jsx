import styled from "styled-components";

const TableRowStyled = styled.div`
  position: relative;
  margin-top: 5px;
  display: flex;
  border: solid 2px #eaeaea;
  cursor: ${({ type }) => (type == "notHead" ? "pointer" : "inherit")};
  align-items: center;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  transition: all 200ms ease-out;
  &:hover {
    box-shadow: ${({ type }) =>
      type == "notHead"
        ? "2px 5px 40px rgba(0, 0, 0, 0.1);"
        : "2px 5px 10px rgba(0, 0, 0, 0.1);"};
    transform: ${({ type }) => (type == "notHead" ? "scale(1.005);" : "none")};
  }
  div {
    font-weight: ${({ type }) => (type == "notHead" ? "400" : "700")};
    flex: 1;
    padding: 0.75em 1.75em 0.75em 0;
    text-align: left;
  }
  .id-cell {
    flex: 0.3;
    padding-left: 1em;
  }
  span {
    font-weight: 700;
    padding: 0 0.5em;

    svg {
      padding-left: 0.7em;
      transition: all 200ms ease-out;
      &:hover {
        fill: #1f7067;
      }
    }
  }
`;

export { TableRowStyled };
