// src/App.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Invoices from "./pages/Invoices";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import NotFound from "./components/NotFound";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Invoices />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
