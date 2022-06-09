import { Component } from "react";
import "./bootstrap.css";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";


class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        // {
        //   id: 1,
        //   description: "Learn to Dance",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 2,
        //   description: "Become an Expert at React",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 3,
        //   description: "Visit India",
        //   done: false,
        //   targetDate: new Date(),
        // },
      ],
      message: null,
    };
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    this.addTodoClicked= this.addTodoClicked.bind(this)
  }


  componentDidMount() {
    this.refreshTodos();
  }


  refreshTodos() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      //console.log(response);
      this.setState({ todos: response.data });
    });
    console.log(this.state);
  }



  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.deleteTodods(username, id).then((response) => {
      this.setState({ message: `delete of todo ${id} is successful` });
      this.refreshTodos();
    });
  }

  updateTodoClicked(id) {
    this.props.navigate(`/todos/${id}`)
    // let username = AuthenticationService.getLoggedInUserName();
    // TodoDataService.deleteTodods(username, id).then((response) => {
    //   this.setState({ message: `delete of todo ${id} is successful` });
    //   this.refreshTodos();
    // });
  }

  addTodoClicked()
  {
    this.props.navigate(`/todos/-1`)
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="table">
            <h1>List Todos</h1>
            {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
            <table>
              <thead>
                <tr>
                  <th>description</th>
                  <th>Target Date</th>
                  <th>Is Completed?</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map((todo) => (
                  <tr key={todo.id}>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={()=>this.updateTodoClicked(todo.id)}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={()=>this.deleteTodoClicked(todo.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <div className=" text-center col-md-12">
                <button className="btn btn-success center" onClick={this.addTodoClicked}>Add List</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
