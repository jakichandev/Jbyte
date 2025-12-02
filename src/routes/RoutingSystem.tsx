import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Collaborate from "../pages/ContactMe";
import { Portfolio } from "../pages/Portfolio";
import { ProjectDetails } from "../components/sections/ProjectDetails";
import { Profile } from "../pages/Profile";
import ContactMePage from "../pages/ContactMe";

const Router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "collaborate", element: <Collaborate /> },
  { path: "*", element: <div>Not Found</div> },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "portfolio/:label",
    element: <ProjectDetails />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "contact",
    element: <ContactMePage />,
  },
]);

const RoutingSystem = () => {
  return <RouterProvider router={Router} />;
};

export default RoutingSystem;
