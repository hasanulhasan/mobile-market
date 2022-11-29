import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllCategories from "../Pages/AllCategories/AllCategories";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import AllBuyers from "../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSeller from "../Pages/DashBoard/AllSeller/AllSeller";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyOrders from "../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../Pages/DashBoard/MyProducts/MyProducts";
import Home from "../Pages/Home/Home";
import Login from "../UserControl/Login/Login";
import SellerRoute from "../UserControl/SellerRoute/SellerRoute";
import SignUp from "../UserControl/SignUp/SignUp";
import Error from "../Utilities/Error/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/allCategories',
        element: <AllCategories></AllCategories>
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: '/dashboard',
        element: <MyProducts></MyProducts>
      },
      {
        path: '/dashboard/allSeller',
        element: <AllSeller></AllSeller>
      },
      {
        path: '/dashboard/allBuyers',
        element: <AllBuyers></AllBuyers>
      },
      {
        path: '/dashboard/addProducts',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/dashboard/myOrders',
        element: <MyOrders></MyOrders>
      }
    ]

  }
])
export default router;