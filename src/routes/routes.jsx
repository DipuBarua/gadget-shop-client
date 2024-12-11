import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
    },
]);

export default routers;