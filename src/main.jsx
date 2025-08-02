import ReactDOM from "react-dom/client";
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './route/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "react-hot-toast";
import AuthProvider from "./provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <AuthProvider>
            <RouterProvider router={router} />
            <Toaster />
        </AuthProvider>
    </HelmetProvider>
);
