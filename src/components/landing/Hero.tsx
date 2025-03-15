
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-tiercel-blue overflow-hidden">
      {/* Background and overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-tiercel-blue/20 to-tiercel-blue/90"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-tiercel-gold/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-tiercel-gold/5 blur-3xl animate-float animate-delay-500"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-block text-tiercel-gold text-sm md:text-base uppercase tracking-wider font-bold mb-4 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full">
            Pakistan's Premier Education Consultancy
          </span>
        </div>
        
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          Your Gateway to <span className="text-tiercel-gold">Global Education</span>
        </h1>
        
        <p className={`text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          Fast, personalized guidance for Pakistani students seeking admission to top universities in the US, UK, and Ireland.
        </p>
        
        <div className={`transition-all duration-1000 delay-900 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <Link 
            to="/consultation" 
            className="btn-primary inline-flex items-center gap-2 text-lg group"
          >
            Start Your Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          
          <p className="text-white/60 mt-6 text-sm">Trusted by 500+ Students Across Pakistan</p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse-subtle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
