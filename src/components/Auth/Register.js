import React from "react";

import { Mutation } from "react-apollo";
import Error from "../../components/Auth/Error";
import { SIGNUP_USER } from "../../queries";

// PLEASE CHECK LOGIN COMPONENT FOR SIMILAR NOTES

const intitialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

// intital state is passed in with ... operator
// doing this allows us to easily clear our form with clearState()
// handleChange/handleSubmit/clearState are explained more thoroughly in Login.js

class Register extends React.Component {
  state = {
    ...intitialState
  };

  clearState = () => {
    this.setState({ ...intitialState });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(({ data }) => {
      console.log(data);
      localStorage.setItem("token", data.signupUser.token);
      this.clearState();
    });
  };

  validateForm = () => {
    const { username, email, password, passwordConfirmation } = this.state;
    const isInvalid =
      !username || !email || !password || password !== passwordConfirmation;
    return isInvalid;
  };

  render() {
    const { username, email, password, passwordConfirmation } = this.state;

    return (
      <div className="App">
        <h2 className="App">Signup Page</h2>
        <Mutation
          mutation={SIGNUP_USER}
          variables={{ username, email, password }}
        >
          {(signupUser, { data, loading, error }) => {
            return (
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event, signupUser)}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirm Password"
                  value={passwordConfirmation}
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

export default Register;
