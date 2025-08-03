import { Navigate } from "react-router-dom";
import UseContext from "../hooks/useContext"
import Loader from "../components/loader/Loader";


const PrivetRoutes = ({children}) => {
    const {user,loading}=UseContext()

    if(loading){
        return <Loader></Loader>
    }

    if(user){
        return children;
    }
  return <Navigate to='/signIn'></Navigate>
}

export default PrivetRoutes
