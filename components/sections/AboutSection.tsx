"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Phone } from 'lucide-react';

const AboutSection = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    // { number: '7.53', label: 'CGPA', color: '#3182CE' },
    { number: '2024', label: 'Graduate', color: '#3182CE' },
    // { number: '10+', label: 'Projects', color: '#3182CE' },
    { number: '3+', label: 'Live Sites', color: '#38A169' },
  ];

  return (
    <section id="about" className="py-20 bg-[#F7FAFC] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1A202C' }}>
            About Me
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#4A5568' }}>
            A passionate developer with a strong foundation in web technologies and a keen interest in creating user-friendly solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-white border-[#E2E8F0] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                    alt="Education"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-8 w-8 mr-3" style={{ color: '#3182CE' }} />
                  <h3 className="text-2xl font-bold" style={{ color: '#1A202C' }}>Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 pl-4" style={{ borderColor: '#3182CE' }}>
                    <h4 className="font-semibold text-lg" style={{ color: '#1A202C' }}>
                      B.Tech in Computer Science
                    </h4>
                    <p style={{ color: '#4A5568' }}>Malla Reddy Institute of Engineering & Technology</p>
                    <p className="text-sm" style={{ color: '#4A5568' }}>2020 - 2024 | CGPA: 7.53</p>
                  </div>
                  <div className="border-l-4 pl-4" style={{ borderColor: '#F6AD55' }}>
                    <h4 className="font-semibold" style={{ color: '#1A202C' }}>Intermediate</h4>
                    <p style={{ color: '#4A5568' }}>Narayana Junior College | CGPA: 9.4</p>
                  </div>
                  <div className="border-l-4 pl-4" style={{ borderColor: '#38A169' }}>
                    <h4 className="font-semibold" style={{ color: '#1A202C' }}>SSC</h4>
                    <p style={{ color: '#4A5568' }}>Rosary High School | CGPA: 9.5</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="bg-white border-[#E2E8F0] text-center p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <CardContent className="p-0">
                    <div 
                      className={`text-3xl font-bold mb-2 transition-all duration-300 ${hoveredStat === index ? 'scale-110' : ''}`} 
                      style={{ color: stat.color }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium" style={{ color: '#4A5568' }}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white border-[#E2E8F0] hover:shadow-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                    alt="Contact"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#1A202C' }}>
                  <MapPin className="h-5 w-5 mr-2" style={{ color: '#3182CE' }} />
                  Contact Information
                </h3>
                <div className="space-y-2 text-sm" style={{ color: '#4A5568' }}>
                  <p className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" style={{ color: '#3182CE' }} />
                    91 8367691465
                  </p>
                  <p>📧 anushakudupudi2020@gmail.com</p>
                  <p>📍 Hyderabad, Telangana</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;