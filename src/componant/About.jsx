import React from "react";

function About() {
  return (
    <div className="min-h-screen pt-34 px-6 md:px-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>

      <div
        className="flex flex-col md:flex-row items-center justify-between 
      max-w-6xl mx-auto gap-10"
      >
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-justify">
          <p className="text-xl font-medium leading-7 mb-2">
            As a passionate and driven individual, I am eager to transition into
            a career as a software development engineer. My love for coding and
            web development fuels my continuous learning and growth in the tech
            field. With a strong foundation in programming languages and a keen
            interest in creating innovative web solutions, I am committed to
            developing my skills and contributing to impactful projects.
            <br />
            <br />I am actively seeking opportunities to collaborate with
            professionals and organizations where I can apply my knowledge and
            grow as a software engineer. Let's connect and explore how we can
            work together to build the future of technology.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className=" flex justify-center">
          <img
            src="src/assets/gibli-Photoroom.png" // Replace with your actual image path
            alt="Abhishek Rajput"
            className="w-120 h-120 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
