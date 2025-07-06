import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github,
  Code,
  GraduationCap,
  Award,
  Briefcase,
  User,
  ChevronDown,
  ExternalLink,
  Calendar,
  Trophy,
  Languages,
  Heart
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-900">Mohamed Safiq A</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'education', label: 'Education' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-2">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img 
                  src="safiq.png" 
                  alt="Mohamed Safiq A" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Mohamed <span className="text-blue-600">Safiq A</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              B.E Artificial Intelligence & Machine Learning
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Passionate AI/ML enthusiast with strong programming skills and hands-on project experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Professional Photo */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="w-full max-w-sm mx-auto">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src="/1000043915-01.jpeg.jpg" 
                      alt="Mohamed Safiq A - Professional Photo" 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Code className="text-white" size={32} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Objectives</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-600">
                      Organized and managing dependable candidate successful at multiple priorities with a positive attitude
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-600">
                      Hardworking and passionate job seeker with strong organizational skills eager to secure an entry-level position
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Trophy className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-600">
                      Ready to help team achieve company goals through dedication and continuous learning
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Interests & Hobbies</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technical Interests</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Object Oriented Programming</li>
                      <li>• Internet of Things</li>
                      <li>• Machine Learning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Personal Hobbies</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Volleyball</li>
                      <li>• Chess</li>
                      <li>• Programming</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Languages className="mr-2" size={20} />
                    Languages
                  </h4>
                  <div className="flex space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Native Tamil</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Proficient English</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">B.E Artificial Intelligence & Machine Learning</h3>
                  <p className="text-blue-600 font-medium">Sethu Institute of Technology</p>
                  <p className="text-gray-600 mt-2">CGPA: 7.5 (up to 5th semester)</p>
                  <p className="text-gray-500 text-sm mt-1">Currently pursuing final year</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <GraduationCap className="text-green-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Higher Secondary Certificate (HSC)</h3>
                  <p className="text-green-600 font-medium">Algumalar Matriculation Higher Secondary School</p>
                  <p className="text-gray-600 mt-2">Percentage: 79%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Secondary School Leaving Certificate (SSLC)</h3>
                  <p className="text-purple-600 font-medium">Algumalar Matriculation Higher Secondary School</p>
                  <p className="text-gray-600 mt-2">Percentage: 64.6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Java Programming', level: 85, color: 'bg-red-500' },
              { name: 'C Programming', level: 80, color: 'bg-blue-500' },
              { name: 'C++ Programming', level: 78, color: 'bg-green-500' },
              { name: 'Python', level: 75, color: 'bg-yellow-500' },
              { name: 'Machine Learning', level: 70, color: 'bg-purple-500' },
              { name: 'Django Framework', level: 72, color: 'bg-teal-500' }
            ].map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <div className="flex items-center space-x-3 text-white">
                  <Award size={24} />
                  <h3 className="text-xl font-semibold">Smart India Hackathon 2023</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Autonomous Water Hyacinth Chopping Bot</h4>
                <p className="text-gray-600 mb-4">
                  Designed and developed an autonomous water hyacinth chopping bot to detect, cut, and remove invasive aquatic 
                  weeds using computer vision and robotic automation at Smart India Hackathon 2023.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Computer Vision</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Robotics</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">AI/ML</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="mr-1" size={16} />
                    2023
                  </span>
                  <ExternalLink className="text-blue-600 hover:text-blue-800 cursor-pointer" size={20} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
                <div className="flex items-center space-x-3 text-white">
                  <Heart size={24} />
                  <h3 className="text-xl font-semibold">Accessibility Project</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Object Detection for Visually Impaired People</h4>
                <p className="text-gray-600 mb-4">
                  Developed an AI-based object detection system that assists visually impaired individuals by identifying 
                  and announcing nearby objects in real time using machine learning and computer vision technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Object Detection</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">OpenCV</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Accessibility</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="mr-1" size={16} />
                    2023
                  </span>
                  <ExternalLink className="text-blue-600 hover:text-blue-800 cursor-pointer" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Achievements</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Code className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Django Framework Intern</h3>
                  <p className="text-blue-600 font-medium">Phoenix Softech</p>
                  <p className="text-gray-600 mt-2">
                    Gained hands-on experience in Django web development, working on real-world projects and 
                    learning industry best practices for Python web development.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border-l-4 border-green-600">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Code className="text-green-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Angular Framework Intern</h3>
                  <p className="text-green-600 font-medium">Amizth Infotech</p>
                  <p className="text-gray-600 mt-2">
                    Developed frontend applications using Angular framework, learned TypeScript, and worked on 
                    responsive web design principles and modern development workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                '3 Level IOT Certificate',
                'Angular Framework Internship',
                'Django Framework Internship', 
                'ADJP Course - CSC'
              ].map((cert, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                  <Award className="text-yellow-500 mx-auto mb-3" size={32} />
                  <p className="font-medium text-gray-900">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborative projects. Let's connect!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 9942277523</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">mhdsafiq2430@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">1/63, West Street, Kalimangalam, Madurai</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/mhdsafiq" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200"
                    >
                      linkedin.com/in/mhdsafiq
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Mohamed Safiq A. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
