import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ROUTES_PATH from "@/constants/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: `${ROUTES_PATH.HOME}`,
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
]);

export default router;
