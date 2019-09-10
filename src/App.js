import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import Users from "./components/User";

const client = new ApolloClient({
  uri: "https://foteek-backend.herokuapp.com/users"
});
// again
class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <div>xx</div>
        </ApolloProvider>
      </div>
    );
  }
}
export default App;
