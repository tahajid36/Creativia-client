import { createRoot } from "react-dom/client";
import "./index.css";
import { Router, RouterProvider } from "react-router";
import { router } from "./Routes/Router";
import AuthProvider from "./Authentication/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </QueryClientProvider>
);
