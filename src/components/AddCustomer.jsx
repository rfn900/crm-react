import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CustomerDetailForm from "./CustomerDetailForm";

export default function AddCustomer() {
  const [formData, setFormData] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const history = useHistory();

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
    if (e.target.name == "vatNr") {
      const vat = e.target.value;
      vat.substring(0, 2) == "SE" && vat.length == 12
        ? setIsButtonDisabled(false)
        : setIsButtonDisabled(true);
    }
  };

  const handleOnSubmit = (e) => {
    console.log("oiiii");
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
      isButtonDisabled={isButtonDisabled}
    />
  );
}
