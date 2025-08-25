import React from 'react'
import {
  SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiExpress, SiNextdotjs, SiTypescript, SiPrisma, SiMongodb, SiGit, SiDocker, SiPostman, SiPostgresql
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills = [
  { name: "Java", icon: <DiJava /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Postman", icon: <SiPostman /> }
];

function Skills() {
  return (
    <section className="min-h-screen px-6 py-45 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 text-gray-800">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-9">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="text-3xl mb-2 text-black">{skill.icon}</div>
              <h3 className="text-sm font-medium text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
