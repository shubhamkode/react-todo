import { useSelector } from "react-redux";
import { Todo } from "../models/todo.model";
import { RootState } from "../store";

import TodoComponent from "./TodoComponent"


export default function TodoList() {
  const todos = useSelector((store: RootState) => store.todos.todos);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="w-full space-y-4 p-8 sm:p-4">
        {todos.map((todo: Todo) => (
          <TodoComponent key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}
