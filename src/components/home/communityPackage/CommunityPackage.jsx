import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommunityPackage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
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

      const communityPackage = [
        { name: "Spiti Expedition", name1:"communitySpitiValleyGroupTrips", image: "/images/community.jpg", price: "Starting price - 70k" },
        { name: "Meghalaya Exploration",name1:"communityMeghalayaGroupTour", image: "/images/meghalya.jpg", price: "Starting price - 80k" },
        { name: "Bali Group Tour", name1:"communityBaliGroupTour", image: "/images/bali.jpg", price: "Starting price - 75k" },
        { name: "Dubai Group Tour", name1:"communityDubaiGroupTour", image: "/images/dubai.jpg", price: "Starting price - 200k" },
        { name: "Thailand Group Tour", name1:"communityThailandGroupTour", image: "/images/thailand.jpg", price: "Starting price - 60k" },
        { name: "Andaman Group Tour", name1:"communityAndaman", image: "/images/andaman.jpg", price: "Starting price - 90k" },
        { name: "Rajasthan Group Tour", name1:"communityRajasthan", image: "/images/rajasthan.jpg", price: "Starting price - 150k" },
        { name: "Kerala Group Tour", name1:"communityKerala", image: "/images/kerala.jpg", price: "Starting price - 130k" },
        { name: "Himachal Group Tour", name1:"communityHimachalPradesh", image: "/images/srilanka.jpg", price: "Starting price - 85k" },
        { name: "Sikkim Group Tour", name1:"communitySikkim", image: "/images/maldives.jpg", price: "Starting price - 140k" },
      ];
  return (
    <>
      <section className="text-white bg-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-green-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-extrabold title-font text-5xl mb-2 sm:mb-0">
                Community Packages
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-white sm:pl-10 pl-0">
                Explore breathtaking destinations around the world with our
                exclusive Community packages.
              </p>
            </div>
          </div>
          <Slider {...settings}>
            {communityPackage.map((destination, index) => (
              <div key={index} className="p-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt={destination.name}
                    className="object-cover object-center h-full w-full"
                    src={`${destination.image}`}
                  />
                </div>
                <h2 className="text-3xl font-medium title-font text-white mt-2 ml-1">
                  {destination.name}
                </h2>
                {/* <p className="text-base leading-relaxed ml-1">
                  {destination.price}
                </p> */}
                <Link
                  to={`/package/${destination.name1}`}
                  className="text-green-600 inline-flex items-center mt-3 ml-1"
                >
                  See More
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
}

export default CommunityPackage
