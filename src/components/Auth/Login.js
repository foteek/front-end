import React from "react";

import { Mutation } from "react-apollo";
import Error from "../../components/Auth/Error";
import { SIGNIN_USER } from "../../queries";

import "../../App.css";

const intitialState = {
  username: "",
  password: ""
};

class Login extends React.Component {
  // state === username: '', password: ''
  state = {
    ...intitialState
  };

  // passing back in empty username and password to state
  // clears the input fields
  clearState = () => {
    this.setState({ ...intitialState });
  };

  // desctructing and dynamically sets state for each input

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  // submits form
  // event.preventDefault to stop any automatic reloading
  // importing SIGNIN_USER mutation
  // setting user token to local storage
  handleSubmit = (event, signinUser) => {
    event.preventDefault();
    signinUser().then(({ data }) => {
      console.log(data);
      localStorage.setItem("token", data.signinUser.token);
      this.clearState();
    });
  };

  // ensures all fields are filled
  //  const { username, password } = this.state is destructuring
  // allows us to forgo using this.state.username in const isInvalid and just use username/password
  // prevents form from sending without completion of all fields
  validateForm = () => {
    const { username, password } = this.state;
    const isInvalid = !username || !password;
    return isInvalid;
  };

  render() {
    // destructuring these fields
    const { username, password } = this.state;

    // wrap SIGNIN_USER and neccesary variables are destructured to increase readability
    // mutation imported from queries folder
    // gets 3 values data, loading, and error
    // we use it below with an imported Error component to return errors with our form
    return (
      <div className="App">
        <h2 className="App">Signin Page</h2>
        <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
          {(signinUser, { data, loading, error }) => {
            return (
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event, signinUser)}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
                <button
                  type="submit"
                  disabled={loading || this.validateForm()}
                  className="button-primary"
                >
                  Submit
                </button>
                {error && <Error error={error} />}
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Login;
