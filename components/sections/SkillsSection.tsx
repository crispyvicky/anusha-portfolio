"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
      color: '#805AD5',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      category: 'Styling & Design',
      skills: ['CSS3', 'Bootstrap', 'Responsive Design', 'UI/UX'],
      color: '#F6AD55',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      category: 'Tools & Platforms',
      skills: ['VS Code', 'GitHub', 'Gitbash', 'Sublime Text'],
      color: '#38A169',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      category: 'Backend & Database',
      skills: ['Python', 'C', 'C++', 'MySQL'],
      color: '#3182CE',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1A202C' }}>
            Technical Skills
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#4A5568' }}>
            A comprehensive set of technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.category}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredCategory === index ? 'scale-110' : ''}`}
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>
              <CardContent className="p-6">
              <h3 
                className={`text-xl font-bold mb-6 pb-2 border-b-2 inline-block transition-all duration-300 ${hoveredCategory === index ? 'scale-105' : ''}`}
                style={{ 
                  color: '#3182CE',
                  borderColor: category.color
                }}
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    className="text-white font-medium px-3 py-2 hover:scale-110 transition-transform duration-200 cursor-pointer"
                    style={{ 
                      backgroundColor: category.color,
                      border: 'none'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#1A202C' }}>
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#F7FAFC' }}>
                <img 
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Problem Solving"
                  className="w-full h-24 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-lg mb-2" style={{ color: '#3182CE' }}>Problem Solving</h4>
                <p style={{ color: '#4A5568' }}>Strong analytical and debugging skills with attention to detail</p>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#F7FAFC' }}>
                <img 
                  src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Team Collaboration"
                  className="w-full h-24 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-lg mb-2" style={{ color: '#F6AD55' }}>Team Collaboration</h4>
                <p style={{ color: '#4A5568' }}>Effective communication and teamwork in project environments</p>
              </Card>
              <Card className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#F7FAFC' }}>
                <img 
                  src="https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Continuous Learning"
                  className="w-full h-24 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-lg mb-2" style={{ color: '#38A169' }}>Continuous Learning</h4>
                <p style={{ color: '#4A5568' }}>Quick learner passionate about staying updated with technology</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;