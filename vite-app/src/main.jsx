import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { InventoryProvider } from "./Context/InventoryContext";
import "./Style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <InventoryProvider>
      <App />
    </InventoryProvider>
  </BrowserRouter>
);
