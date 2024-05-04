import React from "react";
import ReactDOM from "react-dom/client";
import App from "./layouts/admin/menus.tsx";
import "./assets/styles/index.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
