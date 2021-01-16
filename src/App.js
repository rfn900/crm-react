import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import LoggedRoute from "./components/LoggedRoute";
import Admin from "./components/Admin";
import AccountInfo from "./components/AccountInfo";
import CustomerList from "./components/CustomerList";
import AddCustomer from "./components/AddCustomer";
import CustomerDetail from "./components/CustomerDetail";
import EditCustomer from "./components/EditCustomer";
import CustomerCount from "./components/CustomerCount";
function App() {
  return (
    <Switch>
      <PrivateRoute path="/account" Component={AccountInfo} />

      <PrivateRoute path="/customers/add" Component={AddCustomer} />

      <PrivateRoute path="/customers/:id/edit" Component={EditCustomer} />

      <PrivateRoute path="/customers/:id" Component={CustomerDetail} />

      <PrivateRoute path="/customers" Component={CustomerList} />

      <PrivateRoute path="/customer-count" Component={CustomerCount} />

      <PrivateRoute path="/admin" Component={Admin} />

      <LoggedRoute path="/" Component={LoginPage} />
    </Switch>
  );
}

export default App;
