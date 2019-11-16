import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink, Observable } from "apollo-link";
import { ApolloProvider } from "react-apollo";

import config from "./aws-exports";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import AuthLayout from "./layouts/Auth.jsx";
import ExampleLayout from "./layouts/Example.jsx";
import AdminLayout from "./layouts/Admin.jsx";
import CivilLayout from "./layouts/Civil.jsx";
import EmployeeLayout from "./layouts/Employee.jsx";
import SiteManagerLayout from "./layouts/SiteManager.jsx";
import WorkManagerLayout from "./layouts/WorkManager.jsx";

import { DataProvider } from "./contexts/data-context";
import { SearchProvider } from "./contexts/search-context";

import * as serviceWorker from "./serviceWorker";

const request = async operation => {
  operation.setContext({
    headers: {
      "x-api-key": config.aws_appsync_apiKey
    }
  });
};

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle;
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    requestLink,
    new HttpLink({
      uri: config.aws_appsync_graphqlEndpoint,
      credentials: "same-origin"
    })
  ]),
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
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
            <Route
              path="/employee"
              render={props => <EmployeeLayout {...props} />}
            />
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
  </ApolloProvider>
);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
