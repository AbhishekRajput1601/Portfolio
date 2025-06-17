import React from "react";

const projects = [
  {
    title: "Quick-Mart",
    tech: "React, Node.js, Express.js, MongoDB",
    period: "Feb 2025 – Jun 2025",
    description: [
      "scalable e-Commerce central platform for groceries and other Products.",
      "Designed a user-friendly interface client and seller.",
    ],
    image: "src/assets/mart.png",
  },
  {
    title: "InterviewME",
    tech: "Next.js, ClerkAuth, Drizzle ORM, PostgreSQL",
    period: "Dec 2024 – Feb 2025",
    description: [
      "Developed a smart interview preparation platform with AI integration.",
      "Integrated Google Gemini API for real-time AI-driven interview sessions.",
    ],
    image: "src/assets/interview.png",
  },
  {
    title: "Book-Hive",
    tech: "React, Tailwind CSS, Spring Boot, MySQL",
    period: "Oct 2024 – Nov 2024",
    description: [
      "Built a library management system for book search, borrowing, and returning.",
      "Managed inventory efficiently using backend RestFull APIs.",
    ],
    image: "src/assets/lib.png",
  },
  {
    title: "JobNest",
    tech: "MERN Stack (MongoDB, Express.js, React, Node.js)",
    period: "Aug 2024 – Sep 2024",
    description: [
      "job search portal with filtering, resume upload, and employer dashboard.",
      "Implemented authentication and applied RESTful architecture principles.",
    ],
    image: "src/assets/job.png",
  },
  {
    title: "ChatWise",
    tech: "MERN Stack, Nodemailer, Socket.IO",
    period: "Jun 2024 – Jul 2024",
    description: [
      "real-time chat application with room-based messaging using Socket.IO.",
      "Integrated Google Gemini API for AI-driven chat responses.",
    ],
    image: "src/assets/chatwise.png",
  },
  {
    title: "My Portfolio",
    tech: "React, Tailwind CSS",
    period: "May 2024",
    description: [
      "Designed a personal portfolio to showcase my skills and projects.",
      " modern UI with smooth scrolling, and contact form integration.",
    ],
    image: "src/assets/portfolio.png",
  },
];

function Projects() {
  return (
    <div className="pt-32 px-6 md:px-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-20 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden 
            hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-82 object-fill"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {project.title}
              </h2>
              <p className="text-md text-black mb-2">{project.tech}</p>
              <p className="text-md font-bold text-gray-500  mb-4">
                {project.period}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
