import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Link to="/" className="flex items-center" onClick={handleClick}>
              <img
                className="w-16 h-16 rounded-full border border-gray-300 p-1"
                src="/images/easeawaylogo.jpeg"
                alt="EaseAway Logo"
              />
              <span className="ml-3 text-gray-800 font-semibold text-xl">
                Easeaway Travel
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-auto">
            <div className="mb-6 md:mb-0">
              <h2 className="text-sm font-semibold text-gray-900 uppercase mb-3">
                Resources
              </h2>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <Link to="/" className="hover:text-gray-900" onClick={handleClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-900">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ml-6">
              <h2 className="text-sm font-semibold text-gray-900 uppercase mb-3">
                Follow us
              </h2>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a
                    href="https://www.instagram.com/easeawaytravel/profilecard/?igsh=MTB3ZnFzN3hlc2syYg=="
                    className="hover:text-gray-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        <div className="flex justify-center items-center">
          <span className="text-sm text-gray-500">
            © 2024
            <a href="https://hiteshchoudhary.com/" className="hover:underline ml-1">
              EaseawayTravel
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
