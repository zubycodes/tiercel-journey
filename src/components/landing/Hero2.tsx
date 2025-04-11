import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Search, MapPin } from 'lucide-react';

const Hero2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePath, setActivePath] = useState(0);
  const planeRef = useRef(null);
  
  const destinations = [
    { name: "Oxford", location: "UK" },
    { name: "Harvard", location: "USA" },
    { name: "Trinity", location: "Ireland" },
    { name: "Stanford", location: "USA" },
    { name: "Cambridge", location: "UK" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActivePath(current => (current + 1) % destinations.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Animated paper plane paths */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#2563EB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
            </linearGradient>
            
            {/* Paper plane icon */}
            <symbol id="paperPlane" viewBox="0 0 24 24" width="32" height="32">
              <path d="M21,4H3A1,1,0,0,0,2.24,5.34L9,13.39V20a1,1,0,0,0,1.5.86l3-1.5A1,1,0,0,0,14,18V13.39l6.76-8.05A1,1,0,0,0,21,4Z" fill="#3B82F6" />
            </symbol>
          </defs>
          
          {/* Path 1 - curved arc from bottom to top-right */}
          <path
            className={`transition-opacity duration-1000 ${activePath === 0 ? 'opacity-100' : 'opacity-0'}`}
            d="M-100,500 Q400,50 900,200"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            strokeDasharray="8,8"
          />
          
          {/* Path 2 - S curve from left to right */}
          <path
            className={`transition-opacity duration-1000 ${activePath === 1 ? 'opacity-100' : 'opacity-0'}`}
            d="M-100,250 Q200,450 500,250 T1100,250"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            strokeDasharray="8,8"
          />
          
          {/* Path 3 - Wave pattern */}
          <path
            className={`transition-opacity duration-1000 ${activePath === 2 ? 'opacity-100' : 'opacity-0'}`}
            d="M-100,300 Q100,100 300,300 T700,300 T1100,300"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            strokeDasharray="8,8"
          />
          
          {/* Path 4 - Diagonal line */}
          <path
            className={`transition-opacity duration-1000 ${activePath === 3 ? 'opacity-100' : 'opacity-0'}`}
            d="M-100,500 L1100,100"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            strokeDasharray="8,8"
          />
          
          {/* Path 5 - Arc from top to bottom-right */}
          <path
            className={`transition-opacity duration-1000 ${activePath === 4 ? 'opacity-100' : 'opacity-0'}`}
            d="M-100,100 Q400,450 900,350"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            strokeDasharray="8,8"
          />
          
          {/* Animated paper plane */}
          <use
            href="#paperPlane"
            className={`filter drop-shadow-md transform transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            ref={planeRef}
          >
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              rotate="auto"
              path={
                activePath === 0 ? "M-100,500 Q400,50 900,200" :
                activePath === 1 ? "M-100,250 Q200,450 500,250 T1100,250" :
                activePath === 2 ? "M-100,300 Q100,100 300,300 T700,300 T1100,300" :
                activePath === 3 ? "M-100,500 L1100,100" :
                "M-100,100 Q400,450 900,350"
              }
            />
          </use>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-left lg:pr-12">
            <div className={`mb-4 inline-block transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <span className="bg-blue-100 text-tiercel-blue/80 text-sm font-medium px-4 py-1 rounded-full">
                Study Abroad Specialists
              </span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <span className="text-tiercel-blue/85">Your Gateway to</span><br />
              <span className="text-tiercel-red relative inline-block">
                DREAM
                <span className="absolute -z-10 left-0 right-0 bottom-0 h-3 bg-tiercel-red/10 transform -rotate-1"></span>
              </span>
              <span className="text-tiercel-blue/85"> Education</span>
            </h1>

            <p className={`text-lg text-tiercel-blue/70 mb-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Fast, personalized guidance for students seeking admission to top universities in the UK, USA, Canada, Ireland, Australia, Europe.
            </p>

            <div className={`flex flex-wrap gap-4 mb-6 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <button className="bg-tiercel-blue/90 hover:bg-tiercel-blue text-white py-3 px-6 rounded-lg flex items-center gap-2 group shadow-lg hover:shadow-xl transition-all">
                <span>Start Your Journey</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white text-tiercel-blue/80 py-3 px-6 rounded-lg border border-blue-100 flex items-center gap-2 group hover:bg-blue-50 transition-all">
                <Search size={18} />
                <span>Explore Programs</span>
              </button>
            </div>
            
            <div className={`transition-all duration-1000 delay-900 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <p className="text-tiercel-blue/60 text-sm mb-2">Trusted by 500+ Students Worldwide</p>
              <div className="flex items-center space-x-1">
                {['🇬🇧', '🇺🇸', '🇨🇦', '🇦🇺', '🇪🇺'].map((flag, i) => (
                  <div key={i} className="text-2xl">{flag}</div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right content - University destinations */}
          <div className={`w-full lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100">
              <h3 className="text-xl font-medium text-tiercel-blue/90 mb-4 flex items-center">
                <MapPin size={20} className="mr-2 text-tiercel-red" />
                Popular Destinations
              </h3>
              
              <div className="space-y-4">
                {destinations.map((dest, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center p-3 rounded-lg border border-blue-50 transition-all ${activePath === index ? 'bg-blue-50 shadow-md' : 'bg-white'}`}
                  >
                    <div className={`w-2 h-2 rounded-full mr-3 ${activePath === index ? 'bg-tiercel-red animate-pulse' : 'bg-tiercel-blue/30'}`}></div>
                    <div>
                      <h4 className="font-medium text-tiercel-blue/90">{dest.name}</h4>
                      <p className="text-sm text-tiercel-blue/60">{dest.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;