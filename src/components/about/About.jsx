import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="/images/about.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                         What do we stand for and how did we reach to it?

                      </h2>
                      <p className="mt-6 text-gray-600">
                      At EaseAway Travel, we specialize in curating unforgettable travel experiences that cater to your unique needs and desires. Whether you're seeking a global vacation, an adventurous bike trip through India's most scenic routes, or a seamless corporate travel experience, we've got you covered. Our expertly crafted Indian trip bundles and community trips are designed to immerse you in the vibrant culture and stunning landscapes of India. With a focus on tailored stays and perfect journeys, we ensure that every aspect of your trip is meticulously planned, so you can focus on creating memories that last a lifetime.
                      </p>
                      <p className="mt-4 text-gray-600">
                          {/* Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia. */}
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
