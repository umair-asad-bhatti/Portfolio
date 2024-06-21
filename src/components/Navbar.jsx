import { useGetData } from "../hooks/useGetData";
import ThemeController from "./ThemeController";
import { Link } from "react-router-dom";
import githubDark from '../assets/icons/githubDark.png'
import githubLight from '../assets/icons/githubLight.png'
import linkedinDark from '../assets/icons/linkedinDark.png'
import linkedinLight from '../assets/icons/linkedinLight.png'
import CustomLink from './CustomLink'
import { LINKS } from '../constants/Links'
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
                        <li><a>services</a></li>
                    </ul>
                </div>
                <a href={LINKS.linkedIn} target='_blank' className="btn btn-ghost text-xl">Umair Asad</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to={'/'}>
                        <li><a>Home</a></li>
                    </Link>
                    <Link to={'/projects'}>
                        <li><a >Projects</a></li>
                    </Link>
                    <li><a>services</a></li>
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
                        <CustomLink link={LINKS.linkedIn} title='LinkedIn' lightImg={linkedinLight} darkImg={linkedinDark} />
                        <CustomLink link={LINKS.github} title='Github' lightImg={githubLight} darkImg={githubDark} />
                    </ul>
                </div>
                <div className="mx-4">
                    <ThemeController />
                </div>
            </div>
        </div>
    )
}
