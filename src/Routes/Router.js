import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllCategories from "../Pages/AllCategories/AllCategories";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
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
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/allcategories',
        element: <AllCategories></AllCategories>
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
      }
    ]
  }
])
export default router;