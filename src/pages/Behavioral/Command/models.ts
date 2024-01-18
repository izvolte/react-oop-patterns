import { Command, TodoItem } from './types'

export class AddTodoCommand implements Command {
  private readonly todos: TodoItem[]
  private readonly newTodo: TodoItem

  constructor(todos: TodoItem[], newTodo: TodoItem) {
    this.todos = todos
    this.newTodo = newTodo
  }

  execute() {
    this.todos.push(this.newTodo)
    return this.todos
  }

  undo() {
    const index = this.todos.indexOf(this.newTodo)
    if (index > -1) {
      this.todos.splice(index, 1)
    }
    return this.todos
  }
}

export class DeleteTodoCommand implements Command {
  private readonly todos: TodoItem[]
  private readonly id: number
  private deletedTodo: TodoItem | null = null

  constructor(todos: TodoItem[], id: number) {
    this.todos = todos
    this.id = id
  }

  execute() {
    const index = this.todos.findIndex(todo => todo.id === this.id)
    if (index > -1) {
      this.deletedTodo = this.todos[index]
      this.todos.splice(index, 1)
    }

    return this.todos
  }

  undo() {
    if (this.deletedTodo) {
      this.todos.push(this.deletedTodo)
      this.deletedTodo = null
    }

    return this.todos
  }
}

export class CompleteTodoCommand implements Command {
  private readonly todos: TodoItem[]
  private readonly id: number

  constructor(todos: TodoItem[], id: number) {
    this.todos = todos
    this.id = id
  }

  execute() {
    const todo = this.todos.find(todo => todo.id === this.id)
    if (todo) {
      todo.isCompleted = true
    }
    return this.todos
  }

  undo() {
    const todo = this.todos.find(todo => todo.id === this.id)
    if (todo) {
      todo.isCompleted = false
    }
    return this.todos
  }
}

export class UncompleteTodoCommand implements Command {
  private readonly todos: TodoItem[]
  private readonly id: number

  constructor(todos: TodoItem[], id: number) {
    this.todos = todos
    this.id = id
  }

  execute() {
    const todo = this.todos.find(todo => todo.id === this.id)
    if (todo) {
      todo.isCompleted = false
    }
    return this.todos
  }

  undo() {
    const todo = this.todos.find(todo => todo.id === this.id)
    if (todo) {
      todo.isCompleted = true
    }
    return this.todos
  }
}
