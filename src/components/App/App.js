import React, { Component } from "react";
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";
import { Route, Link } from "react-router-dom";

//Components -- Material UI
import Users from "../User.js";
import Login2 from "../Login/Login.js";
import Register2 from "../Register/Register.js";

//GraphQl/Apollo Auth Components
import Login from "../Auth/Login";
import Register from "../Auth/Register";

// const client = new ApolloClient({
//   uri: "https://foteek-backend.herokuapp.com/users"
// });

class App extends Component {
  render() {
    return (
      <div>
        List of users being displayed from the BE
        {/* <Users /> */}
        <br />
        <Link to="/register2">Register</Link>Material UI Register
        <br />
        <Link to="/login2">Login</Link>Material UI Login
        <br />
        <Link to="/register">Register</Link>GraphQl Register
        <br />
        <Link to="/login">Login</Link>GraphQl Login
        <br />
        <Route path="/login2" component={Login2} />
        <Route path="/register2" component={Register2} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}
export default App;
