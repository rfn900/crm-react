import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ Component, path }) {
  const token = localStorage.getItem("WEBB20");
  const isLoggedIn = token && true;
  return (
    <>
      <Route
        path={path}
        render={() => (isLoggedIn ? <Redirect to="/admin" /> : <Component />)}
      />
    </>
  );
}
