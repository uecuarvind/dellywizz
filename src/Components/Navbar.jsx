import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import './style.css';

function Navbar() {
    return (
        <div className="fixed w-full z-20 top-0 bg-blue-200 bg-opacity-80">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="ml-4 logo" />
                </div>
                <div className="flex items-center">
                    <ul className="flex flex-row space-x-4 text-xl">
                        <li>
                            <Link spy={true} to='Overview' smooth={true} duration={500} className="block py-2 pl-3 pr-4 rounded hover:text-orange-600 text-blue-700">Home</Link>
                        </li>
                        <li>
                            <Link spy={true} to='Overview' smooth={true} duration={500} className="block py-2 pl-3 pr-4 rounded hover:text-orange-600 text-blue-700">About</Link>
                        </li>
                        <li>
                            <Link spy={true} to='projects' smooth={true} duration={500} className="block py-2 pl-3 pr-4 rounded hover:text-orange-600 text-blue-700">Projects</Link>
                        </li>
                        <li>
                            <Link spy={true} to='contact' smooth={true} duration={500} className="block py-2 pl-3 pr-4 rounded hover:text-orange-600 text-blue-700">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
