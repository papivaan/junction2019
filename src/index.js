import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import API from "@aws-amplify/api";
import PubSub from "@aws-amplify/pubsub";

import config from "./aws-exports";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import AuthLayout from "./layouts/Auth.jsx";
import ExampleLayout from "./layouts/Example.jsx";
import AdminLayout from "./layouts/Admin.jsx";
import CivilLayout from "./layouts/Civil.jsx";
import WorkerLayout from "./layouts/Worker.jsx";
import SiteManagerLayout from "./layouts/SiteManager.jsx";
import WorkManagerLayout from "./layouts/WorkManager.jsx";

import { DataProvider } from "./contexts/data-context";
import { SearchProvider } from "./contexts/search-context";

import * as serviceWorker from "./serviceWorker";

API.configure(config);
PubSub.configure(config);

const App = () => (
  <DataProvider>
    <SearchProvider>
      <BrowserRouter>
        <Switch>
          <Route
            path="/examples"
            render={props => <ExampleLayout {...props} />}
          />
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/civil" render={props => <CivilLayout {...props} />} />
          <Route path="/worker" render={props => <WorkerLayout {...props} />} />
          <Route
            path="/site-manager"
            render={props => <SiteManagerLayout {...props} />}
          />
          <Route
            path="/work-manager"
            render={props => <WorkManagerLayout {...props} />}
          />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Redirect from="/" to="/auth/login" />
        </Switch>
      </BrowserRouter>
    </SearchProvider>
  </DataProvider>

);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
