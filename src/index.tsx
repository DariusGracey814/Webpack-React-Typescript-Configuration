import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

// get root element
const container = document.getElementById("root");

// check if root exist
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
