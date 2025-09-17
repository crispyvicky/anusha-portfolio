'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Eye, Mail } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a simple resume download
    const resumeContent = `
ANUSHA KUDUPUDI
Frontend Developer | B.Tech Graduate

Contact: anushakudupudi2020@gmail.com | +91 8367691465
Location: Hyderabad, Telangana

EXPERIENCE:
Frontend Development Intern - NIVSEE TECHNOLOGY PVT. LTD. (Sep 2024 - Present)

EDUCATION:
B.Tech Computer Science - Malla Reddy Institute (2020-2024) - CGPA: 7.53

SKILLS:
HTML, CSS, JavaScript, React, Bootstrap, Python, MySQL

PROJECTS:
- Modi Builders Website (https://www.modibuilders.com/)
- Biotrendy Clinic Website (https://biotrendy.in/)
- Caves16 Healthcare Website (https://caves16healthcare.com/)
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Anusha_Kudupudi_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Removed white blobs for cleaner hero section */}
      </div>

      <div className="container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-82 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/anusha1.png"
                alt="Anusha Kudupudi"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Anusha Kudupudi
          </h1>
          <p className={`text-xl md:text-2xl mb-4 opacity-90 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            B.Tech Graduate | Frontend Developer
          </p>
          <p className={`text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Motivated and enthusiastic developer with strong problem-solving skills. 
            Proficient in web technologies and passionate about creating innovative solutions.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              className="bg-white text-[#3182CE] hover:bg-gray-100 hover:scale-105 px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('ProjectsSection')}
            >
              <Eye className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            {/* <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#3182CE] hover:scale-105 px-8 py-3 text-lg font-semibold bg-transparent transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button> */}

            <Button 
              size="lg" 
              className="bg-[#F6AD55] hover:bg-[#ED8936] hover:scale-105 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('ContactSection')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-sm opacity-70 mb-2">📍 Hyderabad, Telangana | 📞 91 8367691465</p>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="h-8 w-8 text-white opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;