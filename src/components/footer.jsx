import React from 'react';
import logoTOP from '../Assets/images/ScreenShot042623At073.png';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600 py-8 mt-24 text-lg">
            <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                    {/* Column 1: Logo and Description */}
                    <div>
                        <img src={logoTOP} alt="Logo" className="h-16 w-auto mb-4" />
                        <p className="text-xl font-bold pr-9 text-black">Clear your thoughts, Focus your mind, and reduce stress!</p>
                    </div>
                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-2 text-black">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Courses</a></li>
                        </ul>
                    </div>
                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-xl font-semibold mb-2 text-black">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* Column 4: Further Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-2 text-black">Further Info</h4>
                        <ul className="space-y-2">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookies Policy</a></li>
                        </ul>
                    </div>
                    {/* Column 5: Need Help? */}
                    <div>
                        <h4 className="text-xl font-semibold mb-2 text-black">Need Help?</h4>
                        <form className='flex'>
                            <input
                                type="text"
                                placeholder="Your email address"
                                className="w-full border border-gray-300 py-2 px-4 h-12 rounded-md bg-gray-100"
                            />
                            <button
                                type="submit"
                                className="bg-orange-500 text-white py-2 px-6 hover:bg-orange-600 flex text-lg font-semibold"
                            >
                                Submit
                            </button>
                        </form>
                        <div className='flex mt-3'>
                            <FaInstagram className='mr-7 text-2xl text-orange-500'/>
                            <FaTwitter className='mr-7 text-2xl text-orange-500'/>
                            <FaFacebookF className=' text-2xl text-orange-500'/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
