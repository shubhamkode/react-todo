import React from "react";

import { BiTrash } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineReload, AiOutlineClose, AiOutlineSave } from "react-icons/ai";
import { Todo } from "../models/todo.model";

import { deleteTodo, toggleTodo, updateTodo } from "../store/features/todoSlice";
import { useDispatch } from "react-redux";

interface ITodoComponentProps {
  todo: Todo
}


const TodoComponent: React.FC<ITodoComponentProps> = ({ todo }) => {
  const dispatch = useDispatch()

  const { id, task, completed } = todo;

  const [todoTask, setTodoTask] = React.useState<string>(task);
  const [todoBeingEdited, setTodoBeingEdited] = React.useState<boolean>(false);

  const handleTaskChange = (e: any) => {
    setTodoTask(e.target.value)
  }
  const changeTodoBeingEdited = (changed: boolean) => {
    setTodoBeingEdited(changed);
  }

  const handleTaskAbort = () => {
    changeTodoBeingEdited(false)
    setTodoTask(task)
  }

  const handleTaskSave = () => {
    changeTodoBeingEdited(false)
    dispatch(updateTodo({ id, task: todoTask }))
  }




  return (
    <div className="w-full bg-gray-200 rounded">
      < div className={`flex justify-between space-x-5 hover:bg-white rounded p-2 `
      }>
        < input
          className={`${completed ? 'line-through' : ''} placeholder:text-slate-900 bg-transparent pl-2 py-4 text-2xl w-full h-[100%] appearance-none focus:outline-none focus:shadow-outline rounded`}
          onClick={() => changeTodoBeingEdited(true)}
          placeholder="Enter Todo.."
          disabled={completed}
          onChange={handleTaskChange}
          value={todoTask}
        />
        <div className='flex space-x-2'>
          <button
            onClick={() => {
              if (todoBeingEdited) {
                handleTaskSave()
              } else {
                dispatch(toggleTodo(id))
              }
            }}
            className=" bg-green-500 text-white font-semibold rounded px-4 hover:bg-green-600 duration-300 ">
            {
              todoBeingEdited ?
                <AiOutlineSave className="text-xl sm:text-2xl" /> :
                completed ? (
                  <AiOutlineReload className="text-xl sm:text-2xl" />
                ) : (
                  <AiOutlineCheck className="text-xl sm:text-2xl" />
                )
            }
          </button>
          <button
            onClick={() => {
              if (todoBeingEdited) {
                handleTaskAbort()
              } else {
                //delete Todo
                dispatch(deleteTodo(id))
              }
            }}
            className=" bg-red-500 text-white font-semibold rounded px-4 hover:bg-red-600 duration-300">
            {
              todoBeingEdited ? (
                <AiOutlineClose className="text-xl sm:text-2xl" />
              ) : (

                <BiTrash className="text-xl sm:text-2xl" />
              )
            }
          </button>
        </div>
      </div>
    </div>
  )

}
export default TodoComponent;
