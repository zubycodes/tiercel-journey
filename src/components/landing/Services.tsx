
import { useRef, useEffect, useState } from 'react';
import { GraduationCap, FileText, Award, Building, BookOpen, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
   const [destinations, setDestinations] = useState([
      { name: "Oxford", x: 25, y: 30 },
      { name: "Harvard", x: 18, y: 35 },
      { name: "Trinity", x: 28, y: 28 },
      { name: "Stanford", x: 12, y: 38 },
      { name: "Cambridge", x: 26, y: 29 }
    ]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = sectionRef.current?.querySelectorAll('.reveal');
          elements?.forEach((el) => {
            el.classList.add('active');
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Building size={28} />,
      title: 'University Selection & Applications',
      description: 'Strategic guidance for selecting institutions that match your academic profile and career goals.',
    },
    {
      icon: <FileText size={28} />,
      title: 'Visa Guidance & Documentation',
      description: 'Expert assistance with visa documentation and interview preparation for success.',
    },
    {
      icon: <Award size={28} />,
      title: 'Scholarship Support',
      description: 'Identify and apply for scholarships and financial aid opportunities worldwide.',
    },
    {
      icon: <Handshake size={28} />,
      title: 'Post-Admission Counseling',
      description: 'Comprehensive support for travel arrangements, accommodation, and cultural adjustment.',
    },
    {
      icon: <BookOpen size={28} />,
      title: 'Statement of Purpose Crafting',
      description: 'Professional guidance to create compelling personal statements that stand out.',
    },
    {
      icon: <GraduationCap size={28} />,
      title: 'Career Counseling',
      description: 'Long-term planning for academic and professional success abroad and after returning.',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="section-container bg-tiercel-blue">
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h6 className="text-tiercel-red font-bold mb-2 reveal">OUR SERVICES</h6>
        <h2 className="section-heading reveal reveal-delay-100 text-white">Comprehensive Education Consulting</h2>
        <p className="max-w-2xl mx-auto text-lg text-white/80 mt-2 reveal reveal-delay-200">
          We guide students through every step of the international education journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`feature-card reveal reveal-delay-${(index + 3) * 100}`}
          >
            <div className="feature-icon">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-tiercel-blue mb-2">{service.title}</h3>
            <p className="text-tiercel-dark/70">{service.description}</p>
          </div>
        ))}
      </div>
      
      {/* Why Choose Us */}
      <div className="mt-24 bg-tiercel-blue/5 p-8 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h6 className="text-tiercel-red font-bold mb-2 reveal">WHY CHOOSE US</h6>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 reveal reveal-delay-100">The Tiercel Difference</h2>
            <div className="space-y-4 reveal reveal-delay-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-tiercel-gold/20 text-tiercel-red flex items-center justify-center shrink-0 mt-1">1</div>
                <div>
                  <h4 className="font-semibold text-white/90">Personalized Approach</h4>
                  <p className="text-sm text-white/70">Unlike generic consultancies, we develop custom strategies for each student based on their unique academic profile and ambitions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-tiercel-gold/20 text-tiercel-red flex items-center justify-center shrink-0 mt-1">2</div>
                <div>
                  <h4 className="font-semibold text-white/90">Direct University Relationships</h4>
                  <p className="text-sm text-white/70">We maintain strong partnerships with admissions offices at top institutions in the UK, USA, Canada, Ireland, Australia, Europe.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-tiercel-gold/20 text-tiercel-red flex items-center justify-center shrink-0 mt-1">3</div>
                <div>
                  <h4 className="font-semibold text-white/90">End-to-End Support</h4>
                  <p className="text-sm text-white/70">From initial consultation to arrival at your institution, we provide continuous guidance and support.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 reveal reveal-delay-300">
              <Link to="/consultation" className="btn-primary inline-block">
                Start Your Journey
              </Link>
            </div>
          </div>
          
          <div className="relative reveal reveal-delay-400">
            <div className="aspect-square max-w-md mx-auto relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-tiercel-gold/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-tiercel-blue/20 rounded-full blur-3xl"></div>
              <img 
                src="https://tierceledconsulting.com/wp-content/uploads/img/diff.png" 
                alt="Student success" 
                className="w-full h-full object-cover relative z-10 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
