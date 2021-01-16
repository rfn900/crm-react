import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import BookmarkOutlinedIcon from "@material-ui/icons/BookmarkOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
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
          <Link to="/">
            <PaymentOutlinedIcon />
            Next Payments
          </Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link to="/customer-count">
            <GroupOutlinedIcon />
            Number of Clients
          </Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link to="/account">
            <BookmarkOutlinedIcon />
            Bookmarked
          </Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link to="/admin">
            <HomeOutlinedIcon />
            Admin
          </Link>
        </SidebarListItem>
      </ListStyled>
    </SidebarContainerStyled>
  );
}
