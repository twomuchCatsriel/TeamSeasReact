import { createBrowserRouter } from "react-router-dom";
import FrontPage from "./pages/frontpage";
import AboutUs from "./pages/aboutus";
import VolunteerPage from "./pages/volunteer";
import DonationPage from "./pages/donate";

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
  },
  {
    path: "/donasjon",
    element: <DonationPage></DonationPage>
  }
])

export default router;