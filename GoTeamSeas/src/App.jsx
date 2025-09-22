import { createBrowserRouter } from "react-router-dom";
import FrontPage from "./pages/frontpage";
import AboutUs from "./pages/aboutus";

const router= createBrowserRouter([
  {
    path: "/",
    element: <FrontPage></FrontPage>
  },
  {
    path: "/omoss",
    element: <AboutUs></AboutUs>
  }
])

export default router;