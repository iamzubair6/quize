import Home from "@/Pages/Home/Home";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import required css
import UserDashBoard from "@/Pages/Dashboard/UserDashBoard";
import BuyQuiz from "@pages/BuyQuiz/BuyQuiz";
import Campaign from "@pages/Campaign/Campaign";
import PlayQuiz from "@pages/PlayQuiz/PlayQuiz";
import Score from "@pages/Score/Score";
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
        {
          path: "",
          element: <UserDashBoard />,
        },
        {
          path: "play",
          element: <PlayQuiz />,
        },
        {
          path: "buy",
          element: <BuyQuiz />,
        },
        {
          path: "score",
          element: <Score />,
        },
        {
          path: "campaign",
          element: <Campaign />,
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
