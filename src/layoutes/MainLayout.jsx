import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"


const MainLayout = () => {

  const location = useLocation()
  const noHeaderFooter = location.pathname.includes('signIn')
  return (
    <div className="max-w-7xl mx-auto">
      
      {noHeaderFooter || <Navbar></Navbar>}


      <section className="min-h-screen ">
        <Outlet></Outlet>
      </section>


      {noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default MainLayout
