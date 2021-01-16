import React, { useContext } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { CustomerContext } from "../context/CustomerContext";
import TableRow from "./TableRow";
import { DashboardWrapperStyled } from "../styles/DashboardWrapperStyled";
import { AdminCardContainer, AdminCardStyled } from "../styles/AdminCard";

export default function Admin() {
  const { customerList } = useContext(CustomerContext);

  return (
    <DashboardWrapperStyled>
      <h2>Your Latest Clients</h2>
      <div>
        <TableRow
          orgNmr="#"
          name="Name"
          paymentTerm="Payment Term"
          website="Website"
          email="Email"
          detailIcon="Edit"
          type="head"
        />
        {customerList
          .filter((_, index) => index <= 3)
          .map((customer, index) => {
            return (
              <TableRow
                key={index}
                id={customer.id}
                orgNmr={customer.organisationNr}
                name={customer.name}
                paymentTerm={`on ${customer.paymentTerm} days`}
                website={customer.website}
                email={customer.email}
                detailIcon={<EditIcon />}
                type="notHead"
              />
            );
          })}
      </div>
      <span className="list-more">
        <Link to="/customers">List All Customers</Link>
      </span>
      <AdminCardContainer>
        <AdminCardStyled>
          <h2>Projected Revenue This Month</h2>
          <p>120 000 SEK</p>
        </AdminCardStyled>
        <AdminCardStyled>
          <h2>Highest Paying Customer</h2>
          <p>Amazon</p>
        </AdminCardStyled>
        <AdminCardStyled>
          <h2>Next Payment</h2>
          <p>Facebook</p>
        </AdminCardStyled>
      </AdminCardContainer>
    </DashboardWrapperStyled>
  );
}
