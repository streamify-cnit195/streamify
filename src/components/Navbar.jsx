import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <h1 className="text-red-600 text-4xl font-bold ">STREAMIFY</h1>
      <div>
         <button className="text-white pr-4 ">Sign in </button>
        <button className=" bg-red-600 hover:bg-red-600/90 pr-4 px-3 py-1 md:px-5 md:py-2 lg:px-6  rounded text-white">
          Sign up
        </button>
      <Link to='/'>
      <h1 className="text-red-600 text-4xl font-bold pr-4 cursor-pointer">STREAMIFY</h1>
      </Link>

      <SearchBar />

        <div className="w-3/12 flex justify-end">   
        
        <button className="text-white pr-4 pl-2">Sign in </button>
        <button className=" bg-red-600 px-6 py-2 rounded text-white">Sign up</button>
        </div>
      </div>
      </div>
  );
};

export default Navbar;
