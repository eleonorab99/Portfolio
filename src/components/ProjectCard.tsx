import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  links: {
    github?: boolean;
  };
  githubUrl?: string;
  media?: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);

  const media =
    project.media && project.media.length > 0 ? project.media : [project.image];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMediaIndex((i) => (i === 0 ? media.length - 1 : i - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMediaIndex((i) => (i === media.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        {/* Project image */}
        <div
          className="h-48 bg-gray-200 relative overflow-hidden cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-6xl font-light text-gray-400">
                {project.title.charAt(0)}
              </div>
            </div>
          )}
          {/* Mock browser window */}
          <div className="absolute top-4 left-4 right-4 h-6 bg-white rounded-t-lg shadow-sm z-10 pointer-events-none">
            <div className="flex items-center h-full px-3 space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="flex-1 bg-gray-100 rounded ml-4 h-2"></div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-light mb-4 text-gray-800">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm">
            {project.description}
          </p>
          <div className="flex space-x-3">
            {project.links.github && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      {/* Modal per galleria immagini/video */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div className="relative flex flex-col items-center">
            {/* Pulsante chiudi */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            {/* Media */}
            <div className="flex items-center">
              {media.length > 1 && (
                <button
                  className="text-white text-3xl px-4 select-none"
                  onClick={handlePrev}
                >
                  &#8592;
                </button>
              )}
              <div className="max-w-[80vw] max-h-[80vh] flex items-center justify-center">
                {media[mediaIndex].endsWith(".mp4") ? (
                  <video
                    src={media[mediaIndex]}
                    controls
                    className="max-w-full max-h-[80vh] rounded-xl shadow-2xl"
                  />
                ) : (
                  <img
                    src={media[mediaIndex]}
                    alt={project.title}
                    className="max-w-full max-h-[80vh] rounded-xl shadow-2xl"
                  />
                )}
              </div>
              {media.length > 1 && (
                <button
                  className="text-white text-3xl px-4 select-none"
                  onClick={handleNext}
                >
                  &#8594;
                </button>
              )}
            </div>
            {/* Indicatori */}
            {media.length > 1 && (
              <div className="flex gap-2 mt-4">
                {media.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${
                      idx === mediaIndex ? "bg-white" : "bg-gray-500"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setMediaIndex(idx);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
