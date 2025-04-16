import type { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Products from "./pages/products";
import OurStores from "./pages/ourStores";
import ContactUs from "./pages/contactUs";
import Login from "./Authentication/LogIn";
import SignUp from "./Authentication/SignUp";
import Cart from "./pages/cart";
import NotFound from "./pages/notFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
    children: [],
  },
  {
    path: "/Products",
    element: <Products />,
    children: [],
  },
  {
    path: "/OurStores",
    element: <OurStores />,
    children: [],
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
    children: [],
  },
  {
    path: "/Cart",
    element: <Cart />,
    children: [],
  },
  {
    path: "/LogIn",
    element: <Login />,
    children: [],
  },
  {
    path: "/SignUp",
    element: <SignUp />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
    children: [],
  },
];

export default routes;
