import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home/HOme";
import Error from "../components/ErrorPage/Error";
import Menu from "../pages/menu/Menu";
import OurShope from "../pages/shope/OurShope";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'menu',
                element:<Menu></Menu>
            },
            {
                path:'shope/:category',
                element:<OurShope></OurShope>
            }
        ]
    }
])

export default router;