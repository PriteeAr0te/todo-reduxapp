import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";
import Todos from "./Todos";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title, description }));
    setTitle("");
    setDescription("");
  };

  return (
    <div className=" flex justify-center">
      <div className="w-[70vw] bg-slate-950 text-slate-50 p-3 mt-10 flex flex-col justify-center items-center">
        <h2 className="pt-2 text-2xl font-semibold">MyTodos</h2>
        <div className="flex items-center w-[78%] bg-slate-900 p-3 mt-2.5 flex-wrap">
          {" "}
          <div className="flex w-full">
            <form
              className="flex md:flex-row flex-col justify-center items-center p-2"
              onSubmit={addTodoHandler}
            >
              <div className="flex-initial mb-3 pr-5">
                <label htmlFor="todo-title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="todo-title"
                  placeholder="Enter a Todo..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex-initial mb-3">
                <label htmlFor="todo-description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="todo-description"
                  placeholder="Describe Todo..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="h-full flex justify-center items-center pl-1">
                <button
                  type="submit"
                  className="bg-indigo-500 px-6 py-2 text-lg hover:bg-indigo-600 text-white rounded-lg h-[40%] mt-3 lg:ml-20 ml-2 flex items-center"
                >
                  {" "}
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        <Todos />
      </div>
    </div>
  );
};

export default AddTodo;
