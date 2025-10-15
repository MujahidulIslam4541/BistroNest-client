import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import UseContext from '../hooks/useContext';
import Loader from '../components/loader/Loader';
import { useEffect, useState } from 'react';

const AdminRoute = ({ children }) => {
    const { user, loading, logOut } = UseContext();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (!loading && !isAdminLoading) {
            if (!user || !isAdmin) {
                logOut();  
                setRedirect(true);  
            }
        }
    }, [loading, isAdminLoading, user, isAdmin, logOut]);

    if (loading || isAdminLoading) {
        return <Loader />;
    }

    if (redirect) {
        return <Navigate to="/signIn" state={{ from: location }} replace />;
    }

    return children;
};

export default AdminRoute;


