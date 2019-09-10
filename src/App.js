import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import Users from "./components/User";

const client = new ApolloClient({
  uri: "https://foteek-backend.herokuapp.com/users"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>xx</div>
      </ApolloProvider>
    );
  }
}
export default App;
