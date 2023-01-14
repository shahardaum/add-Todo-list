import React from "react";
import ReactDOM from "react-dom/client";
import App from "../view/App";
import GlobalStyles from "../styles/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <GlobalStyles />
  </>
);
