import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home/HOme";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: 'This is error page',
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;