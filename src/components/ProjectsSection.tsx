import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  links: { github: boolean;};
  githubUrl?: string;
  media?: string[]; // aggiunto
}

const projects: Project[] = [
  {
    id: 'connectly',
    title: 'Connectly',
    description: 'Applicazione di messaggistica istantanea che consente agli utenti di comunicare in tempo reale tramite messaggi di testo, condivisione di file e chiamate vocali/video. Realizzata con React, CSS, Typescript, Node.js e Socket.io per la comunicazione in tempo reale.',
    image: '/connectly/connectly.png',
    links: { github: true },
    githubUrl: 'https://github.com/eleonorab99/Connectly',
    media: ['/connectly/connectly.png','/connectly/connectly-1.png', '/connectly/connectly-2.png'] // aggiunto

  },
  {
    id: 'autofficina',
    title: 'Autofficina',
    description: 'Applcazione web per la gestione di un\'autofficina, che consente di richiedere preventivi, prenotare appuntamenti, conoscere i servizi offerti e visualizzare le recensioni dei clienti. Realizzata con React, TypeScript e Tailwind CSS per un\'interfaccia utente reattiva e intuitiva.',
    image: '/autofficina/autofficina.png',
    links: { github: true},
    githubUrl: 'https://github.com/eleonorab99/AppOfficina',
    media: ['autofficina/autofficina.png','/autofficina/autofficina-1.png', '/autofficina/autofficina-2.png', '/autofficina/autofficina-3.png'] // aggiunto
  }
];

const ProjectsSection: React.FC = () => (
  <section className="py-20 px-8 lg:px-20 bg-gray-100">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-light mb-4 text-gray-800">
          My Works
        </h2>
        <p className="text-xl text-gray-600">
          A collection of projects I've worked on.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;