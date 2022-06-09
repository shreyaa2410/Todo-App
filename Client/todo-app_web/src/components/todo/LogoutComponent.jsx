import { Component } from "react";
import "./bootstrap.css";

class LogoutComponent extends Component {
    render() {
      return (
        <div>
          <h1>You are logged out!</h1>
          <div className="container">Thank You for using my Application!</div>
        </div>
      );
    }
  }


  export default LogoutComponent