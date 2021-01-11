import { generateId } from "../Utils/GenerateId.js"

export default class Todo {
  constructor({ id, description, completed }) {
    this.id = id || generateId(),
      this.description = description
    this.completed = completed || false
  }

  get Template() {
    return `

    <label class="form-check-label text-light m-2">
                                <input class="form-check-input" type="checkbox" name="taskCheck" id="${this.id}"
                                    value="checkedValue"${this.completed ? 'checked' : ''} onclick="app.todoController.toggleTodoStatus('${this.id}')">${this.description}</label> 
                                    <i class="fa fa-times-circle text-danger cursor-pointer p-2" onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true"></i>
                                    
    `
  }
}