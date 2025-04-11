import { useState, useEffect, useRef } from 'react';
import { ArrowRight, GraduationCap, Globe } from 'lucide-react';

const Hero1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [destinations, setDestinations] = useState([
    { name: "Oxford", x: 25, y: 30 },
    { name: "Harvard", x: 18, y: 35 },
    { name: "Trinity", x: 28, y: 28 },
    { name: "Stanford", x: 12, y: 38 },
    { name: "Cambridge", x: 26, y: 29 }
  ]);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Animated 3D Globe Background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div 
          className="w-full md:w-3/4 aspect-square rounded-full border-2 border-blue-200/30 opacity-20"
          style={{ 
            transform: `rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-5/6 md:w-2/3 aspect-square rounded-full border border-blue-300/20 opacity-30"
          style={{ 
            transform: `rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
        <div 
          className="absolute w-2/3 md:w-1/2 aspect-square rounded-full border border-blue-400/20 opacity-40"
          style={{ 
            transform: `rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* University destination points */}
        {destinations.map((dest, i) => (
          <div 
            key={i} 
            className="absolute flex flex-col items-center"
            style={{ 
              left: `${dest.x + 25}%`, 
              top: `${dest.y + 15}%`,
              transform: `rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            <div className="w-2 h-2 bg-tiercel-red rounded-full animate-ping" />
            <div className="absolute w-1 h-1 bg-white rounded-full" />
            <span className="text-xs text-tiercel-blue/70 mt-2 whitespace-nowrap opacity-70">{dest.name}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-6 flex justify-center">
          <div className={`p-3 rounded-full bg-blue-50 shadow-lg transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <Globe className="text-tiercel-blue/80 w-8 h-8 md:w-12 md:h-12" />
          </div>
        </div>

        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="text-tiercel-blue/85">Your Gateway to </span>
          <span className="text-tiercel-red inline-block relative">
            DREAM
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-tiercel-red/30" viewBox="0 0 100 10">
              <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
          <span className="text-tiercel-blue/85 block mt-2">Education</span>
        </h1>

        <p className={`text-lg md:text-xl text-tiercel-blue/80 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          Fast, personalized guidance for students seeking admission to top universities in the UK, USA, Canada, Ireland, Australia, Europe.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <button className="bg-tiercel-blue/90 hover:bg-tiercel-blue text-white py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 group transition-all hover:shadow-xl">
            <span>Start Your Journey</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button className="bg-white text-tiercel-blue/80 py-3 px-6 rounded-lg shadow-md border border-blue-100 flex items-center gap-2 group hover:bg-blue-50 transition-all">
            <span>Watch Success Stories</span>
            <GraduationCap className="group-hover:rotate-12 transition-transform" size={20} />
          </button>
        </div>

        <div className={`mt-16 flex justify-center space-x-6 transition-all duration-1000 delay-900 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {['🇬🇧', '🇺🇸', '🇨🇦', '🇦🇺', '🇪🇺'].map((flag, i) => (
            <div key={i} className="text-3xl animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
              {flag}
            </div>
          ))}
        </div>
        
        <p className="text-tiercel-blue/60 mt-4 text-sm">Trusted by 500+ Students Across Globe</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-blue-300/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-tiercel-blue/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;