import React, { useState, useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { CustomerContext } from "../context/CustomerContext";
import CustomerDetailForm from "./CustomerDetailForm";

export default function CustomerUpdatePage(props) {
  const { customerList, setCustomerList } = useContext(CustomerContext);
  const customerId = props.match.params.id;
  const [customerItem] = customerList.filter((item) => item.id == customerId);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [formData, setFormData] = useState({});
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
  useEffect(() => {
    getCostumerList();
    setFormData(customerItem);
    const vat = customerItem.vatNr;
    vat.substring(0, 2) == "SE" && vat.length == 12
      ? setIsButtonDisabled(false)
      : setIsButtonDisabled(true);
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
      .then((data) => {
        console.log(data);
        history.push(`/customers/${customerId}?success`);
      });
  };

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
  return (
    <CustomerDetailForm
      title="Edit Customer"
      onSubmit={handleOnSubmit}
      onChange={handleOnChange}
      formData={formData}
      isButtonDisabled={isButtonDisabled}
    />
  );
}
