import React from "react";

const skills = [
  { name: "HTML5", img: "/assets/html5.svg" },
  { name: "CSS3", img: "/assets/css3.svg" },
  { name: "JavaScript", img: "/assets/javascript.svg" },
  { name: "TypeScript", img: "/assets/typescript.svg" },
  { name: "React", img: "/assets/react.svg" },
  { name: "Node.js", img: "/assets/nodejs.svg" },
  { name: "Tailwind", img: "/assets/tailwindcss.svg" },
  { name: "Angular", img: "/assets/angular.svg" },
  { name: "VS Code", img: "/assets/vscode.svg" },
  { name: "GitHub", img: "/assets/github.svg" },
  { name: "DBeaver", img: "/assets/dbeaver.svg" },
  { name: "MySQL", img: "/assets/mysql.svg" },
  { name: "Figma", img: "/assets/figma.svg" },
];

const SkillsGallery: React.FC = () => (
  <section className="py-5 bg-gray-100">
    <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
      Linguaggi e Programmi che conosco e utilizzo
    </h2>
    <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
      {/* Spacer a sinistra */}
      <div className="min-w-[100px] shrink-0" />
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center min-w-[100px] bg-white rounded-xl shadow-md p-4 hover:scale-105 transition-transform"
        >
          <img
            src={skill.img}
            alt={skill.name}
            className="w-12 h-12 object-contain mb-2"
          />
          <span className="text-sm text-gray-700">{skill.name}</span>
        </div>
      ))}
      {/* Spacer a destra */}
      <div className="min-w-[100px] shrink-0" />
    </div>
  </section>
);

export default SkillsGallery;
