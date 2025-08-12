import { Navigate, useLocation } from 'react-router-dom'
import useAdmin from '../hooks/useAdmin'
import UseContext from '../hooks/useContext'
import Loader from '../components/loader/Loader'

const AdminRoute = ({ children }) => {
    const [user, loading] = UseContext()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/signIn' state={{ from: location }} replace></Navigate>
}

export default AdminRoute
