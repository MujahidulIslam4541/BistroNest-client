import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"


const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <section className="min-h-screen ">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
