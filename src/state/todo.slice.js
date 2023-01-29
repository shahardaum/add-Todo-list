import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 1002,
        text: action.payload,
        show: true,
        completed: false,
      };
      state.todos.push(todo);
      state.count += 1;
    },
    removeTodo: (state, action) => {
      console.log(action.payload);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
    displayAll: (state, action) => {
      state.todos = state.todos.map((todo) => ({ ...todo, show: true }));
      state.count = state.todos.length;
      console.log(state.todos);
    },
    displayActive: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.completed === false
          ? { ...todo, show: true }
          : { ...todo, show: false }
      );
      state.count = state.todos.length;
      console.log(state.todos);
    },
    displayCompleted: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.completed === true);
      state.count = state.todos.length;
      console.log(state.todos);
    },
    removeCompleted: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.completed === false);
    },
  },
});
export const { addTodo, removeTodo, displayAll, displayCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
