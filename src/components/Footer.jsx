import React from "react";
import TMDB from "../images/tmdb.svg";

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
          <li>Only on Netflix</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>Netflix Shop</li>
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
        <img src={TMDB} alt="TMDB logo" className=" col-span-full w-full h-5 mt-6 " />
      </div>
    </div>
  );
};

export default Footer;
