import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.scss";
import "./index.scss";
import App from "./App";

if (typeof window !== "undefined" && !window.require) {
  window.require = (name) => new URL(name, import.meta.url).href;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
