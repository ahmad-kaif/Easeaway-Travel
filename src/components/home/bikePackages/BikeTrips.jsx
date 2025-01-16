import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BikeTrips = () => {
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

  const bikeDestination = [
    {
      name: `Leh-Ladakh`,
      name1: "LehLadakh",
      image: "/images/bikeTrip.jpg",
      price: "Starting price - 50k",
    },
    {
      name: "Manali-Tsomoriri-Leh-Srinagar",
      name1: "manaliTsomoririLehSrinagar",
      image: "/images/bike1.jpg",
      price: "Starting price - 60k",
    },
    {
      name: "Srinagar-Leh-Tso Moriri-Manali",
      name1: "srinagarLehTsoMoririManali",
      image: "/images/bike2.jpg",
      price: "Starting price - 65k",
    },
    {
      name: "Leh to Leh with Umling La",
      name1: "lehToLehUmlingLa",
      image: "/images/bike3.jpg",
      price: "Starting price - 55k",
    },
    // {
    //   name: "Spiti Valley",
    //   name1: "spitiValley",
    //   image: "/images/spiti.jpg",
    //   price: "Starting price - 40k",
    // },
    {
      name: "Spiti Valley Group Trip",
      name1: "spitiValleyGroupTrip",
      image: "/images/bike4.jpg",
      price: "Starting price - 45k",
    },
    {
      name: "Winter Spiti",
      name1: "winterSpiti",
      image: "/images/bike5.jpg",
      price: "Starting price - 50k",
    },
  ];
  return (
    <>
      <section className="text-white body-font bg-gray-700">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-green-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-extrabold title-font text-5xl mb-2 sm:mb-0">
                Bike Trips
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-white sm:pl-10 pl-0">
                Discover exciting bike trips that offer thrilling experiences
                across diverse terrains.
              </p>
            </div>
          </div>
          <Slider {...settings}>
            {bikeDestination.map((destination, index) => (
              <div key={index} className="p-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt={destination.name}
                    className="object-cover object-center h-full w-full"
                    src={`${destination.image}`}
                  />
                </div>
                <h2 className="text-2xl font-medium title-font text-white mt-2 text-center">
                  {destination.name}
                </h2>
                {/* <p className="text-base leading-relaxed ">
                  {destination.price}
                </p> */}
                <Link
                  to={`/package/${destination.name1}`}
                  className="text-green-600 inline-flex items-center mt-3 justify-center mx-auto block"
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
  );
};

export default BikeTrips;
