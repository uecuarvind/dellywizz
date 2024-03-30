import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen }) {
  return (
    <div className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
