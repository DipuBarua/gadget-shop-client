import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/dashboard/Overview";
import PrivateRoute from "./privateRoute/PrivateRoute";
import AddProduct from "../pages/dashboard/seller/AddProduct";
import MyProducts from "../pages/dashboard/seller/MyProducts";
import MyWishlist from "../pages/dashboard/buyer/MyWishlist";
import BuyerRoute from "./privateRoute/BuyerRoute";
import SellerRoute from "./privateRoute/SellerRoute";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/products",
                element: <Products></Products>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/signup",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard/overview",
                element: <Overview></Overview>
            },
            {
                path: "/dashboard/addproduct",
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: "/dashboard/myproducts",
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: "/dashboard/mywishlist",
                element: <BuyerRoute><MyWishlist></MyWishlist></BuyerRoute>
            },
        ]
    }
]);

export default routers;