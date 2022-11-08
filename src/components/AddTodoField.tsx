import React from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import { addTodo } from "../store/features/todoSlice";

export default function AddTodoField() {
  const dispatch = useDispatch();

  const [todo, setTodo] = React.useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (todo === "") {
      alert("Enter content to add todo...")
      return;
    }
    dispatch(addTodo({ id: nanoid(), task: todo, completed: false }))
    setTodo("");
  }

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center px-6 md:p-0">

      <header className="w-full fixed top-0 left-0 p-4 bg-gray-700">
        <h1 className="text-3xl font-bold tracking-widest text-slate-50">Todo App</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl space-y-4 mt-[20vh]">

        <input
          type="text"
          placeholder="Enter Todo..."
          value={todo}
          onChange={e => setTodo(e.target.value)}
          className=" w-full px-4 py-2 text-2xl tracking-tighter font-light rounded appearance-none focus:outline-none focus:shadow-outline" />

        <button
          type="submit"
          className="bg-blue-500 tracking-wider text-slate-200 w-full px-4 py-3 rounded text-bold hover:bg-blue-500 duration-300  appearance-none focus:outline-none focus:shadow-outline font-bold text-2xl">
          Add Todo</button>
      </form>

    </div>
  )
}
