import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  handleChange = ({ target }) => {
    let { name, value } = target;
    // let element = this.state[name];
    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = this.validateEmail(value) ? "" : "Email is Invalid";
        break;
      case "password":
        errors.password =
          value.length >= 6 ? "" : "Password must be atleast 6 characters";
        break;
      case "username":
        errors.username =
          value.length >= 3 ? "" : "Username must be atleast 3 characters";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          value === this.state.password
            ? ""
            : "password should be same as above ";
        break;
      default:
        break;
    }
    this.setState({
      [name]: value,
      errors,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.username + this.state.email);
  };
  // methods
  render() {
    let { username, email, password, confirmPassword } = this.state.errors;
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Register-With US</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="textInput">UserName</label>
          <input
            type="Text"
            id="textInput"
            placeholder="Enter Username"
            className={username ? "Field  error" : "Field"}
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          ></input>
          <span className="errorMessage">{username}</span>
          <label htmlFor="emailInput">Email </label>
          <input
            type="Email"
            id="emailInput"
            placeholder="Enter Email"
            className={email ? "Field  error" : "Field"}
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          ></input>
          <span className="errorMessage">{email}</span>
          <label htmlFor="textInput">Password </label>
          <input
            type="Password"
            id="textInput"
            placeholder="Enter Password"
            className={password ? "Field  error" : "Field"}
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
          <span className="errorMessage">{password}</span>
          <label htmlFor="textInput">Confirm-Password </label>
          <input
            type="Password"
            id="textInput"
            placeholder="Re-enter Password"
            className={password ? "Field  error" : "Field"}
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          ></input>
          <span className="errorMessage">{confirmPassword}</span>
          <input type="Submit" className="submitButton" />
        </form>
      </>
    );
  }
}
export default Form;
