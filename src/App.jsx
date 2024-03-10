import Home from "@pages/Home";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import required css
import "swiper/css";
import "swiper/css/pagination";
import MainLayout from "./Layouts/MainLayout";
import UserDashBoard from "./Pages/UserDashBoard";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "dashboard",
      element: <MainLayout />,
      children: [
        // landing page
        {
          path: "",
          element: <UserDashBoard />,
        },
        {
          path: "play",
          element: <UserDashBoard />,
          handle: {
            crumb: { to: "/play" },
          },
        },
      ],
    },
    // fallback to landing page
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
