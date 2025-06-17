import React from 'react'
import {
  SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiExpress, SiNextdotjs, SiTypescript, SiPrisma, SiMongodb, SiGit, SiDocker, SiPostman, SiPostgresql
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills = [
    { name: "Java", icon: <DiJava />, level: 80 },
    { name: "HTML", icon: <SiHtml5 />, level: 90 },
    { name: "CSS", icon: <SiCss3 />, level: 90 },
    { name: "JavaScript", icon: <SiJavascript />, level: 90 },
    { name: "React", icon: <SiReact />, level: 85 },
    { name: "Express.js", icon: <SiExpress />, level: 80 },
    { name: "Node.js", icon: <SiNodedotjs />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb />, level: 75 },
    { name: "TypeScript", icon: <SiTypescript />, level: 70 },
    { name: "Next.js", icon: <SiNextdotjs />, level: 75 },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 70 },
    { name: "Prisma", icon: <SiPrisma />, level: 70 },
    { name: "Git", icon: <SiGit />, level: 80 },
    { name: "Docker", icon: <SiDocker />, level: 60 },
    { name: "Postman", icon: <SiPostman />, level: 75 }
];

function Skills() {
  return (
    <div className="min-h-screen px-8 py-32 bg-while">
    <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">My Skills</h2>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-white rounded-xl shadow-lg p-5 flex
          items-center space-x-4">
            <div className="text-4xl text-black">{skill.icon}</div>
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-black">{skill.name}</span>
                <span className="text-sm text-black">{skill.level}%</span>
              </div>
              <div className="w-full bg-white shadow-lg rounded-full h-3">
                <div
                  className="bg-gray-600 h-3 shadow-lg rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;