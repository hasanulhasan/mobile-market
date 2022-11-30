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
import AdminRoute from "../UserControl/AdminRoute/AdminRoute";
import PrivateRoute from "../UserControl/Contexts/PrivateRoute/PrivateRoute";
import Login from "../UserControl/Login/Login";
import SellerRoute from "../UserControl/SellerRoute/SellerRoute";
import SignUp from "../UserControl/SignUp/SignUp";
import Error from "../Utilities/Error/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        loader: ({ params }) => fetch(`https://assignment-12-server-coral-delta.vercel.app/category/${params.id}`)
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <MyOrders></MyOrders>
      },
      {
        path: '/dashboard/addProducts',
        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
      },
      {
        path: '/dashboard/myProducts',
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
      },
      {
        path: '/dashboard/allSeller',
        element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
      },
      {
        path: '/dashboard/allBuyers',
        element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
      }
    ]

  }
])
export default router;