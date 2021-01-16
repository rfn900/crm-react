import React, { useContext } from "react";
import styled from "styled-components";
import { CustomerContext } from "../context/CustomerContext";
import { AdminCardContainer, AdminCardStyled } from "../styles/AdminCard";

const CustomerCountContainer = styled(AdminCardContainer)`
  justify-content: center;
  height: 100%;
  align-items: center;

  p {
    font-size: 3em;
  }
`;
export default function ClientCount() {
  const { customerList } = useContext(CustomerContext);
  const numberOfClients = customerList.length;
  return (
    <CustomerCountContainer>
      <AdminCardStyled>
        <h2>Your Current Number of Clients is</h2>
        <p>{numberOfClients}</p>
      </AdminCardStyled>
    </CustomerCountContainer>
  );
}
