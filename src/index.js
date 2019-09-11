import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
// change the import
//Apollo Client Dependencies
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//Components
import App from "./components/App/App";

//Material UI Dependencies
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core";

//Apollo Boilerplate
const client = new ApolloClient({
  uri: "https://foteek-backend.herokuapp.com/users",
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },

  onError: ({ networkError }) => {
    if (networkError) {
      console.log("Network Error", networkError);
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <CssBaseline>
      <MuiThemeProvider>
        <Router>
          <App />
        </Router>
      </MuiThemeProvider>
    </CssBaseline>
  </ApolloProvider>,
  document.getElementById("root")
);
