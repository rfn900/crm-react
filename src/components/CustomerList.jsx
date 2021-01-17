import React, { useState, useEffect, useContext } from "react";
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
  const [customerList, setCustomerList] = useState([]);
  const [renderedCustomers, setRenderedCustomers] = useState(customerList);

  const location = useLocation();

  const getCostumerList = () => {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
        console.log(data.results);
      });
  };
  useEffect(() => {
    getCostumerList();
  }, []);

  const handleOnChange = (e) => {
    const newRender = customerList.filter((customer) => {
      console.log(customer.name, e.target.value);
      return customer.name.includes(e.target.value);
    });

    setRenderedCustomers(newRender);
    console.log(newRender, customerList);
  };

  useEffect(() => {
    setRenderedCustomers(customerList);
  }, [customerList]);

  console.log(renderedCustomers);
  return (
    <DashboardWrapperStyled>
      <CustomerListHeaderStyled>
        <h2>All Customers</h2>
        <InputContainerStyled>
          <InputStyled
            type="text"
            placeholder="Search"
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
        {renderedCustomers.map((customer, index) => {
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
    </DashboardWrapperStyled>
  );
}
