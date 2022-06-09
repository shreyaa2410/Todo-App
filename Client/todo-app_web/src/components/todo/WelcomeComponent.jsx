import { Component } from "react";
import "./bootstrap.css";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.state = {
      welcomeMessage: "",
    };
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.params.name} to Todo Application. You
          AreSuccessfully Loged In!
          <Link to={"/todos"}>Todo</Link>
        </div>
        <div className="container">
          <button
            onClick={this.retrieveWelcomeMessage}
            className="btn btn-success"
          >
            Welcome
          </button>
        </div>
        <div className="container">
          <div>{this.state.welcomeMessage}</div>
        </div>
      </div>
    );
  }
  retrieveWelcomeMessage() {
    // console.log("welcome you");
    // HelloWorldService.executeHelloWorldService().then((Response) =>
    //   this.handleSuccessfulResponse(Response)
    // );
    // HelloWorldService.executeHelloWorldBeanService()
    //     .then( Response => this.handleSuccessfulResponse(Response) )
    HelloWorldService.executeHelloWorldPathVariableBeanService(this.props.params.name)
        .then( response => this.handleSuccessfulResponse(response) )
        .catch( error => this.handleError(error) )
  }
  handleSuccessfulResponse(response) {
    console.log(response)
    this.setState({welcomeMessage: response.data.message})
}

  handleError(error) {
    let errorMessage='';
    if(error.message)
    errorMessage+=error.message;
    if(error.response && error.response.data)
    errorMessage+=error.response.data.message;
    console.log({ welcomeMessage: errorMessage });
  }
}

export default WelcomeComponent;
