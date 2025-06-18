import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  tech,
  period,
  image,
  description,
  githubLink,
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
    backdrop-blur-sm bg-white/10"
    >
      <div
        className="bg-gray-200 rounded-lg shadow-4xl w-full max-w-7xl
       p-12 flex flex-col md:flex-row relative"
      >
        <button
          className="absolute top-6 right-6 text-black text-4xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={image}
          alt={title}
          className=" md:w-[100%] h-[350px] object-cover rounded-md mb-6 md:mb-0 md:mr-8"
        />
        <div className="flex flex-col justify-center text-left">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl font-bold">{title}</h2>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm 
                font-medium transition"
              >
                GitHub
              </a>
            )}
          </div>

          <p className="text-lg text-black font-bold mb-2">
            Tech Stack : {tech}
          </p>
          <p className="text-lg text-gray-600 font-bold mb-4">{period}</p>
          <ul className="list-disc pl-5 space-y-3 text-gray-800 text-lg font-bold">
            {description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
