import { ProxyState } from "../AppState.js";
import Todo from "../models/Todo.js";
import { api } from "../Services/AxiosService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'Cody/todos/'


class TodoService {


  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    ProxyState.todos = res.data.map(t => new Todo(t))

    //TODO Handle this response from the server
  }

  async addTodo(newTodo) {
    let res = await api.post(url, newTodo);
    console.log(res.data)
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    //TODO Handle this response from the server
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    let res = api.delete(url + todoId)
    ProxyState.todos = ProxyState.todos.filter(t => t.id != todoId)


  }
}

const todoService = new TodoService();
export default todoService;