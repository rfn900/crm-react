import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import { CustomerContext } from "../context/CustomerContext";
import TableRow from "./TableRow";
import { DashboardWrapperStyled } from "../styles/DashboardWrapperStyled";
import { InputStyled } from "../styles/InputStyled";
import { InputContainerStyled } from "../styles/InputContainerStyled";
import styled from "styled-components";

const CustomerListHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function CustomerList() {
  const { customerList } = useContext(CustomerContext);
  const [renderedCustomers, setRenderedCustomers] = useState(customerList);
  const [searchField, setSearchField] = useState("");

  const location = useLocation();
  const page = location.search ? location.search.split("=")[1] : 1;
  const numberOfPages = Math.ceil(customerList.length / 5);

  let paginationArray = [];
  for (let i = 0; i < numberOfPages; i++) {
    paginationArray.push(i + 1);
  }

  const handleOnChange = (e) => {
    setSearchField(e.target.value);
  };

  console.log(numberOfPages);
  return (
    <DashboardWrapperStyled>
      <CustomerListHeaderStyled>
        <h2>All Customers</h2>
        <InputContainerStyled>
          <InputStyled
            type="text"
            placeholder="search"
            onChange={handleOnChange}
          />
          <span className="email-span">
            <SearchIcon />
          </span>
        </InputContainerStyled>
      </CustomerListHeaderStyled>

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
        {renderedCustomers
          .filter((customer) => customer.name.includes(searchField))
          .filter((_, index) => index < 5 * page && index >= page * 5 - 5)
          .map((customer, index) => {
            return (
              <>
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
              </>
            );
          })}
      </div>
      <div className="pagination">
        {paginationArray.map((pageNmr, index) => {
          const pageLink = (
            <Link to={`/customers?page=${pageNmr}`}>{pageNmr}</Link>
          );

          return (
            <span key={index}>{page == pageNmr ? pageNmr : pageLink}</span>
          );
        })}
      </div>
    </DashboardWrapperStyled>
  );
}
