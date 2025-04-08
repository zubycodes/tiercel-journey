import { useState, useEffect } from 'react';
import { ArrowRight, MapPin, BookOpen, Globe, GraduationCap } from 'lucide-react';

const Herod = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  
  const journeyStages = [
    { icon: <BookOpen className="text-tiercel-blue" size={24} />, text: "Research" },
    { icon: <MapPin className="text-tiercel-red" size={24} />, text: "Choose" },
    { icon: <Globe className="text-tiercel-blue" size={24} />, text: "Apply" },
    { icon: <GraduationCap className="text-tiercel-red" size={24} />, text: "Succeed" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveStage(current => (current + 1) % journeyStages.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Left Content */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 z-10 lg:pr-8">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-tiercel-blue mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Your Gateway to <span className="text-tiercel-red">Dream<br />EDUCATION!</span>
          </h1>
          
          <p className={`text-lg text-tiercel-blue/70 mb-8 max-w-xl transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Fast, personalized guidance for students seeking admission to top universities in the US, UK, and Ireland.
          </p>
          
          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <button className="bg-tiercel-red hover:bg-red-600 text-white py-3 px-8 rounded-full flex items-center gap-2 group font-medium transition-all shadow-lg hover:shadow-xl">
              <span>Learn More</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
          
          {/* Journey Steps */}
          <div className={`mt-12 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-center">
              {journeyStages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all ${activeStage === index ? 'bg-blue-50 scale-110' : 'bg-gray-100'}`}>
                    {stage.icon}
                    {activeStage === index && (
                      <div className="absolute -inset-1 rounded-full border-2 border-tiercel-blue/30 animate-ping opacity-60"></div>
                    )}
                  </div>
                  
                  <span className={`text-xs mt-2 font-medium transition-all ${activeStage === index ? 'text-tiercel-blue' : 'text-gray-500'}`}>
                    {stage.text}
                  </span>
                  
                  {index < journeyStages.length - 1 && (
                    <div className="h-px w-8 bg-gray-300 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Country Flags */}
          <div className={`mt-8 grid grid-cols-4 gap-4 transition-all duration-1000 delay-900 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <img src="/api/placeholder/60/40" alt="USA" className="w-12 h-8 object-cover rounded shadow-sm" />
            <img src="/api/placeholder/60/40" alt="UK" className="w-12 h-8 object-cover rounded shadow-sm" />
            <img src="/api/placeholder/60/40" alt="Australia" className="w-12 h-8 object-cover rounded shadow-sm" />
            <img src="/api/placeholder/60/40" alt="Canada" className="w-12 h-8 object-cover rounded shadow-sm" />
            <img src="/api/placeholder/60/40" alt="EU" className="w-12 h-8 object-cover rounded shadow-sm" />
            <img src="/api/placeholder/60/40" alt="New Zealand" className="w-12 h-8 object-cover rounded shadow-sm" />
            <img src="/api/placeholder/60/40" alt="Malaysia" className="w-12 h-8 object-cover rounded shadow-sm" />
            <img src="/api/placeholder/60/40" alt="Turkey" className="w-12 h-8 object-cover rounded shadow-sm" />
          </div>
        </div>
        
        {/* Right Content - Student Image with Interactive Elements */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
          {/* Background Circle */}
          <div className="absolute top-0 right-0 w-full h-full lg:-right-1/4 lg:w-screen">
            <div className={`absolute right-0 top-0 w-full h-full rounded-full bg-gradient-to-br from-tiercel-red/90 to-tiercel-red/70 transition-all duration-1500 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}></div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0">
              {/* Animated circles */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-white/10"
                  style={{
                    width: `${Math.random() * 60 + 20}px`,
                    height: `${Math.random() * 60 + 20}px`,
                    top: `${Math.random() * 80 + 10}%`,
                    right: `${Math.random() * 80 + 10}%`,
                    animationDuration: `${Math.random() * 10 + 5}s`,
                    animationDelay: `${i * 0.5}s`
                  }}
                ></div>
              ))}
              
              {/* Animated dots */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i + 100}
                  className="absolute rounded-full bg-white/20"
                  style={{
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                    top: `${Math.random() * 90 + 5}%`,
                    right: `${Math.random() * 90 + 5}%`,
                    animationDuration: `${Math.random() * 8 + 2}s`,
                    animationDelay: `${i * 0.3}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Student Image */}
          <div className={`relative z-10 flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <img 
              src="/api/placeholder/400/500" 
              alt="Student" 
              className="object-cover max-h-96 lg:max-h-screen"
            />
            
            {/* Interactive Labels */}
            <div className="absolute top-1/4 -left-4 bg-white p-2 rounded-lg shadow-lg flex items-center max-w-xs animate-float">
              <div className="w-8 h-8 rounded-full bg-tiercel-blue/10 flex items-center justify-center mr-2">
                <MapPin size={16} className="text-tiercel-blue" />
              </div>
              <div>
                <h4 className="font-medium text-sm text-tiercel-blue">Global Universities</h4>
                <p className="text-xs text-tiercel-blue/60">Access to top institutions</p>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 -left-4 bg-white p-2 rounded-lg shadow-lg flex items-center max-w-xs animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-8 h-8 rounded-full bg-tiercel-red/10 flex items-center justify-center mr-2">
                <GraduationCap size={16} className="text-tiercel-red" />
              </div>
              <div>
                <h4 className="font-medium text-sm text-tiercel-blue">Guided Support</h4>
                <p className="text-xs text-tiercel-blue/60">Expert application assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Line Decor */}
      <div className="absolute bottom-0 left-0 w-full h-2 overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-tiercel-blue via-tiercel-red to-tiercel-blue bg-[length:200%_auto] animate-gradient-x"></div>
      </div>
    </section>
  );
};

export default Herod;