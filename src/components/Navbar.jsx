import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

const Navbar = () => {

return (
<>
  <nav className="sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="max-w-10xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between p-4 z-[100] w-full">
          <Link to='/'>
            <h1 className= "text-red-600 left-0 top-0 sm:text-2xl md:text-4xl p-4 font-bold cursor-pointer">STREAMIFY</h1>
          </Link>
          <div className="flex justify-end">   
          <SearchBar />
            <div className="hidden md:flex text-nowrap">
              <button className= "text-white hover:bg-gray-50/20 px-6 py-2 mr-2 rounded cursor-pointer">Sign in</button>
              <button className="bg-red-600 text-white hover:bg-gray-50/20 px-6 py-2 rounded cursor-pointer">Sign up</button>
            </div>    
            <div className="block md:hidden">
              <button id="mobile-menu-button" className="text-white focus:outline-none pl-2 pt-6">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            
          </div>
          <div id="mobile-menu" className="hidden md:hidden bg-gray-700">
            <button className="block text-white pr-4 pl-2">Sign in </button>
            <button className="block bg-red-600 hover:bg-gray-50/20 px-6 py-2 rounded text-white">Sign up</button>
          </div>
        </div>
      </div>
  </nav>
</>
);      
};
  
  export default Navbar;
