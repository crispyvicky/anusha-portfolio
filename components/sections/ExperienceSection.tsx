import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Clock, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    company: 'NIVSEE TECHNOLOGY PVT. LTD.',
    position: 'Full Stack Development Intern',
    period: 'Sep 2024 - Present',
    current: true,
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    achievements: [
      'Contributed to high-impact, client-facing websites serving real businesses',
      'Collaborated on Modi Builders real estate platform development',
      'Developed responsive pages for Biotrendy cosmetic clinic',
      'Participated in healthcare solution development for Caves16',
      'Gained experience in requirement gathering and project planning',
      'Involved in complete development lifecycle from design to deployment'
    ],
    skills: ['Team Collaboration', 'Client Communication', 'Project Planning', 'System Design', 'Deployment']
  };

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-30 animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1A202C' }}>
            Professional Experience
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#4A5568' }}>
            Hands-on experience in real-world projects and client collaboration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div 
              className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: '#E2E8F0' }}
            ></div>
            
            {/* Timeline marker */}
            <div 
              className="absolute left-6 top-8 w-4 h-4 rounded-full border-4 border-white shadow-lg"
              style={{ backgroundColor: '#3182CE' }}
            ></div>

            <Card className="ml-16 bg-white border-[#E2E8F0] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src={experience.image}
                    alt="NIVSEE Technology"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Building className="h-6 w-6 mr-3" style={{ color: '#3182CE' }} />
                    <h3 className="text-2xl font-bold" style={{ color: '#1A202C' }}>
                      {experience.company}
                    </h3>
                  </div>
                  {experience.current && (
                    <Badge 
                      className="text-white font-medium"
                      style={{ backgroundColor: '#38A169' }}
                    >
                      Current Role
                    </Badge>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#3182CE' }}>
                    {experience.position}
                  </h4>
                  <div className="flex items-center text-sm" style={{ color: '#4A5568' }}>
                    <Clock className="h-4 w-4 mr-2" />
                    {experience.period}
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-4" style={{ color: '#1A202C' }}>
                    Key Achievements
                  </h5>
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: '#F6AD55' }}
                        ></div>
                        <p style={{ color: '#4A5568' }}>{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-4" style={{ color: '#1A202C' }}>
                    Skills Developed
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <Badge 
                        key={index}
                        variant="outline"
                        className="font-medium"
                        style={{ borderColor: '#3182CE', color: '#3182CE' }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* GENESIS POWERONICS Internship */}
            <Card className="ml-16 mt-10 bg-white border-[#E2E8F0] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                    alt="GENESIS POWERONICS"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Building className="h-6 w-6 mr-3" style={{ color: '#3182CE' }} />
                    <h3 className="text-2xl font-bold" style={{ color: '#1A202C' }}>
                      GENESIS POWERONICS
                    </h3>
                  </div>
                  <Badge 
                    className="text-white font-medium"
                    style={{ backgroundColor: '#805AD5' }}
                  >
                    Internship
                  </Badge>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#3182CE' }}>
                    PHP Full Stack Developer
                  </h4>
                  <div className="flex items-center text-sm" style={{ color: '#4A5568' }}>
                    <Clock className="h-4 w-4 mr-2" />
                    Jul 2025 – Oct 2025 • Hyderabad
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-4" style={{ color: '#1A202C' }}>
                    Summary
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#F6AD55' }}
                      ></div>
                      <p style={{ color: '#4A5568' }}>
                        Skilled in developing dynamic web applications using PHP, MySQL, HTML, CSS, JavaScript, and frameworks, with experience in both frontend and backend development.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-4" style={{ color: '#1A202C' }}>
                    Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Full Stack'].map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="outline"
                        className="font-medium"
                        style={{ borderColor: '#3182CE', color: '#3182CE' }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="bg-[#F7FAFC] border-[#E2E8F0] p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <h4 className="text-xl font-bold mb-4" style={{ color: '#1A202C' }}>
                  Looking Forward
                </h4>
                <p className="text-lg leading-relaxed" style={{ color: '#4A5568' }}>
                  Seeking opportunities to leverage my technical skills and internship experience 
                  in challenging and growth-oriented environments. Ready to contribute to innovative 
                  solutions and efficient operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;