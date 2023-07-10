import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../LoginRegister/Login/Login";
import Register from "../LoginRegister/Register/Register";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import ManageUsers from "../Pages/DashBoard/AdminPanel/ManageUsers/ManageUsers";
import AddNewProduct from "../Pages/DashBoard/SellerPanel/AddNewProduct/AddNewProduct";
import MyNewProducts from "../Pages/DashBoard/SellerPanel/MyNewProducts/MyNewProducts";
import UpdateProduct from "../Pages/DashBoard/SellerPanel/UpdateProduct/UpdateProduct";
import Welcome from "../Pages/DashBoard/Welcome/Welcome";
import ManageProducts from "../Pages/DashBoard/AdminPanel/ManageProducts/ManageProducts";
import Feedback from "../Pages/DashBoard/AdminPanel/Feedback/Feedback";
import MySelectedProducts from "../Pages/DashBoard/Customer/MySelectedProducts/MySelectedProducts";
import Payment from "../Pages/DashBoard/Customer/Payment/Payment";
import MyPaymentHistory from "../Pages/DashBoard/Customer/MyPaymentHistory/MyPaymentHistory";
import MyOrderedProduct from "../Pages/DashBoard/Customer/MyOrderedProducts/MyOrderedProduct";
import PrivateProvider from "../Provider/PrivateProvider/PrivateProvider";
import AdminProvider from "../Provider/AdminProvider/AdminProvider";
import SellerProvider from "../Provider/SellerProvider/SellerProvider";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import ContactUs from "../Pages/ContactUs/ContactUs";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
        loader: () => fetch(`https://glamour-attire.vercel.app/totalProducts`)
      },
      {
        path: '/productDetails/:id',
        element: <PrivateProvider><ProductDetails></ProductDetails></PrivateProvider>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/blogDetails/:id',
        element: <BlogDetails></BlogDetails>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path:'/contact',
        element:<ContactUs></ContactUs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/termsCondition',
        element:<TermsConditions></TermsConditions>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateProvider><DashBoardLayout></DashBoardLayout></PrivateProvider>,
    children: [
      {
        path: 'welcome',
        element: <Welcome></Welcome>
      },
      {
        path: 'manageUsers',
        element: <AdminProvider><ManageUsers></ManageUsers></AdminProvider>
      },
      {
        path: 'manageProducts',
        element: <AdminProvider><ManageProducts></ManageProducts></AdminProvider>
      },
      {
        path: 'feedback/:id',
        element: <Feedback></Feedback>
      },
      {
        path: 'addNewProduct',
        element: <SellerProvider><AddNewProduct></AddNewProduct></SellerProvider>
      },
      {
        path: 'myNewProducts',
        element: <SellerProvider><MyNewProducts></MyNewProducts></SellerProvider>
      },
      {
        path: 'updateProduct/:id',
        element: <SellerProvider><UpdateProduct></UpdateProduct></SellerProvider>
      },
      {
        path: 'selectedProducts',
        element: <MySelectedProducts></MySelectedProducts>
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <MyPaymentHistory></MyPaymentHistory>
      },
      {
        path: 'myOrderedProduct',
        element: <MyOrderedProduct></MyOrderedProduct>
      }
    ]
  }
]);
export default router;