import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Users, Award, BookOpen } from 'lucide-react';

const Heroc = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  
  const successStories = [
    { name: "Alex", university: "Oxford", country: "UK", stats: "96% scholarship" },
    { name: "Maria", university: "Harvard", country: "USA", stats: "Full ride" },
    { name: "Raj", university: "Trinity", country: "Ireland", stats: "Fast track" },
    { name: "Sara", university: "Stanford", country: "USA", stats: "Early admission" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveStory(current => (current + 1) % successStories.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-bl-full bg-gradient-to-br from-tiercel-red/10 to-tiercel-red/30"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-tr-full bg-gradient-to-tr from-tiercel-blue/10 to-tiercel-blue/30"></div>
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-12 gap-8 w-full h-full opacity-30">
            {[...Array(60)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-gray-400"
                style={{ 
                  opacity: Math.random() * 0.6 + 0.2,
                  animation: `pulse ${Math.random() * 4 + 2}s infinite alternate`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
          <div className={`mb-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="inline-block bg-tiercel-blue/10 text-tiercel-blue font-medium px-4 py-1 rounded-full text-sm">
              International Education Experts
            </span>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="text-tiercel-blue">Your Gateway to</span><br />
            <span className="text-tiercel-red relative">
              Dream EDUCATION!
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6">
                <path d="M0,3 Q50,6 100,3 T200,3" fill="none" stroke="#e63946" strokeWidth="2" />
              </svg>
            </span>
          </h1>
          
          <p className={`text-lg text-tiercel-blue/70 mb-8 max-w-xl transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Fast, personalized guidance for students seeking admission to top universities in the US, UK, and Ireland.
          </p>
          
          <div className={`flex gap-4 mb-12 transition-all duration-1000 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <button className="bg-tiercel-red hover:bg-red-600 text-white py-3 px-8 rounded-lg flex items-center gap-2 group font-medium transition-all shadow-lg hover:shadow-xl">
              <span>Learn More</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button className="bg-white hover:bg-gray-50 text-tiercel-blue py-3 px-6 rounded-lg border border-blue-100 transition-all">
              Success Stories
            </button>
          </div>
          
          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-800 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center p-3">
              <div className="flex justify-center mb-2">
                <Calendar size={24} className="text-tiercel-blue" />
              </div>
              <h3 className="text-2xl font-bold text-tiercel-blue">10+</h3>
              <p className="text-sm text-tiercel-blue/60">Years Experience</p>
            </div>
            
            <div className="text-center p-3">
              <div className="flex justify-center mb-2">
                <Users size={24} className="text-tiercel-blue" />
              </div>
              <h3 className="text-2xl font-bold text-tiercel-blue">500+</h3>
              <p className="text-sm text-tiercel-blue/60">Students Placed</p>
            </div>
            
            <div className="text-center p-3">
              <div className="flex justify-center mb-2">
                <Award size={24} className="text-tiercel-blue" />
              </div>
              <h3 className="text-2xl font-bold text-tiercel-blue">98%</h3>
              <p className="text-sm text-tiercel-blue/60">Success Rate</p>
            </div>
            
            <div className="text-center p-3">
              <div className="flex justify-center mb-2">
                <BookOpen size={24} className="text-tiercel-blue" />
              </div>
              <h3 className="text-2xl font-bold text-tiercel-blue">50+</h3>
              <p className="text-sm text-tiercel-blue/60">Universities</p>
            </div>
          </div>
        </div>
        
        {/* Right Content - Student Image with Story Cards */}
        <div className="w-full lg:w-1/2 relative">
          {/* Circular Background */}
          <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-full aspect-square rounded-full bg-tiercel-red transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          
          {/* Student Image */}
          <div className={`relative z-10 flex justify-center lg:justify-end pt-8 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <img 
              src="/api/placeholder/400/500" 
              alt="Student" 
              className="object-cover max-h-96 relative z-10"
            />
            
            {/* Country Flags Orbiting */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              {['🇬🇧', '🇺🇸', '🇦🇺', '🇮🇪', '🇨🇦', '🇳🇿', '🇲🇾', '🇹🇷'].map((flag, i) => (
                <div 
                  key={i} 
                  className="absolute text-2xl filter drop-shadow-md"
                  style={{ 
                    transform: `rotate(${i * 45}deg) translateY(-160px) rotate(-${i * 45}deg)`,
                    animation: `orbit ${20 + i}s linear infinite`,
                    opacity: 0.9
                  }}
                >
                  {flag}
                </div>
              ))}
            </div>
            
            {/* Success Story Cards */}
            <div className="absolute bottom-4 -left-4 md:-left-24 w-64">
              {successStories.map((story, index) => (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 w-full bg-white rounded-lg shadow-lg p-4 transition-all duration-500 ${
                    activeStory === index 
                      ? 'opacity-100 translate-y-0 z-20' 
                      : 'opacity-0 translate-y-8 z-10'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-tiercel-blue/10 flex items-center justify-center mr-3">
                      <span className="text-sm font-bold text-tiercel-blue">{story.name[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-tiercel-blue">{story.name}</h4>
                      <p className="text-xs text-tiercel-blue/60">{story.university}, {story.country}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-tiercel-red bg-tiercel-red/10 px-2 py-1 rounded">
                      {story.stats}
                    </span>
                    <span className="text-xs text-tiercel-blue/60">Success Story</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Progress Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {successStories.map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeStory === index ? 'bg-tiercel-red scale-150' : 'bg-gray-300'
                }`}
                onClick={() => setActiveStory(index)}
                aria-label={`View story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroc;