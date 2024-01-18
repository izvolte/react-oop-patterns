import React, { useState } from 'react'
import { Button, List, Input, Checkbox, Space } from 'antd'
import { TodoItem, Command } from './types'
import {
  AddTodoCommand,
  DeleteTodoCommand,
  CompleteTodoCommand,
  UncompleteTodoCommand
} from './models'

const MainCommand = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [history, setHistory] = useState<Command[]>([])
  const [future, setFuture] = useState<Command[]>([])
  const [newTodoText, setNewTodoText] = useState('')

  const executeCommand = (command: Command) => {
    setHistory([...history, command])
    setFuture([])
    setTodos([...command.execute()])
  }

  const undo = () => {
    const command = history.pop()
    if (command) {
      setFuture([...future, command])
      setTodos([...command.undo()])
    }
  }

  const redo = () => {
    const command = future.pop()
    if (command) {
      setHistory([...history, command])
      setTodos([...command.execute()])
    }
  }

  const addNewTodo = () => {
    if (!newTodoText) return

    const newTodo: TodoItem = {
      id: Date.now(),
      text: newTodoText,
      isCompleted: false
    }

    executeCommand(new AddTodoCommand(todos, newTodo))
    setNewTodoText('')
  }

  const onChangeCompleteCheckbox = (item: TodoItem) => () => {
    const command = item.isCompleted
      ? new UncompleteTodoCommand(todos, item.id)
      : new CompleteTodoCommand(todos, item.id)
    executeCommand(command)
  }

  const onDeleteTodo = (item: TodoItem) => () => {
    const command = new DeleteTodoCommand(todos, item.id)
    executeCommand(command)
  }

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Input
        placeholder='Add new todo'
        value={newTodoText}
        onChange={e => setNewTodoText(e.target.value)}
        onPressEnter={addNewTodo}
      />
      <Space>
        <Button onClick={addNewTodo} disabled={!newTodoText}>
          Add Todo
        </Button>
        <Button onClick={undo} disabled={history.length === 0}>
          Undo
        </Button>
        <Button onClick={redo} disabled={future.length === 0}>
          Redo
        </Button>
      </Space>

      <List
        dataSource={todos}
        renderItem={item => (
          <List.Item
            actions={[
              <Checkbox
                checked={item.isCompleted}
                onChange={onChangeCompleteCheckbox(item)}
              />,
              <Button onClick={onDeleteTodo(item)}>Delete</Button>
            ]}
          >
            {item.text}
          </List.Item>
        )}
      />
    </Space>
  )
}

export default MainCommand
