import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Route, Link } from "react-router-dom";

//Components
import Users from "../User.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";

const client = new ApolloClient({
  uri: "https://foteek-backend.herokuapp.com/users"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          List of users being displayed from the BE
          <Users />
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
