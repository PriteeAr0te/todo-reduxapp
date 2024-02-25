import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { title, description, date } = action.payload;
      const todo = {
        id: nanoid(),
        title,
        description,
        date,
        completed: false,
      };
      state.todos = [...state.todos, todo];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      const todoId = action.payload;
      const todoToggle = state.todos.find((todo) => todo.id === todoId);
      if (todoToggle) {
        todoToggle.completed = !todoToggle.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
