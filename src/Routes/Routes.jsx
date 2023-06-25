import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import App from "../App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<App></App>
        }
      ]
    },
  ]);
  export default router;