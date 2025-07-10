
import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Cpu, 
  Zap, 
  Wrench, 
  Lightbulb, 
  RadioTower, 
  Gauge, 
  BarChart2, 
  Terminal, 
  Layers, 
  ShieldCheck 
} from 'lucide-react'; 

const AboutSection = () => {
  const skills = [
    { icon: Cpu, title: 'Circuit Design', description: 'PCB layout and analog/digital circuit design' },
    { icon: Zap, title: 'Embedded Systems', description: 'Microcontroller programming and firmware development' },
    { icon: Wrench, title: 'Hardware Testing', description: 'Debugging and validation of electronic systems' },
    { icon: Lightbulb, title: 'Innovation', description: 'Creative problem-solving and product development' },
    { icon: RadioTower, title: 'Sensor Integration', description: 'Seamless interfacing of biosensors and actuators' },
    { icon: Gauge, title: 'PID Control', description: 'Precision control systems for temperature and humidity' },
    { icon: BarChart2, title: 'Data Visualization', description: 'Real-time monitoring with InfluxDB and Grafana' },
    { icon: Terminal, title: 'Linux Systems', description: 'Custom boot configs and system-level scripting' },
    { icon: Layers, title: 'RTOS & Multicore', description: 'Concurrent task management on dual-core systems' },
    { icon: ShieldCheck, title: 'Medical Standards', description: 'Experience with ISO 13485, IEC 62304, FDA 21 CFR' }
  ];

  return (
    <section className="min-h-screen py-20 relative">
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Electronics Engineer with a passion for innovation and cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 rounded-2xl bg-gradient-to-br from-secondary to-muted border border-primary/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary">
                <img src="/pic/me.jpeg" alt="About Me" className="w-full h-full rounded-2xl object-cover" />
                </div>
              </div>
              {/* Add your about image here */}
              {/* <img src="/your-about-image.jpg"  */}
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-4">Who Am I??</h3>
            <p className="text-muted-foreground leading-relaxed">
            I love coffee way too much and talk to my microcontrollers like they’re my coworkers. Breaking stuff just to fix it better is my idea of a good time. I build wearables, hack sensors, and occasionally get emotionally attached to PCB layouts. My happy place is somewhere between a soldering iron, a Python script, and a pile of debug logs. I believe tech should be useful and a little magical. If it blinks, beeps, or buzzes — I probably built it.
            </p>
           
          
          

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 border border-primary/20 rounded-lg">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
             
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="p-6 bg-secondary/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-blue">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-semibold">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
