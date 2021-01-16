import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "../context/LoginContext";
import {
  NavContainer,
  ListStyled,
  ListItemStyled,
  LogoStyled,
  AvatarItemStyled,
} from "../styles/NavStyled";
import { ButtonStyled } from "../styles/ButtonStyled";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import DropDownMenu from "./DropDownMenu";

const AddButtonStyled = styled(ButtonStyled)`
  padding: 7px 20px;
  display: flex;
  align-items: center;
  border: 2px solid #1f7067;
  background-color: #ecf3f2;
  color: #1f7067;
  svg {
    margin-right: 5px;
    fill: #1f7067;
  }
  &:hover {
    color: white;
  }
  &:hover svg {
    fill: white;
  }
`;

export default function Nav() {
  const { firstName, lastName, email } = useContext(LoginContext);
  const [moveDropDown, setMoveDropDown] = useState(false);

  const handleOnClick = (e) => {
    setMoveDropDown((isDropDownVisible) => !isDropDownVisible);
  };

  return (
    <NavContainer>
      <DropDownMenu isDropDownVisible={moveDropDown} />
      <LogoStyled>
        <Link to="/">{`<CRM />`}</Link>
      </LogoStyled>
      <ListStyled>
        <ListItemStyled>
          <Link to="/customers">
            <ButtonStyled>Customer List</ButtonStyled>
          </Link>
        </ListItemStyled>
        <ListItemStyled>
          <Link to="/customers/add">
            <AddButtonStyled>
              <AddCircleOutlineOutlinedIcon />
              New Costumer
            </AddButtonStyled>
          </Link>
        </ListItemStyled>
        <AvatarItemStyled onClick={handleOnClick}>
          <AccountCircleIcon fontSize="large" />
          <p>{firstName}</p>
          <ArrowDropDownIcon fontSize="large" />
        </AvatarItemStyled>
      </ListStyled>
    </NavContainer>
  );
}
