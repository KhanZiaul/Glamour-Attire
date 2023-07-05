import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../LoginRegister/Login/Login";
import Register from "../LoginRegister/Register/Register";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../AboutUs/AboutUs";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import ManageUsers from "../Pages/DashBoard/AdminPanel/ManageUsers/ManageUsers";
import AddNewProduct from "../Pages/DashBoard/SellerPanel/AddNewProduct/AddNewProduct";
import MyNewProducts from "../Pages/DashBoard/SellerPanel/MyNewProducts/MyNewProducts";
import UpdateProduct from "../Pages/DashBoard/SellerPanel/UpdateProduct/UpdateProduct";
import Welcome from "../Pages/DashBoard/Welcome/Welcome";
import ManageProducts from "../Pages/DashBoard/AdminPanel/ManageProducts/ManageProducts";
import Feedback from "../Pages/DashBoard/AdminPanel/Feedback/Feedback";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/shop',
          element:<Shop></Shop>
        },
        {
          path:'/productDetails/:id',
          element:<ProductDetails></ProductDetails>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/about',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
    {
      path:'dashboard',
      element:<DashBoardLayout></DashBoardLayout>,
      children:[
        {
          path:'manageUsers',
          element:<ManageUsers></ManageUsers>
        },
        {
          path:'addNewProduct',
          element:<AddNewProduct></AddNewProduct>
        },
        {
          path:'myNewProducts',
          element:<MyNewProducts></MyNewProducts>
        },
        {
          path:'updateProduct/:id',
          element:<UpdateProduct></UpdateProduct>
        },
        {
          path:'welcome',
          element:<Welcome></Welcome>
        },
        {
          path:'manageProducts',
          element:<ManageProducts></ManageProducts>
        },
        {
          path:'feedback/:id',
          element:<Feedback></Feedback>
        }
      ]
    }
  ]);
  export default router;