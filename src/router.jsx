import { createBrowserRouter } from "react-router-dom";
import DynamicPage from "./components/pages/DynamicPage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const Layout = () => (
  <>
    <Navbar />
    <DynamicPage />
    <Footer />
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />
  },
  {
    path: "/:slug",
    element: <Layout />
  }
]);
