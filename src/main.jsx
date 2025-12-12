import { createRoot } from "react-dom/client";
import "./index.css";
import { Router, RouterProvider } from "react-router";
import { router } from "./Routes/Router";
import AuthProvider from "./Authentication/AuthProvider";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
