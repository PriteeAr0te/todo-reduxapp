import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "../features/Todo/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const addDeleteHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const addCompltedHandler = (id) => {
    dispatch(completeTodo(id));
  };

  return (
    <>
      {todos.map((todo) => (
        <div
          className="items-center w-[78%] bg-slate-900 p-3 mt-0.5"
          key={todo.id}
        >
          <div className="flex justify-between flex-wrap">
            <div className="">
              <h2
                className={`${
                  todo.completed
                    ? "line-through text-indigo-600"
                    : "text-indigo-500"
                } text-2xl`}
              >
                {todo.title}
              </h2>
              <p
                className={`${
                  todo.completed ? "text-slate-500" : "text-slate-200"
                }`}
              >
                {todo.description}
              </p>
              <p
                className={`${
                  todo.completed ? "text-slate-500" : "text-slate-300"
                } text-sm `}
              >
                Due Date: {todo.date}{" "}
              </p>
            </div>
            <div className="p-2 flex justify-center m-1 md:m-none flex-wrap">
              <button
                className={`${
                  todo.completed ? "bg-sky-500 text-slate-200" : ""
                } bg-slate-200 text-sky-500 h-[40px] flex justify-center items-center hover:text-slate-200 hover:bg-sky-500 border-1 border-sky-500 rounded-xl px-1.5 py-0.5 mx-1 md:mx-2 my-1`}
                onClick={() => addCompltedHandler(todo.id)}
              >
                {todo.completed ? "Completed" : "Complete"}
              </button>
              <button
                className="h-[40px] flex justify-center items-center bg-slate-200 text-red-500 hover:text-slate-200 hover:bg-red-500 border-1 border-red-500 rounded-xl px-1.5 py-0.5 mx-1 md:mx-2 my-1"
                onClick={() => addDeleteHandler(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Todos;
