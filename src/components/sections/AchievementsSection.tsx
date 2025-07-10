
import React from 'react';
import { Card } from '@/components/ui/card';
import { Trophy, Award, Star, Zap, Target, Medal } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: '1st place at Recurzive ',
      organization: 'Dayananda Sagar College of Engineering, BANGALORE',
      description: 'One of the highlights was pitching our project to esteemed CEOs, including Denver Dsouza, CEO of Devfolio , and Sathyanarayana B V , CEO of DERBI Foundation .',
      date: '2024',
      icon: Trophy,
      type: 'award',
    },
    {
      id: 2,
      title: '2nd place at Hackman ',
      organization: 'Dayananda Sagar College of Engineering, BANGALORE',
      description: 'Created NeuroWell, a neurorehabilitation platform with features like personalized rehabilitation plans, virtual therapy sessions, an extensive resource on neuro diseases,',
      date: '2024',
      icon: Star,
      type: 'award',
    },
    {
      id: 3,
      title: 'Patent Filing for Neonatal Incubator',
      organization: 'BMSCE',
      description: 'Novely in integrating incubator with phototherapy unit and Iot enabling',
      date: '2025',
      icon: Award,
      type: 'patent',
    },
    {
      id: 4,
      title: '2nd Prize at Impact AI',
      organization: 'BMSCE',
      description: 'eveloped a heartbeat audio classifying ml model and a multilingual chatbot focused on heart-related topics. ',
      date: '2024',
      icon: Target,
      type: 'award',
    },
    {
      id: 5,
      title: 'IoT Track Winners-SHE Codes',
      organization: 'Reva University',
      description: 'Developed a Cool-cap for hair-fall reduction in cancer patients',
      date: '2024',
      icon: Zap,
      type: 'award',
    },
   
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award': return 'text-yellow-400 bg-yellow-400/20';
      case 'patent': return 'text-purple-400 bg-purple-400/20';
      case 'recognition': return 'text-primary bg-primary/20';
      case 'leadership': return 'text-orange-400 bg-orange-400/20';
      case 'publication': return 'text-green-400 bg-green-400/20';
      case 'certification': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-primary bg-primary/20';
    }
  };

  return (
    <section className="min-h-screen py-20 relative">
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition and milestones in my electronics engineering career
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center bg-secondary/50 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Hackathons Won</div>
          </Card>
          <Card className="p-6 text-center bg-secondary/50 border-primary/20">
            <div className="text-3xl font-bold text-accent mb-2">1</div>
            <div className="text-sm text-muted-foreground">Patents Filed</div>
          </Card>
          <Card className="p-6 text-center bg-secondary/50 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-sm text-muted-foreground">Governement Funded Project</div>
          </Card>
          <Card className="p-6 text-center bg-secondary/50 border-primary/20">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </Card>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.id} className="relative flex items-start space-x-6">
                  {/* Timeline Node */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full ${getTypeColor(achievement.type)} flex items-center justify-center border-4 border-background relative z-10`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Achievement Card */}
                  <Card className="flex-grow p-6 bg-secondary/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-blue">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{achievement.title}</h3>
                        <p className="text-accent font-medium">{achievement.organization}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                        {achievement.date}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                    
                    {/* Achievement Type Badge */}
                    <div className="mt-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${getTypeColor(achievement.type)}`}>
                        {achievement.type}
                      </span>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="mt-20">
  <h3 className="text-2xl font-bold text-primary mb-8">Achievement Gallery</h3>
  <div className="grid md:grid-cols-3 gap-6">
    <Card className="aspect-square overflow-hidden p-0 border-primary/20 hover:border-primary/50 transition-all duration-300">
      <img src="/pic/impactai.jpeg" alt="Award 1" className="w-full h-full object-cover" />
    </Card>
    <Card className="aspect-square overflow-hidden p-0 border-primary/20 hover:border-primary/50 transition-all duration-300">
      <img src="/pic/hackman.jpeg" alt="Award 2" className="w-full h-full object-cover" />
    </Card>
    <Card className="aspect-square overflow-hidden p-0 border-primary/20 hover:border-primary/50 transition-all duration-300">
      <img src="/pic/reva.jpeg" alt="Award 3" className="w-full h-full object-cover" />
    </Card>
    <Card className="aspect-square overflow-hidden p-0 border-primary/20 hover:border-primary/50 transition-all duration-300">
      <img src="/pic/byte.jpeg" alt="Award 4" className="w-full h-full object-cover" />
    </Card>
    <Card className="aspect-square overflow-hidden p-0 border-primary/20 hover:border-primary/50 transition-all duration-300">
      <img src="/pic/recursive.jpeg" alt="Award 5" className="w-full h-full object-cover" />
    </Card>
    <Card className="aspect-square overflow-hidden p-0 border-primary/20 hover:border-primary/50 transition-all duration-300">
      <img src="/pic/incu.jpeg" alt="Award 6" className="w-full h-full object-cover" />
    </Card>
  </div>
</div>

              
      </div>      
  
    </section>
  );
};

export default AchievementsSection;
