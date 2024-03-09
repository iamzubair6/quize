import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// import required css
import "swiper/css";
import "swiper/css/pagination";
import Home from "./Pages/Home";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    // {
    //   path: "",
    //   element: <MainLayout />,
    //   children: [
    //     // landing page
    //     {
    //       path: "",
    //       element: <Home />,
    //     },
    //   ],
    // },
    // fallback to landing page
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={routes} />;
}