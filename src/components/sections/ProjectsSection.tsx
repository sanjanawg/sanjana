import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Play } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Wearable Belt for Dysmenorrhea',
      description: 'Smart IR therapy belt with custom EMG sensor and feedback loop for personalized heat therapy.',
      image: '/pic/werable.png',
      tech: ['Embedded C', 'EMG', 'IR LEDs', 'Custom PCB'],
      featured: true,
    },
    {
      id: 2,
      title: 'Neonatal IoT Incubator-MSME Funded Project',
      description: 'Deployment-ready IoT incubator with automated environmental control; architecture under patent filing.',
      image: '/pic/neonatal_incubator.jpeg',
      tech: ['IoT', 'Sensors', 'PID Control', 'Raspberry Pi'],
      featured: true,
    },
    {
      id: 3,
      title: 'Autonomous Healthcare Robot',
      description: 'Real-time navigation robot using STM32 and ROS, aimed at clinical task automation.',
      image: '/pic/bot.jpeg',
      tech: ['STM32', 'ROS', 'Gazebo', 'Obstacle Avoidance'],
      featured: false,
    },
    {
      id: 4,
      title: '4-Layer Custom Microcontroller',
      description: 'Designed and fabricated a custom SMD MCU optimized for power and signal processing in wearables.',
      image: '/pic/board.jpeg',
      tech: ['PCB Design', 'SMD', 'Power Optimization', 'ARM'],
      featured: false,
    },
    {
      id: 5,
      title: 'Neuro-Well',
      description: 'Neuro Well addresses the critical challenge of accurately assessing and treating stroke patients, a process that is often complex and time-sensitive..',
      image: '/pic/neurowell.png',
      tech: ['AI', 'OpenCV',],
      featured: false,
    },
   
  ];
  

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="min-h-screen py-20 relative">
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my electronics engineering projects and innovations
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden bg-secondary/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-blue">
                <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-2xl font-bold text-primary border-b border-primary/20">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />

                  {/* Replace with actual image */}
                  
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden bg-secondary/30 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:bg-secondary/50">
                <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-lg font-bold text-primary/70 border-b border-primary/10">
                  
                  {/* Replace with actual image */}
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> 
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 2).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded">
                        +{project.tech.length - 2} more
                      </span>
                    )}
                  </div>

                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
