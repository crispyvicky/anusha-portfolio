import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);

  const testimonials = [
    {
      name: 'Project Manager',
      company: 'NIVSEE Technology',
      role: 'Technical Lead',
      content: 'Anusha demonstrated excellent technical skills and attention to detail during her internship. Her contributions to client projects were valuable and professional.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Team Lead',
      company: 'Development Team',
      role: 'Senior Developer',
      content: 'Great collaboration skills and quick learning ability. Anusha effectively contributed to multiple client websites with quality code and timely delivery.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Academic Supervisor',
      company: 'College Project',
      role: 'Faculty Mentor',
      content: 'Outstanding academic performance combined with practical application. The AI project for patient safety showed excellent research and implementation skills.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1A202C' }}>
            What People Say
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#4A5568' }}>
            Feedback from colleagues, mentors, and project stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: '#F7FAFC',
                borderLeft: '4px solid #3182CE'
              }}
              onMouseEnter={() => setHoveredTestimonial(index)}
              onMouseLeave={() => setHoveredTestimonial(null)}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#3182CE]">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className={`w-full h-full object-cover transition-transform duration-300 ${hoveredTestimonial === index ? 'scale-110' : ''}`}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Quote className="h-8 w-8 mb-4" style={{ color: '#3182CE' }} />
                  <p className="text-lg leading-relaxed italic" style={{ color: '#4A5568' }}>
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center mb-3" style={{ color: '#F6AD55' }}>
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <div className="border-t pt-4" style={{ borderColor: '#E2E8F0' }}>
                  <h4 className="font-bold text-lg" style={{ color: '#3182CE' }}>
                    {testimonial.name}
                  </h4>
                  <p className="font-medium" style={{ color: '#1A202C' }}>
                    {testimonial.role}
                  </p>
                  <p className="text-sm" style={{ color: '#4A5568' }}>
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card 
            className="p-8 max-w-3xl mx-auto"
            className="p-8 max-w-3xl mx-auto hover:shadow-lg hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#F7FAFC', borderLeft: '4px solid #38A169' }}
          >
            <CardContent className="p-0">
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#1A202C' }}>
                Ready to Work Together?
              </h4>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#4A5568' }}>
                I'm always excited to take on new challenges and contribute to innovative projects. 
                Let's discuss how I can add value to your team.
              </p>
              <div className="flex justify-center">
                <div className="text-sm" style={{ color: '#38A169' }}>
                  ✓ Quick learner • ✓ Team player • ✓ Problem solver • ✓ Detail oriented
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;