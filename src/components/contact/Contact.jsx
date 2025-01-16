import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    phone: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4l1dr7d", // Replace with your service ID
        "template_i1j4neg", // Replace with your template ID
        formData,
        "ZSpeDQURcb5eTHi61" // Replace with your user ID(public key)
      )
      .then(
        (result) => {
          toast.success("Your message has been sent successfully!");
          setFormData({
            from_name: "",
            phone: "",
            email: "",
            query: "",
          });
        },
        (error) => {
          console.error("There was an error sending the email", error);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-[700px] text-white p-6">
        <img
          src="/images/map.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-sm"></div>

        <ToastContainer />
        <h1 className="hidden md:block text-3xl  font-bold mb-5 relative z-10">
          Easeaway Travel is always there for you!
        </h1>
        <div className=" bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-4xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl md:text-3xl font-extrabold tracking-tight">
                  Allow Us to Call You Back!
                </h2>
                <p className="text-lg  font-medium text-green-600 mt-2">
                  Plan your next Trip.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center text-gray-300 font-bold">
                  {/* Location, Phone, and Email Info */}
                  +91 8076256147
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center"
            >
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Full Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full py-3 px-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-green-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your 10 digit number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full py-3 px-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-green-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-3 px-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-green-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <textarea
                  name="query"
                  placeholder="Any Message"
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full py-3 px-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-green-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
