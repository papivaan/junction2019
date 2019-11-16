import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import AuthLayout from "./layouts/Auth.jsx";
import ExampleLayout from "./layouts/Example.jsx";
import AdminLayout from "./layouts/Admin.jsx";
import SiteManagerLayout from "./layouts/SiteManager.jsx";

import { DataProvider } from "./contexts/data-context";

import * as serviceWorker from "./serviceWorker";

const App = () => (
  <DataProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route
          path="/examples"
          render={props => <ExampleLayout {...props} />}
        />
        <Route
          path="/site-manager"
          render={props => <SiteManagerLayout {...props} />}
        />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Redirect from="/" to="/admin/index" />
      </Switch>
    </BrowserRouter>
  </DataProvider>
);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
