import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { ListStyled, ListItemStyled } from "../styles/ListStyled";

const SidebarContainerStyled = styled.div`
  position: relative;
  height: 100%;
  background: #3a4145;
  flex: 2;
  min-width: 150px;
  max-width: 250px;
  display: flex;
  justify-content: center;
`;

const SidebarListItem = styled(ListItemStyled)`
  border: none;
  &:hover {
    background: none;
  }
  a {
    color: #ecf3f2;
    display: flex;
    align-items: center;
    svg {
      fill: #ecf3f2;
      margin-right: 5px;
    }
    span {
      margin-left: 5px;
      display: flex;
      justify-content: center;
      align-center: center;
      svg {
        margin: 0;
      }
    }
  }
`;

export default function Sidebar() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <SidebarContainerStyled>
      <ListStyled>
        <SidebarListItem>
          <Link to="/customer-count">
            <GroupOutlinedIcon />
            Number of Clients
          </Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link to="/account">
            <InfoOutlinedIcon />
            Account Info
          </Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link to="/admin">
            <HomeOutlinedIcon />
            Home
          </Link>
        </SidebarListItem>
      </ListStyled>
    </SidebarContainerStyled>
  );
}
