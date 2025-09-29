import { createBrowserRouter } from "react-router-dom";
import FrontPage from "./pages/frontpage";
import AboutUs from "./pages/aboutus";
import VolunteerPage from "./pages/volunteer";
import DonationPage from "./pages/donate";
import ArrangementsPage from "./pages/arrangements";
import LoginPage from "./pages/loginPage";

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
  },
  {
  path: "/arrangementer",
  element: <ArrangementsPage></ArrangementsPage>
  },
  {
    path: "/innlogging",
    element: <LoginPage></LoginPage>
  }
])

export default router;