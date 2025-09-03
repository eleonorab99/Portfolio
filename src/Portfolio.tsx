import React from "react";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import SkillsGallery from "./components/SkillsGallery";

const Portfolio: React.FC = () => (
  <div className="min-h-screen bg-gray-900">
    <HeroSection />
    <ProjectsSection />
    <SkillsGallery />
    <Footer />
  </div>
);

export default Portfolio;