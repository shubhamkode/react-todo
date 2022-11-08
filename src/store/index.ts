import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  devTools: false
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
