import ProjectCard from "./ProjectCard"; 
import { useEffect, useState } from "react";


const projects = [
  {
    title: "Quick-Mart",
    tech: "React, Node.js, Express.js, MongoDB",
    period: "Feb 2025 – Jun 2025",
    description: [
      "scalable e-Commerce central platform for groceries and other Products.",
      "Designed a user-friendly interface client and seller.",
      "Implemented secure payment gateway integration.",
      "Developed a robust backend with RESTful APIs for product management.",
    ],
    image: "src/assets/mart.png",
    githubLink: "https://github.com/AbhishekRajput1601/resume",
  },
  {
    title: "InterviewME",
    tech: "Next.js, ClerkAuth, Drizzle ORM, PostgreSQL",
    period: "Dec 2024 – Feb 2025",
    description: [
      "Developed a smart interview preparation platform with AI integration.",
      "Integrated Google Gemini API for real-time AI-driven interview sessions.",
      "Implemented user authentication and role-based access control using ClerkAuth.",
      "Designed a responsive UI with Next.js and Tailwind CSS.",
    ],
    image: "src/assets/interview.png",
    githubLink: "https://github.com/AbhishekRajput1601/resume",
  },
  {
    title: "Book-Hive",
    tech: "React, Tailwind CSS, Spring Boot, MySQL",
    period: "Oct 2024 – Nov 2024",
    description: [
      "Built a library management system for book search, borrowing, and returning.",
      "Managed inventory efficiently using backend RestFull APIs.",
      "Implemented user authentication and role-based access control.",
    ],
    image: "src/assets/lib.png",
    githubLink: "https://github.com/AbhishekRajput1601/resume",
  },
  {
    title: "JobNest",
    tech: "MERN Stack (MongoDB, Express.js, React, Node.js)",
    period: "Aug 2024 – Sep 2024",
    description: [
      "job search portal with filtering, resume upload, and employer dashboard.",
      "Implemented authentication and applied RESTful architecture principles.",
      "Designed a responsive UI with React and Tailwind CSS.",
    ],
    image: "src/assets/job.png",
    githubLink: "https://github.com/AbhishekRajput1601/resume",
  },
  {
    title: "ChatWise",
    tech: "MERN Stack, Nodemailer, Socket.IO",
    period: "Jun 2024 – Jul 2024",
    description: [
      "real-time chat application with room-based messaging using Socket.IO.",
      "Integrated Google Gemini API for AI-driven chat responses.",
      "Designed a responsive UI with React and Tailwind CSS.",
    ],
    image: "src/assets/chatwise.png",
    githubLink: "https://github.com/AbhishekRajput1601/resume",
  },
  {
    title: "My Portfolio",
    tech: "React, Tailwind CSS",
    period: "May 2024",
    description: [
      "Designed a personal portfolio to showcase my skills and projects.",  
      " modern UI with smooth scrolling, and contact form integration.",
      "Utilized React for dynamic content rendering and Tailwind CSS for styling."
    ],
    image: "src/assets/portfolio.png",
    githubLink: "https://github.com/AbhishekRajput1601/resume",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
  if (selectedProject) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  // Clean up when component unmounts
  return () => {
    document.body.classList.remove("overflow-hidden");
  };
}, [selectedProject]);


  return (
    <div className="pt-32 px-6 md:px-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-20 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-white rounded-lg shadow-lg 
            overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {project.title}
              </h2>
              <p className="text-md text-black mb-2">{project.tech}</p>
              <p className="text-md font-bold text-gray-500 mb-4">
                {project.period}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal ProjectCard */}
      {selectedProject && (
        <ProjectCard
          {...selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Projects;
