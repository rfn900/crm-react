import React from "react";
import { Redirect, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";

export default function PrivateRoute({ Component, path }) {
  const token = localStorage.getItem("WEBB20");
  const isLoggedIn = token && true;

  return (
    <>
      <Route
        path={path}
        render={(props) =>
          isLoggedIn ? (
            <DashboardPage {...props} Component={Component} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </>
  );
}
