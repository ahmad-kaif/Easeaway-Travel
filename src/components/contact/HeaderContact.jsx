import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        query: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_kf7u93v', // Replace with your service ID
            'template_yr4u8wf', // Replace with your template ID
            formData,
            'vE3nTqOTWtKTW_dnI' // Replace with your user ID
        ).then((result) => {
            toast.success('Your message has been sent successfully!');
            setFormData({
                from_name: '',
                email: '',
                query: '',
                phone: ''
            });
        }, (error) => {
            console.error('There was an error sending the email', error);
            toast.error('Failed to send message.');
        });
    };

    return (
        <>
        <h1 className="text-4xl text-white flex justify-center font-bold mb-2">Plan your next trip!</h1>
           <h2 className="text-2xl text-yellow-500 flex justify-center font-bold ">We will give you a call</h2>
           <div className=" p-8 rounded-lg shadow-lg w-full max-w-4xl">
                   <form onSubmit={handleSubmit} className="flex flex-col justify-center">
                       <div className="flex flex-col mb-4">
                           <input
                               type="text"
                               name="from_name"
                               placeholder="Full Name"
                               value={formData.from_name}
                               onChange={handleChange}
                               className="w-full py-3 px-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-orange-500 focus:outline-none"
                           />
                       </div>
                       <div className="flex flex-col mb-4">
                           <input
                               type="text"
                               name="phone"
                               placeholder="Enter your 10 digit number"
                               value={formData.phone}
                               onChange={handleChange}
                               className="w-full py-3 px-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-orange-500 focus:outline-none"
                           />
                       </div>
                       <div className="flex flex-col mb-4">
                           <input
                               type="email"
                               name="email"
                               placeholder="Email"
                               value={formData.email}
                               onChange={handleChange}
                               className="w-full py-3 px-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-orange-500 focus:outline-none"
                           />
                       </div>
                       <div className="flex flex-col mb-4">
                           <textarea
                               name="query"
                               placeholder="Any Message"
                               value={formData.query}
                               onChange={handleChange}
                               className="w-full py-3 px-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-orange-500 focus:outline-none"
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
        </>
        
    );
}