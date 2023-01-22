import React from "react";
import ReactDOM from "react-dom/client";
import App from "../view/App";
import GlobalStyles from "../styles/reset.css";
import { Provider } from "react-redux";
import store from "../state/configure.store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyles />
  </>
);
