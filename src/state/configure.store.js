import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root.reducer";
const current_state = () => {
  return JSON.parse(localStorage.getItem("applicationData")) || {};
};

const localStorageMiddle = (store) => (next) => (action) => {
  console.log("dispatching", action);
  next(action);
  localStorage.setItem("applicationData", JSON.stringify(store.getState()));
  console.log("next state", store.getState());
};

const initialState = current_state();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  // middleware: [logger, thunk] // --> set ALL of the middleware functions yourself
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    localStorageMiddle,
  ], // --> add middleware functions to the default ones
});
export default store;
