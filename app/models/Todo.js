import { generateId } from "../Utils/GenerateId.js"

export default class Todo {
  constructor({ id, name, completed }) {
    this.id = id || generateId(),
      this.name = name
    this.completed = false || completed
  }

  get Template() {
    return `
    <label class="form-check-label text-light m-2">
                                <input class="form-check-input" type="checkbox" name="taskCheck" id="${this.id}"
                                    value="checkedValue">${this.name}</label> <i class="fas fa-ban cusor-pointer m-1"onclick="app.todoController.delete('${this.id}')"></i>
    `
  }
}