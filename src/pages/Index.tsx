
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const sections = ['home', 'about', 'projects', 'achievements', 'blog', 'contact'];
      const currentIndex = sections.indexOf(activeSection);
      
      if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        setActiveSection(sections[currentIndex + 1]);
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        setActiveSection(sections[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="md:ml-64 transition-all duration-300">
        <div className="min-h-screen">
          {renderSection()}
        </div>
      </main>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default Index;
