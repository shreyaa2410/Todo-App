import axios from "axios";
class TodoDataService {
    retrieveAllTodos(name) {
        console.log("sevice executed");
        return axios.get(`http://localhost:8081/users/${name}/todos`);
      }
      deleteTodods(name,id)
      {
          return axios.delete(`http://localhost:8081/users/${name}/todos/${id}`)
      }
      retrieveTodo(name,id) {
        console.log("sevice executed");
        return axios.get(`http://localhost:8081/users/${name}/todos/${id}`);
      }
      updateTodo(name,id,todo) {
        console.log("sevice executed");
        return axios.put(`http://localhost:8081/users/${name}/todos/${id}`,todo);
      }
      createTodo(name,todo)
      {
        console.log("sevice executed");
        return axios.put(`http://localhost:8081/users/${name}/todos/`,todo);
      }


}


export default new TodoDataService();