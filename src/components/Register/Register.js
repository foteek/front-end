import React from "react";
// import { connect } from "react-redux";
// import { login } from "../../actions";
import RegisterForm from "./RegisterForm";
import LoginForm from "../Login/LoginForm";
// import Header from "../Header/Header";
// import Button from "@material-ui/core/Button";

class Register extends React.Component {
  state = {
    credentials: {
      email: "",
      password: "",
      repeatPassword: ""
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        //Since I added a value tag on inputs, I can use it to track the value
        //A name tag and a value tag is use to create the key:value pair
        [e.target.name]: e.target.value
      }
    });
  };

  // handleLogin = e => {
  //   e.preventDefault();
  //   this.props
  //     //When credentials inputted into form and submitted, run the login action creator
  //     .login(this.state.credentials)
  //     //After successful login, send user to protected website
  //     .then(() =>
  //       this.state.credentials.businessAccount
  //         ? this.props.history.push("/business/dashboard")
  //         : this.props.history.push("/volunteer/dashboard")
  //     );
  // };

  render() {
    return (
      <div>
        <RegisterForm
          // handleLogin={this.handleLogin}
          changeHandler={this.changeHandler}
        />
      </div>
    );
  }
}

export default Register;
