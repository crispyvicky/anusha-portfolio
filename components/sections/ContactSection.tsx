'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const isEmailValid = (email: string) => /^(?:[^\s@]+@[^\s@]+\.[^\s@]+)$/.test(email.trim());
  const isFormValid =
    formData.name.trim().length > 1 &&
    isEmailValid(formData.email) &&
    formData.subject.trim().length > 2 &&
    formData.message.trim().length > 4;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted (no validation):', { formData });
    
    setIsSubmitting(true);

    const phone = '918367691465';
    const composed = `Hello, I would like to get in touch.\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(composed)}`;

    try {
      const newWin = window.open(url, '_blank');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        // Popup likely blocked; fallback to same-tab navigation
        window.location.href = url;
      }
      setSubmitMessage('Opening WhatsApp…');
    } catch (error) {
      console.error('WhatsApp open error:', error);
      setSubmitMessage('Could not open WhatsApp. Please check your pop-up settings.');
    } finally {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anushakudupudi2020@gmail.com',
      href: 'mailto:anushakudupudi2020@gmail.com',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8367691465',
      href: 'tel:+918367691465',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      href: null,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:anushakudupudi2020@gmail.com'
    }
  ];

  return (
    <section 
      id="contact"
      className="scroll-mt-24 py-20 text-white relative overflow-hidden"
      style={{ backgroundColor: '#1A202C' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let&#39;s Connect
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Ready to discuss opportunities, collaborate on projects, or just have a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: '#3182CE' }}
                  >
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-white">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="opacity-90 hover:opacity-100 transition-opacity hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="opacity-90">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
<a
  key={index}
  href={social.href}
  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12"
  style={{ 
    backgroundColor: '#3182CE'
  }}
  aria-label={social.label}
>
  <social.icon className="h-6 w-6 text-white" />
</a>
                ))}
              </div>
            </div>

            <Card className="bg-white hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=600&h=200&fit=crop"
                    alt="Current Status"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#1A202C' }}>
                  Current Status
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-3"
                      style={{ backgroundColor: '#38A169' }}
                    ></div>
                    <span style={{ color: '#4A5568' }}>Available for new opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-3"
                      style={{ backgroundColor: '#F6AD55' }}
                    ></div>
                    <span style={{ color: '#4A5568' }}>Currently interning at NIVSEE Technology</span>
                  </div>
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-3"
                      style={{ backgroundColor: '#3182CE' }}
                    ></div>
                    <span style={{ color: '#4A5568' }}>Open to remote and on-site roles</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
                    alt="Contact Form"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1A202C' }}>
                  Send a Message
                </h3>
                
                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    {submitMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#4A5568' }}>
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 bg-white text-[#1A202C] placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-[#3182CE] focus:border-[#3182CE]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#4A5568' }}>
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 bg-white text-[#1A202C] placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-[#3182CE] focus:border-[#3182CE]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: '#4A5568' }}>
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full border border-gray-300 bg-white text-[#1A202C] placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-[#3182CE] focus:border-[#3182CE]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#4A5568' }}>
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      className="w-full border border-gray-300 bg-white text-[#1A202C] placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-[#3182CE] focus:border-[#3182CE]"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full text-white font-semibold py-3 text-lg hover:scale-105 transition-transform disabled:opacity-50"
                    style={{ backgroundColor: '#3182CE' }}
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-600">
          <p className="opacity-90">
            © 2024 Anusha Kudupudi. Built with Next.js and passion for great user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;