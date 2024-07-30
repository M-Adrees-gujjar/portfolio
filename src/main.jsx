import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Project from "./component/Projects/Project";
import Js_project from "./component/Projects/Js_project";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {path : '',
      element : <Js_project />
    },
    {path : '/js',
    element : <Project />
  },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
