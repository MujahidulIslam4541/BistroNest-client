
import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from 'react-router/dom';
import router from './route/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <RouterProvider router={router}>
        </RouterProvider>,
    </HelmetProvider>
)
