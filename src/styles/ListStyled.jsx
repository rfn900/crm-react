import styled from "styled-components";

const ListStyled = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItemStyled = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  list-style: none;
  border: 1px solid #fafafa;
  &:hover {
    background: #f2f7f6;
  }
  a {
    font-weight: 400;
    padding-left: 5px;
    color: #313131;
  }
`;

export { ListStyled, ListItemStyled };
