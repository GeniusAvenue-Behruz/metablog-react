import React, { useState } from 'react';
import SearchBar from './SearchBar';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to handle nav visibility

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-white py-6">
      <div className="container max-w-6xl mx-auto flex justify-between items-center px-4">
        <a href="#!" className="flex items-center">
          <img src="assets/imgs/logo.svg" alt="logo" className="h-10" />
        </a>

        <nav className={`md:flex md:gap-4 ${isNavOpen ? 'block' : 'hidden md:block'}`}>
          <ul className="flex flex-col md:flex-row md:gap-3">
            <li className={` ${isNavOpen} ? 'bg-gray-200 text-center rounded-md hover:bg-gray-100' : ''`}><a href="#!" className="text-gray-800 hover:text-blue-600">Home</a></li>
            <li className={` ${isNavOpen} ? 'bg-gray-200 text-center rounded-md hover:bg-gray-100' : ''`}><a href="#!" className="text-gray-800 hover:text-blue-600">Blog</a></li>
            <li className={` ${isNavOpen} ? 'bg-gray-200 text-center rounded-md hover:bg-gray-100' : ''`}><a href="#!" className="text-gray-800 hover:text-blue-600">Single Post</a></li>
            <li className={` ${isNavOpen} ? 'bg-gray-200 text-center rounded-md hover:bg-gray-100' : ''`}><a href="#!" className="text-gray-800 hover:text-blue-600">Pages</a></li>
            <li className={` ${isNavOpen} ? 'bg-gray-200 text-center rounded-md hover:bg-gray-100' : ''`}><a href="#!" className="text-gray-800 hover:text-blue-600">Contact</a></li>
          </ul>

          <SearchBar />
        </nav>

        {/* Hamburger Menu Button */}
        <button className="md:hidden" onClick={toggleNav}>
          <i className={isNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
