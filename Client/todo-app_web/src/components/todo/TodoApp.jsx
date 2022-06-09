import { Component } from "react";
import "./bootstrap.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import withNavigation from "./WithNavigation.jsx";
import withParams from "./withParams.jsx";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent  from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from "./HeaderComponent";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import TodoComponent from "./TodoComponent";

class TodoApp extends Component {
  render() {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const WelcomeComponentWithParams = withParams(WelcomeComponent);
    const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent);
    const LogoutComponentWithNavigation = withNavigation(LogoutComponent);
    const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));

    return (
      <div className="TodoApp">
        My Todo Application
        <BrowserRouter>
          <HeaderComponent></HeaderComponent>
          <Routes>
            <Route path="/" element={<LoginComponentWithNavigation />} />
            <Route path="/login" element={<LoginComponentWithNavigation />} />
            <Route
              path="/welcome/:name"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponentWithParams />
                </AuthenticatedRoute>
              }
            />
            <Route path="/todos/:id" element={ 
			            	<AuthenticatedRoute>
			            		<TodoComponentWithParamsAndNavigation />
			            	</AuthenticatedRoute>
			            } />
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodosComponentWithNavigation />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponentWithNavigation />
                </AuthenticatedRoute>
              }
            />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent></FooterComponent>
          </BrowserRouter>
        {/*<LoginComponent></LoginComponent>
        <WelcomeComponent></WelcomeComponent>*/}
      </div>
    );
  }
}




export default TodoApp;
