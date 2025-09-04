import React, { useEffect, useState } from "react";
import LaptopIllustration from "./LaptopIllustration";
import AboutMe from "./AboutMe";

const HeroSection: React.FC = () => {
  const [showText, setShowText] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-between px-8 lg:px-20 bg-gradient-to-br from-[#03045e] via-[#00b4d8] to-purple-900 relative overflow-hidden">
            {/* Bottone About me */}
      {/* Bottone About me con animazione */}
      <button
        className="absolute top-6 right-6 bg-white text-gray-900 px-5 py-2 rounded-full shadow hover:bg-gray-200 transition-colors z-50 animate-bounce"
        onClick={() => setShowAbout(true)}
      >
        About me
      </button>
      {showAbout && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 overflow-y-auto"
          onClick={() => setShowAbout(false)}
        >
          <div className="min-h-screen py-8 flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <AboutMe />
              <button
                className="absolute top-8 right-8 text-2xl text-gray-500 hover:text-gray-900"
                onClick={() => setShowAbout(false)}
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`,
          }}
        ></div>
      </div>
      {/* Text content */}
      <div className="flex-1 z-10 relative">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            showText ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin mb-6 md:mb-8 text-white">
            Benvenuti.
          </h1>
          <div
            className={`transition-all duration-1000 ease-out delay-300 transform ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl leading-relaxed font-light">
              Il mio nome è Eleonora Baroni, e sono una front-end developer junior a Roma. Ho una particolare predisposizione per
              il frontend ma riesco a programmare anche parte del backend. Sono motivata ad applicare le mie conoscenze
              tecniche in un ambiente professionale per creare interfacce utente intuitive e responsive.
            </p>
          </div>
        </div>
      </div>
      {/* Laptop illustration */}
      <div className="flex-1 flex justify-center items-center z-10">
        <LaptopIllustration />
      </div>
    </section>
  );
};

export default HeroSection;