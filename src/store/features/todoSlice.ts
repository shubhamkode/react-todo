import { createSlice, Slice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../models/todo.model";


interface InitialState {
  todos: Todo[]
}

const localTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")!) : []

const initialState: InitialState = {
  todos: localTodos
}

const todoSlice: Slice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload)
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo: Todo) => todo.id != action.payload)
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const toggleTodoItem = state.todos.find(
        (todo: Todo) => todo.id === action.payload
      );
      toggleTodoItem.completed = !toggleTodoItem.completed
    },
    updateTodo(state, action: PayloadAction<{ id: string, task: string }>) {
      const todoItem = state.todos.find((todo: Todo) => todo.id === action.payload.id)
      todoItem.task = action.payload.task
    }
  }
})

export default todoSlice.reducer;
export const { addTodo, deleteTodo, toggleTodo, updateTodo } = todoSlice.actions;
