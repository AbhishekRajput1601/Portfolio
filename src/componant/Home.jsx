import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <div
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-4 py-10"
      >
        {/* Left Side */}
        <div className="text-left ml-10 md:ml-60 mt-44 max-w-xl">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            I'm <span className="text-gray-700">Abhishek Rajput</span>
            <br />I am a{" "}
            <span className="text-gray-700">Full Stack Developer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-900 mb-10 font-medium leading-relaxed">
            I build modern, responsive web applications using technologies like
            MERN Stack. I love solving real-world problems with clean code and
            scalable architecture.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-8 mb-6 text-3xl text-gray-700">
            <a href="https://www.linkedin.com/in/abhishek-rajput-706321287/" 
            target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-gray-800" />
            </a>
            <a href="https://github.com/AbhishekRajput1601" 
            target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-black" />
            </a>
            <a href="https://x.com/_abhixdev" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-gray-500" />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="public/mernResume.pdf"
            download
            className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg 
            shadow hover:bg-gray-800"
          >
            Download Resume
          </a>
        </div>

        {/* Right Side */}
        <div className="mt-16 mr-10 md:mr-40 flex justify-center">
          <img
            src="public/gibli-Photoroom.png"
            alt="Profile"
            className="w-120 h-120 object-cover"
          />
        </div>
      </div>

      {/* Sections */}
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
