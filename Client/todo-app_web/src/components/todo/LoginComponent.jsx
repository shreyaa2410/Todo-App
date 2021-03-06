import { Component } from "react";
import "./bootstrap.css";
import AuthenticationService from "./AuthenticationService";


class LoginComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "username",
        password: "",
        hasLoginFailed: false,
        showSuccessMessage: false,
      };
      this.handleChange = this.handleChange.bind(this);
      this.loginClicked = this.loginClicked.bind(this);
    }
    handleChange(event) {
      console.log(event.target.name);
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  
    loginClicked() {
      if (this.state.username === "shreyaa" && this.state.password === "dumy") {
        this.props.navigate(`/welcome/${this.state.username}`);
        AuthenticationService.registerSuccessfulLogin(
          this.state.username,
          this.state.password
        );
        // this.setState({ showSuccessMessage: true });
        // this.setState({ hasLoginFailed: false });
      } else {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      }
    }


    

    render() {
      return (
        <div>
          <h1>Login</h1>
          <div className="container">
            {this.state.hasLoginFailed && (
              <div className="alert alert-warning">Invalid Credentials</div>
            )}
            {this.state.showSuccessMessage && <div>Login Sucessful</div>}
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            Password:{" "}
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button className="btn btn-success" onClick={this.loginClicked}>
              Login
            </button>
          </div>
        </div>
      );
    }
  }

  export default LoginComponent