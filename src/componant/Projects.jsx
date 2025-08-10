import ProjectCard from "./ProjectCard"; 
import { useEffect, useState } from "react";
import { uploadToCloudinary } from "../utils/cloudinary";


const initialProjects = [
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
    githubLink: "https://github.com/AbhishekRajput1601/BinkeyIt",
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
    githubLink: "https://github.com/AbhishekRajput1601/Ai-Interview-Mocker",
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
    githubLink: "https://github.com/AbhishekRajput1601/Ed-Tech",
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
    githubLink: "https://github.com/AbhishekRajput1601/JonNest",
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
    githubLink: "https://github.com/AbhishekRajput1601/AiChatBot",
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


export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    async function uploadImages() {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          // Only upload if not already a Cloudinary URL
          if (project.image && !project.image.startsWith('https://res.cloudinary.com')) {
            try {
              const imgModule = await import(`../assets/${project.image.split('/').pop()}`);
              const file = await fetch(imgModule.default).then(r => r.blob());
              const url = await uploadToCloudinary(file);
              return { ...project, image: url };
            } catch (e) {
              return project;
            }
          }
          return project;
        })
      );
      setProjects(updatedProjects);
    }
    uploadImages();
    // eslint-disable-next-line
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.tech}</p>
              <p className="text-gray-500 mb-2">{project.period}</p>
              <ul className="list-disc pl-5 mb-4">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {selectedProject && (
          <ProjectCard
            {...selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
