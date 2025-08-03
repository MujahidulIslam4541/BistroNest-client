import { Navigate, useLocation } from "react-router-dom";
import UseContext from "../hooks/useContext"
import Loader from "../components/loader/Loader";


const PrivetRoutes = ({children}) => {
    const {user,loading}=UseContext()
const location=useLocation()
    if(loading){
        return <Loader></Loader>
    }

    if(user){
        return children;
    }
  return <Navigate to='/signIn' state={{ from: location }} replace></Navigate>
}

export default PrivetRoutes
