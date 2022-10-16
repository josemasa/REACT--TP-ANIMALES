import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/error-page";
import Contact, {
  loader as contactLoader,
} from "./components/AgendaContactos/contact";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./components/AgendaContactos/root";
import { action as destroyAction } from "./routes/destroy";
import HomePage from "./pages/HomePage";
import QS from "./pages/qs";
import EditContact, { action as editAction } from "./routes/edit";
import Index from "./routes/index";
import Login from "./components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
  {
    path: "qs",
    element: <QS />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
