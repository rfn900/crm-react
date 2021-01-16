import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ListStyled, ListItemStyled } from "../styles/ListStyled";
const DropDownCardStyled = styled.div`
  position: absolute;
  background: white;
  border: none;
  border-radius: 15px;
  top: 65px;
  right: 75px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
  visibility: ${(props) => props.visibility};
  opacity: ${(props) => props.opacity};
  transition: opacity 100ms ease-out;
  padding: 10px 0;
  z-index: 99;
`;

export default function DropDownMenu({ isDropDownVisible }) {
  const visibility = isDropDownVisible ? "visible" : "hidden";
  const opacity = isDropDownVisible ? "1" : "0";

  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("WEBB20");
    history.push("/");
  };

  return (
    <DropDownCardStyled visibility={visibility} opacity={opacity}>
      <ListStyled>
        <ListItemStyled>
          <InfoOutlinedIcon />
          <Link to="/account">Account Info</Link>
        </ListItemStyled>
        <ListItemStyled onClick={handleLogout}>
          <ExitToAppIcon />
          <Link to="">Log Out</Link>
        </ListItemStyled>
      </ListStyled>
    </DropDownCardStyled>
  );
}
