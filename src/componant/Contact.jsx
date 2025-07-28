import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Your EmailJS Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your Template ID
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className="pt-32 mt-18 px-6 bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-16 text-center text-gray-900">
        Get in Touch
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="flex items-start space-x-5 border-b pb-6">
            <FaEnvelope className="text-3xl text-gray-700 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-600 font-bold">
                {" "}
                abhirajputofficial2000@gmail.com{" "}
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-5 border-b pb-6">
            <FaPhone className="text-3xl text-gray-700 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600 font-bold">+91 6260354447 </p>{" "}
              {/* Replace with your actual number */}
            </div>
          </div>

          <div className="flex items-start space-x-5 border-b pb-6">
            <FaMapMarkerAlt className="text-3xl text-gray-700 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-600 font-bold">Indore, India</p>
            </div>
          </div>
          <div className="flex items-start space-x-5">
            <FaLinkedin className="text-3xl text-gray-700 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/abhishek-rajput-706321287/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline font-bold"
              >
              Click here to connect on LinkedIn 
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-100 p-10 shadow-md text-black space-y-6 rounded-md "
        >
          <div>
            <label className="block text-md font-bold mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full border border-black px-4 py-3 font-medium rounded-md 
              focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <div>
            <label className="block text-md font-bold mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full border border-black px-4 py-3 font-medium rounded-md 
              focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <div>
            <label className="block text-md font-bold mb-1">Message</label>
            <textarea
              name="message"
              required
              className="w-full border border-black px-4 py-3 font-medium rounded-md 
              h-32 resize-none focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          {/* Add a hidden field for time */}
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md 
            font-semibold hover:bg-gray-900 transition"
          >
            Send Message
          </button>

          {isSent && (
            <p className="text-green-600 font-medium text-center">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
