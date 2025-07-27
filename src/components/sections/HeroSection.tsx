
import React from 'react';
import mePic from './pic/me.jpeg';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl text-primary font-mono mb-2">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-4">
                SANJANA WG
              </h1>
              <h3 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Product Lead
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I am a Product Lead with proven expertise in driving end-to-end product strategy and execution in fast-paced startup environments. I demonstrate exceptional leadership capabilities by managing cross-functional teams and making critical product decisions with limited resources while maintaining focus on measurable business outcomes. My experience spans the complete product lifecycle from vision setting and roadmap planning to stakeholder management and successful product launches. I excel in data-driven decision making, leveraging analytics to optimize user experiences and drive growth metrics in high-uncertainty, rapidly evolving business contexts. I bring entrepreneurial thinking and agile execution skills that enable organizations to build innovative products while scaling efficiently and maintaining competitive advantage.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
            <a href="/sanjana_resume.pdf" download>
  <Button className="bg-primary hover:bg-primary/80 text-black font-semibold px-6 py-3 glow-blue">
    <Download className="mr-2 h-4 w-4" />
    Download CV
  </Button>
</a>

              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 py-3">
                View Projects
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-primary/30 p-2 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-6xl font-bold text-primary">
                <img src="/pic/me.jpeg" alt="Profile" className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
              {/* circuit-canvas-persona/public/pic/me.jpeg */}
              



            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
