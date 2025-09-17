import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar } from 'lucide-react';

const CertificationsSection = () => {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const certifications = [
    {
      title: 'Google Developer Student Clubs',
      issuer: 'Google',
      date: '2024',
      icon: '🔍',
      description: 'Community leadership and technical development program',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
    },
    {
      title: 'Microsoft Learn Student Ambassador',
      issuer: 'Microsoft',
      date: '2024',
      icon: '🏢',
      description: 'Student leadership and technical evangelism program',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
    },
    {
      title: 'Learn Python and ML',
      issuer: 'Devtown',
      date: '2023',
      icon: '🐍',
      description: 'Comprehensive Python programming and machine learning fundamentals',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
    },
    {
      title: 'DevOps for Web Development',
      issuer: 'Online Platform',
      date: '2023',
      icon: '⚙️',
      description: 'Modern development workflows and deployment practices',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-[#F7FAFC] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1A202C' }}>
            Certifications & Learning
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#4A5568' }}>
            Continuous learning through industry-recognized programs and certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-white border-[#E2E8F0] hover:shadow-lg transition-all duration-300 group overflow-hidden hover:scale-105"
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={cert.image}
                  alt={cert.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredCert === index ? 'scale-110' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{cert.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-[#3182CE] transition-colors" style={{ color: '#1A202C' }}>
                        {cert.title}
                      </h3>
                      <p className="font-medium" style={{ color: '#3182CE' }}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <Badge 
                    className="text-white font-medium"
                    style={{ backgroundColor: '#38A169' }}
                  >
                    <Calendar className="h-3 w-3 mr-1" />
                    {cert.date}
                  </Badge>
                </div>
                
                <p className="leading-relaxed" style={{ color: '#4A5568' }}>
                  {cert.description}
                </p>

                <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2" style={{ color: '#3182CE' }} />
                    <span className="text-sm font-medium" style={{ color: '#3182CE' }}>
                      Certified Professional
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-white border-[#E2E8F0] p-8 max-w-2xl mx-auto hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#1A202C' }}>
                Commitment to Growth
              </h4>
              <p className="text-lg leading-relaxed" style={{ color: '#4A5568' }}>
                I believe in continuous learning and staying updated with the latest technologies 
                and industry best practices. These certifications represent my dedication to 
                professional development and technical excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;