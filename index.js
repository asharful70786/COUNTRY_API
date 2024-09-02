import App from "./app";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error";
import Home from "./components/home";
import CountryDetail from "./components/counterydetail";
import Contact from "./components/contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:country",
        element: <CountryDetail />
      }, {
        path: "/contact",
        element: < Contact />
      }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

