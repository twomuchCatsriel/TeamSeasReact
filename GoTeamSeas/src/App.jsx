import { createBrowserRouter } from "react-router-dom";
import FrontPage from "./pages/frontpage";
import TestPage from "./test";

const router= createBrowserRouter([
  {
    path: "/",
    element: <FrontPage></FrontPage>
  },
  {
    path: "/test",
    element: <TestPage></TestPage>
  }
])

export default router;