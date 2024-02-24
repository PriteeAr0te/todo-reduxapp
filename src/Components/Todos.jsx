import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/Todo/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const addDeleteHandler = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      {todos.map((todo) => (
        <div
          className="items-center w-[78%] bg-slate-900 p-3 mt-0.5"
          key={todo.id}
        >
          <div className="flex justify-between">
            <div className="">
              <h2 className="text-2xl text-indigo-500">{todo.title}</h2>
              <p className="text-slate-200">{todo.description}</p>
            </div>
            <div className="p-2 flex">
              <button className="bg-slate-200 text-sky-500 hover:text-slate-200 hover:bg-sky-500 border-1 border-sky-500 rounded-xl px-1.5 py-0.5 mx-2">
                Complete
              </button>
              <button
                className="bg-slate-200 text-red-500 hover:text-slate-200 hover:bg-red-500 border-1 border-red-500 rounded-xl px-1.5 py-0.5 mx-2"
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
