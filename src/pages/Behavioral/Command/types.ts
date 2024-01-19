export interface TodoItem {
  id: number
  text: string
  isCompleted: boolean
}

export interface Command {
  readonly todos: TodoItem[]
  execute(): TodoItem[]
  undo(): TodoItem[]
}
