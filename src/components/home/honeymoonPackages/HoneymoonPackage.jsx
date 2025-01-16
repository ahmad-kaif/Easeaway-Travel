import React from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HoneymoonPackage = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const honeymoonDestination = [
        { name: "Bali", name1: "baliHoneymoon", image: "/images/bali.jpg", price: "Starting price - 80k" },
        { name: "Vietnam",name1: "vietnamHoneymoon", image: "/images/vietnam.jpg", price: "Starting price - 70k" },
        {
          name: "Singapore",
          name1: "singaporeHoneymoon",
          image: "/images/singapore.jpg",
          price: "Starting price - 100k",
        },
        { name: "Thailand", name1: "thailandHoneymoon", image: "/images/thailand.jpg", price: "Starting price - 90k" },
        { name: "Kashmir", name1: "kashmirHoneymoon", image: "/images/kashmir.jpg", price: "Starting price - 60k" },
        { name: "Maldives", name1: "maldivesHoneymoon", image: "/images/maldives.jpg", price: "Starting price - 140k" },
        { name: "Andaman", name1: "andamanHoneymoon", image: "/images/andaman.jpg", price: "Starting price - 80k" },
        { name: "Kerala", name1: "keralaHoneymoon", image: "/images/kerala.jpg", price: "Starting price - 70k" },
      ];
  return (
    <>
    <section className="text-black  body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-green-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-black font-extrabold title-font text-5xl mb-2 sm:mb-0">
                Honeymoon Packages
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-black sm:pl-10 pl-0">
                Discover unforgettable romantic getaways with our exclusive honeymoon packages.
              </p>
            </div>
          </div>
          <Slider {...settings}>
            {honeymoonDestination.map((destination, index) => (
              <div key={index} className="p-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt={destination.name}
                    className="object-cover object-center h-full w-full"
                    src={`${destination.image}`}
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-black mt-2 ml-1">
                  {destination.name}
                </h2>
                {/* <p className="text-black leading-relaxed ml-1">
                  {destination.price}
                </p> */}
                <Link
                  to={`/package/${destination.name1}`}
                  className="text-green-600 inline-flex items-center mt-3 ml-1"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      
    </>
  )
}

export default HoneymoonPackage
