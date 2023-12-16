import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Login,
  Register,
  Page404,
  NewPost,
  SinglePost,
  EditPost,
  Dashboard,
} from "./pages";
import { AuthProvider } from "./context/userContext";
import ProtectedRoute from "./routes/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/*",
    element: <Page404 />,
  },
  {
    path: "/new-post",
    element: (
      <ProtectedRoute>
        <NewPost />
      </ProtectedRoute>
    ),
  },
  {
    path: "/post/:postId",
    element: <SinglePost />,
  },
  {
    path: "/post/edit/:postId",
    element: (
      <ProtectedRoute>
        <EditPost />
      </ProtectedRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </AuthProvider>
);
