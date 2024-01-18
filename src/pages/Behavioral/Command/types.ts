export interface TodoItem {
  id: number
  text: string
  isCompleted: boolean
}

export interface Command {
  execute(): TodoItem[]
  undo(): TodoItem[]
}
