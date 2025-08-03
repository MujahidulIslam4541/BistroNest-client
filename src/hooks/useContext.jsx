import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"


const UseContext = () => {
 const context=useContext(AuthContext)
  return context;
}

export default UseContext
