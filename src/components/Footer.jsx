import React from "react";
import TMDB from "../images/tmdb.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="col-span-full w-full h-2 bg-gray-400/[.5] my-12 p-0"></div>
      <div className="max-w-[1240px] pl-14 justify-evenly justify-items-start  content-center items-center mx-auto py-16 px-4 grid grid-cols-2 lg:grid-cols-4  text-gray-300 ">
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Buy Gift Cards</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Streamify</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>Streamify Shop</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
          <li>Personal Information</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Redeem Gift Cards</li>
          <li>Privacy</li>
          <li>Speed Test</li>
          <li>Ad Choices</li>
        </ul>
        <Link to='https://www.themoviedb.org/'  target="_blank">
        <img src={TMDB} alt="TMDB logo" className="  h-5 mt-6 " />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
