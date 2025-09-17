'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const liveProjects = [
    {
      title: 'Modi Builders Website',
      description: 'Contributed to front-end development for a large residential real estate firm. Implemented responsive design and interactive property showcases.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      url: 'https://www.modibuilders.com/',
      impact: 'Real estate showcase platform',
      type: 'live',
      highlight: 'Client Project',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Biotrendy Clinic Website',
      description: 'Developed anti-aging and skincare solutions pages for a cosmetic clinic. Focus on user-friendly booking and service presentation.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://biotrendy.in/',
      impact: 'Healthcare & beauty platform',
      type: 'live',
      highlight: 'Client Project',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Caves16 Healthcare Website',
      description: 'Part of internship team that developed a comprehensive healthcare solution platform with modern design and functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      url: 'https://caves16healthcare.com/',
      impact: 'Healthcare solutions platform',
      type: 'live',
      highlight: 'Client Project',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const personalProjects = [
    {
      title: 'Explainable AI for Patient Safety',
      description: 'Academic project focused on pharmacovigilance using AI to improve patient safety outcomes.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      type: 'academic',
      category: 'AI/ML',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'CanvasOne',
      description: 'Creative canvas application showcasing advanced CSS techniques and interactive design.',
      technologies: ['HTML', 'CSS'],
      type: 'personal',
      category: 'UI/UX',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'Pokemon Card Generator',
      description: 'Interactive web application that generates dynamic Pokemon cards with engaging animations.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      type: 'personal',
      category: 'Interactive',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'Random Joke Generator',
      description: 'Fun web application that fetches and displays random jokes with smooth transitions.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      type: 'personal',
      category: 'API Integration',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#F7FAFC] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1A202C' }}>
            Featured Projects
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#4A5568' }}>
            A showcase of client work and personal projects demonstrating technical skills and creativity.
          </p>
        </div>

        {/* Live Client Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#3182CE' }}>
            🚀 Live Client Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveProjects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-white hover:shadow-xl transition-all duration-300 hover:border-[#3182CE] group cursor-pointer overflow-hidden hover:scale-105"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${hoveredProject === index ? 'scale-110' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      className="text-white font-medium mb-2"
                      style={{ backgroundColor: '#38A169' }}
                    >
                      {project.highlight}
                    </Badge>
                    <TrendingUp className="h-5 w-5" style={{ color: '#38A169' }} />
                  </div>
                  <CardTitle className="text-xl" style={{ color: '#1A202C' }}>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 leading-relaxed" style={{ color: '#4A5568' }}>
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2" style={{ color: '#38A169' }}>
                      Impact: {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        className="text-white"
                        style={{ backgroundColor: '#805AD5' }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className="w-full text-white font-semibold hover:scale-105 transition-transform"
                    style={{ backgroundColor: '#3182CE' }}
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live Site
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#3182CE' }}>
            💡 Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalProjects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-white hover:shadow-lg transition-all duration-300 group overflow-hidden hover:scale-105"
                onMouseEnter={() => setHoveredProject(index + 100)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${hoveredProject === index + 100 ? 'scale-110' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <CardHeader>
                  <Badge 
                    className="text-white font-medium mb-2 w-fit"
                    style={{ backgroundColor: '#F6AD55' }}
                  >
                    {project.category}
                  </Badge>
                  <CardTitle className="text-lg" style={{ color: '#1A202C' }}>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#4A5568' }}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                        style={{ borderColor: '#3182CE', color: '#3182CE' }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;