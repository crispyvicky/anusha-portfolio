'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ChevronDown, Download, Eye, Mail } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log('scrollToSection called with:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Element found:', element);
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id '${sectionId}' not found.`);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      // style={{
      //   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      // }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Removed white blobs for cleaner hero section */}
      </div>

      <div className="container mx-auto px-4 py-20 text-center text-white relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/anusha1.png"
                alt="Anusha Kudupudi"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                style={{ filter: 'brightness(1.1) contrast(1.2)' }}
              />
            </div>
          </div>

          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`} style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}>
            Anusha Kudupudi
          </h1>
          <p className={`text-xl md:text-2xl mb-4 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`} style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}>
            B.Tech Graduate | Full Stack Developer
          </p>
          <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`} style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}>
            Motivated and enthusiastic developer with strong problem-solving skills.
            Proficient in web technologies and passionate about creating innovative solutions.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              size="lg"
              className="bg-white text-[#3182CE] hover:bg-gray-100 hover:scale-105 px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              type="button"
              onClick={() => scrollToSection('projects')}
            >
              <Eye className="mr-2 h-5 w-5" />
              View My Work
            </Button>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="bg-white text-[#3182CE] hover:bg-black hover:scale-105 px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => setIsDialogOpen(true)}
                  data-resume-trigger
                >
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[95vw] max-w-4xl md:w-auto">
                <DialogHeader>
                  <DialogTitle>Resume</DialogTitle>
                </DialogHeader>
                <div className="mt-4 md:h-[70vh]">
                  <iframe
                    src="/K.Anusha%20Resume%20New.pdf"
                    width="100%"
                    height="100%"
                    className="border rounded"
                  />
                  <div className="mt-4 text-center">
                    <a href="/K.Anusha%20Resume%20New.pdf" download>
                      <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </Button>
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              size="lg"
              className="bg-[#F6AD55] hover:bg-[#ED8936] hover:scale-105 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              type="button"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
            <p className="text-sm mb-2" style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.7)' }}>📍 Hyderabad, Telangana | 📞 91 8367691465</p>
          </div>
        </div>
      </div>

      {/* <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </div> */}

      
    </section>
  );
};
export default HeroSection;