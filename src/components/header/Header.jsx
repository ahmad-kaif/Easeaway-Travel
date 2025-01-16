import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  let timeoutId;

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutId);
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdown(null);
    }, 300);
  };
  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutId); // Clear timeout to keep dropdown open
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const dropdownItems = {
    "Global Vacation Packages": [
      { name: "Almaty", route: "/package/almaty" },
      { name: "Bali", route: "/package/bali" },
      { name: "Baku", route: "/package/baku" },
      { name: "Europe", route: "/package/europe" },
      { name: "Bhutan", route: "/package/bhutan" },
      { name: "Thailand", route: "/package/thailand" },
      { name: "Dubai", route: "/package/dubai" },
      { name: "Turkey", route: "/package/turkey" },
      { name: "Srilanka", route: "/package/srilanka" },
      { name: "Maldives", route: "/package/maldives" },
      { name: "Singapore", route: "/package/singapore" },
      { name: "Malaysia", route: "/package/malaysia" },
      { name: "Mauritius", route: "/package/mauritius" },
    ],
    "India Trip Bundles": [
      { name: "Ladakh", route: "/package/ladakh" },
      { name: "Kashmir", route: "/package/kashmir" },
      { name: "Andaman & Nicobar Island", route: "/package/andaman" },
      { name: "Meghalaya", route: "/package/meghalaya" },
      { name: "Spiti", route: "/package/spiti" },
      { name: "Kerala", route: "/package/kerala" },
      { name: "Himachal Pradesh", route: "/package/himachalPradesh" },
      { name: "Sikkim", route: "/package/sikkim" },
      { name: "Uttarakhand", route: "/package/uttarakhand" },
      { name: "Rajasthan", route: "/package/rajasthan" },
    ],
    "Bike Trips": [
      { name: "Leh-Ladakh", route: "/package/LehLadakh" },
      {
        name: "Manali-Tsomoriri-Leh-Srinagar",
        route: "/package/manaliTsomoririLehSrinagar",
      },
      {
        name: "Srinagar-Leh-Tso Moriri-Manali",
        route: "/package/srinagarLehTsoMoririManali",
      },
      {
        name: "Leh to Leh with Umling La",
        route: "/package/lehToLehUmlingLa",
      },
      {
        name: "Spiti Valley Group Trip",
        route: "/package/spitiValleyGroupTrip",
      },
      { name: "Winter Spiti", route: "/package/winterSpiti" },
    ],
    "Honeymoon Packages": [
      { name: "Bali", route: "/package/baliHoneymoon" },
      { name: "Vietnam", route: "/package/vietnamHoneymoon" },
      { name: "Singapore", route: "/package/singaporeHoneymoon" },
      { name: "Thailand", route: "/package/thailandHoneymoon" },
      { name: "Kashmir", route: "/package/kashmirHoneymoon" },
      { name: "Maldives", route: "/package/maldivesHoneymoon" },
      { name: "Andaman", route: "/package/andamanHoneymoon" },
      { name: "Kerala", route: "/package/keralaHoneymoon" },
    ],
    "Community Trips": [
      {
        name: "Spiti Valley Group trips",
        route: "/package/communitySpitiValleyGroupTrips",
      },
      {
        name: "Meghalaya Group Tour",
        route: "/package/communityMeghalayaGroupTour",
      },
      { name: "Bali Group Tour", route: "/package/communityBaliGroupTour" },
      { name: "Dubai Group Tour", route: "/package/communityDubaiGroupTour" },
      {
        name: "Thailand Group Tour",
        route: "/package/communityThailandGroupTour",
      },
      { name: "Andaman", route: "/package/communityAndaman" },
      { name: "Rajasthan", route: "/package/communityRajasthan" },
      { name: "Kerala", route: "/package/communityKerala" },
      { name: "Himachal Pradesh", route: "/package/communityHimachalPradesh" },
      { name: "Sikkim", route: "/package/communitySikkim" },
    ],
    // "Corporate Retreats": [
    //   { name: "Spiti Valley Group trips", route: "/package/spitiValley" },
    //   // Add more items with their respective routes
    // ],
  };
  const MobiledropdownItems = {
    "Global Vacation Packages": [
      { name: "globalVacation", route: "/package/globalPackage" },
    ],
    "India Trip Bundles": [
      { name: "indianPackage", route: "/package/indianPackage" },
    ],
    "Bike Trips": [{ name: "bikeTrips", route: "/package/bikeTrips" }],
    "Honeymoon Packages": [
      { name: "honeymoonPackage", route: "/package/honeymoonPackage" },
    ],
    "Community Trips": [
      {
        name: "communityTrips",
        route: "/package/communityPackage",
      },
    ],
    // "Corporate Retreats": [
    //   { name: "Spiti Valley Group trips", route: "/package/spitiValley" },
    //   // Add more items with their respective routes
    // ],
  };

  const whatsappNumber = "+918076256147"; // WhatsApp number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <>
      <header className="bg-white text-gray-700 shadow-lg body-font">
        <div className="container  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/"
          >
            <img
              className="transform w-16 rounded-full border border-gray-200 " // Adjust scale as needed
              src="/images/easeawaylogo.jpeg"
              alt="Easeaway Logo"
            />
            <h3 className="ml-5 font-bold text-xl">Easeaway Travel</h3>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/"
              className="mr-5 text-gray-900 hover:text-green-700 transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              to="/about"
              className="mr-5 text-gray-900 hover:text-green-700 transition-colors duration-300 relative group"
            >
              About Us
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              to="/packages"
              className="mr-5 text-gray-900 hover:text-green-700 transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              to="/corporateTours"
              className="mr-5 text-gray-900 hover:text-green-700 transition-colors duration-300 relative group"
            >
              Corporate Tours
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </nav>
          <div className="flex items-center">
            <a
              href="https://wa.me/918076256147"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-2xl mr-5 hover:text-green-700 transition-colors duration-300"
            >
              <FontAwesomeIcon
                className="w-8 h-8"
                onClick={handleWhatsAppClick}
                icon={faWhatsapp}
              />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center bg-green-700 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-white text-lg transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +91 8076256147
            </Link>
          </div>
        </div>
      </header>

      <header className="text-gray-400 bg-gradient-to-r bg-gray-900 body-font z-20 relative">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex justify-between w-full md:w-auto">
            <div className="md:hidden">
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faTimes : faBars}
                className="text-white text-3xl cursor-pointer"
                onClick={toggleMobileMenu}
              />
            </div>
          </div>

          <nav className="hidden md:flex md:ml-auto md:mr-auto text-sm items-center text-white justify-evenly">
            {Object.keys(dropdownItems).map((menu) => (
              <div
                key={menu}
                className="relative mr-6 group"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="hover:text-green-400 cursor-pointer transition-colors duration-300 ease-in-out">
                  {menu}
                </div>
                {dropdown === menu && (
                  <div
                    className="absolute bg-white text-black  rounded-lg shadow-lg  z-30"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul className="text-black">
                      {dropdownItems[menu].map((item, index) => (
                        <li
                          key={index}
                          className="px-6 py-3 hover:bg-green-500 transition-colors duration-300 ease-in-out"
                        >
                          <Link
                            to={item.route}
                            className="block w-full  text-black "
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 flex flex-col items-center justify-center z-50 md:hidden">
              <div
                className="absolute top-5 right-5 text-3xl text-white cursor-pointer"
                onClick={toggleMobileMenu}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <nav className="flex flex-col items-center text-lg text-white">
                {Object.keys(MobiledropdownItems).map((menu) => (
                  <div key={menu} className="mb-5 text-center">
                    <Link
                      to={MobiledropdownItems[menu][0].route} // Navigate to the first item in the menu
                      className="hover:text-green-400 cursor-pointer transition-colors duration-300 ease-in-out"
                      onClick={toggleMobileMenu} // Close the menu when an option is clicked
                    >
                      {menu}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          )}
          {/* WhatsApp Icon for Small Screens */}
          {/* <a
              href="https://wa.me/919899471084"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg z-50 text-white text-3xl flex items-center justify-center md:hidden"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a> */}
        </div>
      </header>
    </>
  );
}
