import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CustomerDetailForm from "./CustomerDetailForm";

export default function AddCustomer() {
  const [formData, setFormData] = useState({});

  const history = useHistory();

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/");
      });
  };

  return (
    <CustomerDetailForm
      title="Add Customer"
      onSubmit={handleOnSubmit}
      onChange={handleOnChange}
      formData={formData}
    />
  );
}
