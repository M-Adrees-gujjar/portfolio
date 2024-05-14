import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Project from "./component/Projects/Project";
import Js_project from "./component/Projects/Js_project";
// import App from "./App";
// import About from "./component/About";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {path : '',
      element : <Project />
    },
    {path : '/js',
    element : <Js_project />
  },
  {path : '/mern',
  element : <Js_project />
}
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
