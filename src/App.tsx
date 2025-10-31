import { useState, FormEvent } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, GraduationCap, Users, BookOpen, Heart } from 'lucide-react';
import logo from './assets/logo.png';
import heroImage from './assets/8.png';
import gallery1 from './assets/1.png';
import gallery2 from './assets/2.png';
import gallery3 from './assets/3.png';
import gallery4 from './assets/4.png';
import gallery5 from './assets/5.png';
import gallery6 from './assets/6.png';
import gallery7 from './assets/7.png';
import gallery9 from './assets/9.png';
import gallery10 from './assets/10.png';
import BackToTop from './components/BackToTop';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'cdab5cc0-643e-40fc-9652-4189e1698762');
    formData.append('subject', 'New Contact Form Submission from Ikhwezi Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! We will get back to you soon.'
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img 
                src={logo}
                alt="Ikhwezi Pre & Primary School Logo" 
                className="h-16 w-auto"
              />
              <h1 className="text-2xl font-bold text-gray-900 hidden sm:block">Ikhwezi Prep Primary School</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Programs</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2">About</button>
              <button onClick={() => scrollToSection('programs')} className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2">Programs</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-amber-100 rounded-full">
                <p className="text-amber-800 font-medium text-sm">Nurturing Young Minds Since Day One</p>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Where Learning
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Begins & Grows</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ikhwezi Prep & Primary School provides a nurturing environment where children develop academically, socially, and emotionally through innovative teaching and personalized care.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Enroll Now
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={heroImage}
                  alt="Happy students learning"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">300+</p>
                    <p className="text-sm text-gray-600">Happy Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Ikhwezi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A place where every child's potential is recognized, nurtured, and celebrated
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality education in a safe, caring environment that encourages each child to reach their full potential through holistic development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading educational institution that shapes confident, compassionate, and creative learners prepared for tomorrow's challenges.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Respect, integrity, excellence, and community. We foster an inclusive environment where diversity is celebrated and every child belongs.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold mb-2">8+</p>
                <p className="text-amber-100">Years Experience</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">20+</p>
                <p className="text-amber-100">Qualified Teachers</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">300+</p>
                <p className="text-amber-100">Students Enrolled</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">98%</p>
                <p className="text-amber-100">Parent Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive education programs designed for every stage of your child's early development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-rose-500"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pre-School (Age 3-5)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our pre-school program focuses on play-based learning, early literacy, numeracy skills, and social development in a nurturing environment.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Play-based learning approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Early literacy & numeracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Creative arts & music</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Foundation Phase (Grade R-3)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Building strong foundations in reading, writing, and mathematics while developing critical thinking and problem-solving skills.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Core curriculum subjects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Life skills development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Physical education</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intermediate Phase (Grade 4-6)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced curriculum preparing students for secondary education with focus on academic excellence and character development.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Advanced academics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Science & technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Leadership programs</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">After School Care</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Safe, supervised after-school program with homework assistance, recreational activities, and healthy snacks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Homework support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Recreational activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Flexible hours</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Extra Murals</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Diverse extracurricular activities including sports, arts, music, and cultural programs to develop well-rounded students.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Sports programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Arts & crafts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Music lessons</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Support</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Individualized support programs for students requiring additional academic assistance or enrichment opportunities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">One-on-one tutoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Remedial programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span className="text-gray-700">Enrichment classes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the vibrant learning environment at Ikwezi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative overflow-hidden rounded-xl shadow-lg group h-64">
              <img
                src={gallery1}
                alt="Students learning"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group h-64">
              <img
                src={gallery2}
                alt="Classroom activities"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group h-64">
              <img
                src={gallery3}
                alt="Happy students"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group h-64">
              <img
                src={gallery4}
                alt="Sports activities"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group h-64">
              <img
                src={gallery5}
                alt="Creative learning"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group h-64">
              <img
                src={gallery6}
                alt="Group activities"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group h-64">
              <img
                src={gallery7}
                alt="Group activities"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group h-64">
              <img
                src={gallery9}
                alt="Group activities"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group h-64">
              <img
                src={gallery10}
                alt="Group activities"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Parents Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from families who have entrusted us with their children's education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  T
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Thandi M.</p>
                  <p className="text-sm text-gray-600">Parent - Grade 2</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Ikhwezi has been wonderful for my daughter. The teachers are caring and dedicated, and I've seen tremendous growth in her confidence and academic skills."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Sipho N.</p>
                  <p className="text-sm text-gray-600">Parent - Grade 5</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "The holistic approach to education here is exceptional. My son not only excels academically but has also developed strong values and leadership skills."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  N
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Nomsa K.</p>
                  <p className="text-sm text-gray-600">Parent - Pre-School</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "As a first-time parent, I was nervous about pre-school. The staff at Ikwezi made the transition smooth and my child loves going to school every day!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to give your child the best start? Contact us today to schedule a visit
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-4 rounded-xl">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Visit Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                  2 31ST Street<br />
                    Nonzwakazi, De Aar<br />
                    7000<br />
                    South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Call Us</h3>
                  <p className="text-gray-600">+27 (0)53 631 0013</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-4 rounded-xl">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Email Us</h3>
                  <p className="text-gray-600">info@ikhwezischool.co.za</p>
                  <p className="text-gray-600">admissions@ikhwezischool.co.za</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-bold text-gray-900 text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/ikhwezi_prep_primary_school/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/p/Ikhwezi-Prep-School-100063753112348/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-3 rounded-xl text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="+27 xx xxx xxxx"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your child and how we can help..."
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                {submitStatus && (
                  <div className={`p-4 rounded-xl ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Ikhwezi</h3>
                  <p className="text-xs text-gray-400">Prep & Primary School</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Nurturing young minds and building bright futures through quality education and care.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">About Us</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Programs</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">School Hours</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">Monday - Friday</li>
                <li className="text-white font-medium">7:30 AM - 3:00 PM</li>
                <li className="text-gray-400 mt-4">After Care Available</li>
                <li className="text-white font-medium">Until 5:30 PM</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to receive updates and news about our school.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-r-lg hover:shadow-lg transition-all">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Ikhwezi Prep & Primary School. All rights reserved. Built with ❤️ and modern web technologies by <a href='https://mlkcomputer.com'>MLK Computer Consulting</a></p>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}

export default App;
