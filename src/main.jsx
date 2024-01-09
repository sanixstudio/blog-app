import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
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
  Profile,
} from "./pages";
import { AuthProvider } from "./context/userContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
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
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
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
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={router}>
      <Theme>
        <App />
      </Theme>
    </RouterProvider>
  </AuthProvider>
);
