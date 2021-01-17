import React, { useState, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import { CustomerContext } from "../context/CustomerContext";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import { MainStyled } from "../styles/MainStyled";

export default function Homepage({ Component, ...props }) {
  const [userData, setUserData] = useState({});
  const [customerList, setCustomerList] = useState([]);

  const token = localStorage.getItem("WEBB20");

  const getCostumerList = () => {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
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

  const getMe = () => {
    const url = "https://frebi.willandskill.eu/api/v1/me/";
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("rendi");
        setUserData(data);
      });
  };

  useEffect(() => {
    getCostumerList();
    getMe();
  }, []);

  return (
    <div className="main-container">
      <CustomerContext.Provider value={{ customerList, setCustomerList }}>
        <LoginContext.Provider value={userData}>
          <Nav />
          <div className="homepage-container">
            <Sidebar />
            <MainStyled>
              <Component {...props} />
            </MainStyled>
          </div>
        </LoginContext.Provider>
      </CustomerContext.Provider>
    </div>
  );
}
