import React from 'react';

import AddTodoField from "../components/AddTodoField";
import TodoList from '../components/TodoList';
import { useSelector } from "react-redux";
import { RootState } from "../store";


export default function HomePage() {
  const todos = useSelector((store: RootState) => store.todos.todos)

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="w-screen h-screen bg-slate-800 overflow-y-scroll space-y-8">
      <AddTodoField />
      {
        todos.length === 0 ? (
          <div className="flex justify-center items-center w-full h-[50%] flex-col">
            <h2 className="text-3xl  text-slate-300">There is Nothing to Do...</h2>
            <h2 className="text-2xl font-light text-slate-400">Let's Add Some Todos...</h2>
          </div>
        ) : (
          <TodoList />
        )
      }
    </div>
  );
}
