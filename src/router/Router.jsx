import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import CardDetail from "../pages/CardDetail";
import Home from "../pages/Home";
import Reading from "../pages/Reading";


const routerTarot = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home/>, },
      { path: "/card/:id", element: <CardDetail/>, },
      { path: "/reading", element: <Reading/>, },
    ],

  },

]);

export default routerTarot;