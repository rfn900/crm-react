import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { CustomerContext } from "../context/CustomerContext";
import { DashboardWrapperStyled } from "../styles/DashboardWrapperStyled";
import { ButtonStyled } from "../styles/ButtonStyled";

const CDWrapperStyled = styled(DashboardWrapperStyled)`
  margin-top: 4em;
  align-items: center;
  justify-content: center;

  table {
    margin-bottom: 2em;
    border-collapse: collapse;

    tr {
      td {
        padding: 10px 20px;

        &:first-child {
          border-left: 1px solid #3a4145;
        }
        &:last-child {
          border-right: 1px solid #3a4145;
        }
      }
      &:nth-child(odd) {
        background: #3a4145;
        td {
          color: white;
        }
      }
    }
  }
`;
const DelButtonStyled = styled(ButtonStyled)`
  background: #962a1a;

  &:hover {
    background: #9e3222;
  }
`;

const AltButtonStyled = styled(ButtonStyled)`
  padding: 7px 25px;

  border: 2px solid #1f7067;
  background-color: #fafafa;
  color: #1f7067;
  svg {
    fill: #1f7067;
  }
  &:hover {
    color: white;

    svg {
      fill: white;
    }
  }
`;

export default function CustomerDetail(props) {
  const customerId = props.match.params.id;
  const { customerList, setCustomerList } = useContext(CustomerContext);
  const [customerItem, setCustomerItem] = useState(null);
  const history = useHistory();

  function getCostumerItem() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomerItem(data);
        console.log(data);
      });
  }

  const deleteCostumer = () => {
    if (!window.confirm("Are you sure you wish to delete this item?"))
      return -1;
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(() => history.push("/"));
  };

  const toUpdate = () => {
    history.push(`/customers/${customerId}/edit`);
  };

  useEffect(() => {
    getCostumerItem();
  }, []);

  return (
    <>
      {customerItem ? (
        <CDWrapperStyled>
          <h1>{customerItem.name}</h1>
          <table>
            <tr>
              <td>Organisation Number</td>
              <td>{customerItem.organisationNr}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{customerItem.phoneNumber}</td>
            </tr>
            <tr>
              <td>Reference</td>
              <td>{customerItem.reference}</td>
            </tr>
            <tr>
              <td>Payment Term</td>
              <td>{`${customerItem.paymentTerm} days`}</td>
            </tr>
            <tr>
              <td>VAT Number</td>
              <td>{customerItem.vatNr}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <a href={`mailto:${customerItem.email}`} target="_blanck">
                  {customerItem.email}
                </a>
              </td>
            </tr>
            <tr>
              <td>Website</td>
              <td>
                <a href={customerItem.website} target="_blank">
                  {customerItem.website}
                </a>
              </td>
            </tr>
          </table>
          <DelButtonStyled onClick={deleteCostumer}>
            <DeleteForeverIcon /> Delete Costumer
          </DelButtonStyled>
          <AltButtonStyled onClick={toUpdate}>
            <EditIcon />
            Edit Costumer
          </AltButtonStyled>
        </CDWrapperStyled>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}
