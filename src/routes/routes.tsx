import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ROUTES_PATH from "@/constants/routes";
import ExpenseSummary from "@/pages/Summary";
import ExpenseChart from "@/pages/ExpenseChart";
import CategoriesList from "@/pages/CategoryList";

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
  {
    path: `${ROUTES_PATH.SUMMARY}`,
    element: (
      <Layout>
        <ExpenseSummary />
      </Layout>
    ),
  },
  {
    path: `${ROUTES_PATH.PIECHART}`,
    element: (
      <Layout>
        <ExpenseChart />
      </Layout>
    ),
  },
  {
    path: `${ROUTES_PATH.CATEGORIES}`,
    element: (
      <Layout>
        <CategoriesList />
      </Layout>
    ),
  }, 
]);

export default router;
