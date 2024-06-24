import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function MainLayout() {
    return (
        <div className=" w-full flex items-center justify-center">
            <div className="w-full lg:max-w-[1600px]">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}
