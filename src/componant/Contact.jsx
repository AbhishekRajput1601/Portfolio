import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
    <section className="px-6 py-32 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-9 text-left text-base ml-8 mt-12">
          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-2xl text-gray-700 mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600 font-medium">abhirajputofficial2000@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaPhone className="text-2xl text-gray-700 mt-1" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600 font-medium">+91 6260354447</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-2xl text-gray-700 mt-1" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600 font-medium">Indore, India</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaLinkedin className="text-2xl text-gray-700 mt-1" />
            <div>
              <h3 className="font-semibold">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/abhishek-rajput-706321287/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline font-medium"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 shadow-lg text-base text-black space-y-5 rounded-lg"
        >
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              name="message"
              required
              className="w-full border px-4 py-3 rounded-md h-28 resize-none focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md font-medium hover:bg-gray-900 transition"
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
    </section>
  );
}

export default Contact;
