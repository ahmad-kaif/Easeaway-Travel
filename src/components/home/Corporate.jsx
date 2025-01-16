import React from "react";
import Contact from "../contact/Contact";

const Corporate = () => {
  return (
    <>
      <section className="relative w-full h-96 overflow-hidden z-0">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 filter blur-sm"
          src="/vids/corporate.mp4"
          autoPlay
          loop
          muted
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-center z-10">
          <h1 className="text-white text-5xl font-bold mb-4">
            Ditch the Boring Business Trips!
          </h1>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Ditch The Boring
              <br class="hidden lg:inline-block" />
              Business Trip
            </h1>
            <p class="mb-8 leading-relaxed">
              Give your Corporate Trips a much-needed change and add a dash of
              adventure with WanderOn’s brand-new MICE Tourism. Say bye to those
              boring boardroom gatherings and say hello to an era where business
              meets adventure. Our MICE tour packages are designed to foster
              team bonding, ignite creativity, and dazzle your senses in the
              most amazing way. With WanderOn, it's not just business as usual;
              it's business mixed with an extraordinary dash of excitement!
              Let's turn those office outings into legendary tales of thrill and
              connections. Welcome to the new era of corporate travel!
            </p>
            <div class="flex justify-center">
              {/* <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/images/corporate.jpg"
            />
          </div>
        </div>
      </section>
      <hr />

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap  w-full mb-20 flex-col items-start text-center">
            <h1 class="sm:text-3xl text-6xl font-bold title-font mb-2 text-gray-900">
              Our Superpower Zone
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <img
                    src="https://wanderon.in/assets/svg/s-1.png"
                    alt="Team Outing"
                  />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Team Outings
                </h2>
                <p class="leading-relaxed text-base">
                  Bring your work crew together for a day of bonding and
                  enjoyment outside the office.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <img
                    src="https://wanderon.in/assets/svg/s2.png"
                    alt="Corporate Trips"
                  />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Corporate Trips
                </h2>
                <p class="leading-relaxed text-base">
                  Elevate team spirit and performance with incentive trips that
                  turn dreams into reality.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <img
                    src="https://wanderon.in/assets/svg/s-3.png"
                    alt="Incentive Tour"
                  />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Incentive Tour
                </h2>
                <p class="leading-relaxed text-base">
                  Bring your work crew together for a day of bonding and
                  enjoyment outside the office.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <img
                    src="https://wanderon.in/assets/svg/s-4.png"
                    alt="worcations"
                  />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Workcations
                </h2>
                <p class="leading-relaxed text-base">
                  Why work in the same old way when you can do the same in your
                  favorite destinations with our Workations?
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <img
                    src="https://wanderon.in/assets/svg/s-5.png"
                    alt="Conferences"
                  />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Conferences
                </h2>
                <p class="leading-relaxed text-base">
                  Transform ordinary conferences into extraordinary journeys
                  combined with innovation, networking, and adventure.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <img
                    src="https://wanderon.in/assets/svg/s-6.png"
                    alt="Exhibition"
                  />
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  Exhibition
                </h2>
                <p class="leading-relaxed text-base">
                  Discover, connect, and inspire, elevate your brand at global
                  exhibitions.Transform ordinary Exhibition into extraordinary
                </p>
              </div>
            </div>
          </div>
          {/* <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
      <hr />

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-5xl font-bold text-center title-font text-gray-900 mb-4 items-start">
            Beyond Ordinary?
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            We're firm believers that business trips should be anything but ordinary.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                End to End Content
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                No Visa Worries
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                Dreamy Stays & Flights
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                Local Buddies
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Travel Magic Makers</span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">
                Picture-Perfect Moments
                </span>
              </div>
            </div>
          </div>
          {/* <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
      <Contact/>
    </>
  );
};

export default Corporate;
