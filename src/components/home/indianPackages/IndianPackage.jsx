import React from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndianPackage = () => {
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
    
      const indianDestination = [
        {
          name: "Ladakh",
          image: "/images/ladakh.jpg",
          price: "Starting price - 150k",
          link: "/package/ladakh",
        },
        {
          name: "Kashmir",
          image: "/images/kashmir.jpg",
          price: "Starting price - 140k",
          link: "/package/kashmir",
        },
        {
          name: "Andaman",
          image: "/images/andaman.jpg",
          price: "Starting price - 160k",
          link: "/package/andaman-nicobar",
        },
        {
          name: "Meghalaya",
          image: "/images/meghalya.jpg",
          price: "Starting price - 120k",
          link: "/package/meghalaya",
        },
        {
          name: "Spiti",
          image: "/images/spiti.jpg",
          price: "Starting price - 130k",
          link: "/package/spiti",
        },
        {
          name: "Kerala",
          image: "/images/kerala.jpg",
          price: "Starting price - 110k",
          link: "/package/kerala",
        },
        {
          name: "Himachal",
          image: "/images/himachalPradesh.jpg",
          price: "Starting price - 125k",
          link: "/package/himachal-pradesh",
        },
        {
          name: "Sikkim",
          image: "/images/sikkim.jpg",
          price: "Starting price - 135k",
          link: "/package/sikkim",
        },
        {
          name: "Uttarakhand",
          image: "/images/uttarakhand.jpg",
          price: "Starting price - 115k",
          link: "/package/uttarakhand",
        },
        {
          name: "Rajasthan",
          image: "/images/rajasthan.jpg",
          price: "Starting price - 140k",
          link: "/package/rajasthan",
        },
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
                Indian Packages
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-black sm:pl-10 pl-0">
                Explore breathtaking destinations around the India with our
                exclusive vacation packages.
              </p>
            </div>
          </div>
          <Slider {...settings}>
            {indianDestination.map((destination, index) => (
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
                  to={`/package/${destination.name.toLowerCase()}`}
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

export default IndianPackage
