import { createBrowserRouter } from "react-router-dom";
import FrontPage from "./pages/frontpage";
import AboutUs from "./pages/aboutus";
import VolunteerPage from "./pages/volunteer";

const router= createBrowserRouter([
  {
    path: "/",
    element: <FrontPage></FrontPage>
  },
  {
    path: "/omoss",
    element: <AboutUs></AboutUs>
  },
  {
    path: "/frivillig" ,
    element: <VolunteerPage></VolunteerPage>
  }
])

export default router;