import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home/Home";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { PrivateRoute } from "./components/PrivateRoute";
import Appointment from "./pages/Appointment/Appointment";
import Services from "./pages/Services/Services";
import Error from "./pages/404/Error";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Checkout from "./pages/Checkout/Checkout";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={queryClient}>
        <AppLayout />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/appointment",
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme accentColor="tomato">
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
