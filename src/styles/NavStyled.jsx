import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  background: #ecf3f2;
  padding: 1em 4em;
`;

const ListStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1em;
  margin-left: auto;
  font-weight: 500;
  font-size: 1.2rem;
  a {
    color: #424849;
  }
`;
const AvatarItemStyled = styled.div`
  color: #424849;

  cursor: pointer;
  margin-left: 2.3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-left: 5px;
  }
`;

const ListItemStyled = styled.div`
  margin-left: 2.3em;
`;

const LogoStyled = styled.h1``;
export {
  NavContainer,
  ListItemStyled,
  ListStyled,
  LogoStyled,
  AvatarItemStyled,
};
