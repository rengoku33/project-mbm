import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"; // outlet to persist comp, link is like anchor tag
import logoTOP from '../Assets/images/ScreenShot042623At073.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const NavBar = () => {
    return (
        <Fragment>
            <div className="flex items-center justify-between px-24 py-2 bg-white bg-opacity-75 fixed w-full z-10 h-24">
                <Link className="flex items-center" to='/'>
                    <img src={logoTOP} alt="MBM" className="h-20 mt-1 mb-1" />
                </Link>
                <div className="px-32">
                    <Link className="px-3 py-1 text-xl font-semibold" to='/about'>About Us</Link>
                    <Link className="px-5 py-1 text-xl font-semibold" to='/course'>Courses</Link>
                    <Link className="px-5 py-1 text-xl font-semibold" to='/community'>Community</Link>
                    <Link className="px-3 py-1 text-xl font-semibold" to='/contact'>Contact Us</Link>
                </div>
                <div className="flex">
                    <Link className="px-2 py-2 mr-4 rounded-full bg-white" to='/'>
                        <FaFacebookF className="text-black" size={21} />
                    </Link>
                    <Link className="px-2 py-2 mr-4 rounded-full bg-white" to='/'>
                        <FaTwitter className="text-black" size={21} />
                    </Link>
                    <Link className="px-2 py-2 mr-4 rounded-full bg-white" to='/'>
                        <FaLinkedin className="text-black" size={21} />
                    </Link>
                </div>
                <div>
                    <Link className="px-2 py-2" to='/'>
                        <IoMdSearch className="text-black" size={33} />
                    </Link>
                </div>
                <div>
                    <Link className="px-7 py-3 rounded-xl bg-orange-500 text-white text-xl hover:bg-yellow-400 transition duration-500" to='/'>LOG IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavBar;