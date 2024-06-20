import { useGetData } from "../hooks/useGetData";
import ThemeController from "./ThemeController";
import { Link } from "react-router-dom";
export default function Navbar() {

    const [navImage] = useGetData('Images', 'navimage')
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to={'/'}>
                            <li><a>Home</a></li>
                        </Link>
                        <Link to={'/projects'}>
                            <li><a >Projects</a></li>
                        </Link>
                        <li><a>About Me</a></li>
                    </ul>
                </div>
                <a href='https://www.linkedin.com/in/umair-asad-84445a1b9/' target='_blank' className="btn btn-ghost text-xl">Umair Asad</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to={'/'}>
                        <li><a>Home</a></li>
                    </Link>
                    <Link to={'/projects'}>
                        <li><a >Projects</a></li>
                    </Link>
                    <li><a>About Me</a></li>
                </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Umair Asad Image" src={navImage.image} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu border dark:border-slate-800 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='https://www.linkedin.com/in/umair-asad-84445a1b9/' target='_blank'>LinkedIn</a></li>
                        <li><a href='https://github.com/umair-asad-bhatti' target='_blank'>Github</a></li>
                    </ul>
                </div>
                <div className="mx-4">
                    <ThemeController />
                </div>
            </div>
        </div>
    )
}
