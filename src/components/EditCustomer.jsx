import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CustomerContext } from "../context/CustomerContext";
import CustomerDetailForm from "./CustomerDetailForm";

export default function CustomerUpdatePage(props) {
  const { customerList } = useContext(CustomerContext);
  const customerId = props.match.params.id;
  console.log(customerId);
  const [customerItem] = customerList.filter((item) => item.id == customerId);

  const [formData, setFormData] = useState({});
  const history = useHistory();

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  useEffect(() => {
    setFormData(customerItem);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");
    // const payload = formData;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => history.push(`/customers/${customerId}/`));
  };

  return (
    <CustomerDetailForm
      title="Edit Customer"
      onSubmit={handleOnSubmit}
      onChange={handleOnChange}
      formData={formData}
    />
  );
}
