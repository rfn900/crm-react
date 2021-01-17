import React, { useContext } from "react";
import styled from "styled-components";
import { ListItemStyled, ListStyled } from "../styles/ListStyled";
import { LoginContext } from "../context/LoginContext";

const AccountInfoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h2 {
    font-size: 2.75em;
    margin-bottom: 1em;
  }
  span {
    margin-left: 5px;
  }
`;
export default function AccountInfo() {
  const { firstName, lastName, email } = useContext(LoginContext);
  return (
    <AccountInfoWrapperStyled>
      <h2>Account Info</h2>
      <ListStyled>
        <ListItemStyled>
          <b>First Name: </b> <span>{firstName}</span>
        </ListItemStyled>
        <ListItemStyled>
          <b>Last Name: </b> <span>{lastName}</span>
        </ListItemStyled>
        <ListItemStyled>
          <b>Email: </b> <span>{email}</span>
        </ListItemStyled>
      </ListStyled>
    </AccountInfoWrapperStyled>
  );
}
