import Home from "@pages/Home";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import required css
import BuyQuiz from "@components/Shared/BuyQuiz";
import UserDashBoard from "@pages/UserDashBoard";
import "swiper/css";
import "swiper/css/pagination";
import MainLayout from "./Layouts/MainLayout";

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
          element: <BuyQuiz />,
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
