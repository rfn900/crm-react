import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

import { ButtonStyled } from "../styles/ButtonStyled";

import {
  ContainerStyled,
  InputStyled,
  InputContainer,
  ErrorTabStyled,
} from "../styles/LoginPageStyled";

export default function LoginPage() {
  const [loginData, setLoginData] = useState([]);

  // This hook is used to display and error message
  const errorRef = useRef();
  const history = useHistory();
  // This will clear out the error display message when the component renders
  // and as soon as the loginData object updates
  useEffect(() => {
    errorRef.current.style.display = "none";
  }, [loginData]);

  const handleOnChange = (e) => {
    errorRef.current.style.display = "none";
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    const payload = {
      email: loginData.email,
      password: loginData.password,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("WEBB20", data.token);
        history.push("/");
      })
      .catch((error) => {
        errorRef.current.style.display = "block";
        loginData.email && loginData.password
          ? (errorRef.current.innerHTML = "Password or Email not valid")
          : (errorRef.current.innerHTML = "Fields can't be empty");
      });
  };

  const handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  return (
    <ContainerStyled>
      <form onSubmit={handleOnSubmit}>
        <h2>Welcome to ACME CRM</h2>
        <InputContainer>
          <InputStyled
            type="email"
            name="email"
            onChange={handleOnChange}
            placeholder="Email"
          />
          <span className="email-span">
            <AccountCircleIcon />
          </span>
        </InputContainer>
        <InputContainer>
          <InputStyled
            name="password"
            type="password"
            onChange={handleOnChange}
            placeholder="Password"
          />
          <span className="password-span">
            <LockIcon />
          </span>
        </InputContainer>
        <ErrorTabStyled ref={errorRef}></ErrorTabStyled>
        <br />
        <ButtonStyled>Log In</ButtonStyled>
      </form>
    </ContainerStyled>
  );
}
