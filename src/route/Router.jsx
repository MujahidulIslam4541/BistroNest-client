import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home/HOme";
import Error from "../components/ErrorPage/Error";
import Menu from "../pages/menu/Menu";
import OurShope from "../pages/shope/OurShope";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import Dashboard from "../layoutes/Dashboard";
import Cart from "../pages/Dashboard/cart/Cart";
import PaymentHistory from "../pages/Dashboard/paymentHistory/PaymentHistory";
import AllUsers from "../pages/Dashboard/allUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/payment/Payment";
import Review from "../pages/Dashboard/Review.jsx/Review";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHOme";

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
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'shope/:category',
                element: <OurShope></OurShope>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },

    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // User Routes
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path:'review',
                element:<Review></Review>
            },
            {
                path:'userHome',
                element:<UserHome></UserHome>
            },
            {
            },
            // Admin Routes
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            // TODO:update item 
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/menu/${params.id}`)
            }
        ]
    }

])

export default router;