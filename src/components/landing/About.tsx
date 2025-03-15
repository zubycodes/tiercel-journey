
import { useEffect, useRef } from 'react';
import { Play, CheckCircle } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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

  return (
    <section id="about" ref={sectionRef} className="section-container bg-tiercel-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="reveal">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
              <img 
                src="/placeholder.svg" 
                alt="Tiercel Consulting team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tiercel-blue/80 to-transparent flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-tiercel-gold text-tiercel-blue flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  <Play size={24} fill="currentColor" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">Our Mission</h3>
                <p className="text-sm opacity-80">Watch our 90-second introduction</p>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div>
            <h6 className="text-tiercel-gold font-semibold mb-2 reveal">ABOUT US</h6>
            <h2 className="section-heading reveal reveal-delay-100">Soaring to New Heights</h2>
            <div className="space-y-6">
              <p className="text-lg text-tiercel-dark/80 reveal reveal-delay-200">
                Tiercel Consulting takes its name from the male falcon—swift, precise, and reliable. 
                Like our namesake, we help Pakistani students navigate the complex journey of studying abroad with 
                speed and accuracy, guiding them to prestigious institutions in the US, UK, and Ireland.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3 reveal reveal-delay-300">
                  <CheckCircle className="text-tiercel-gold shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold text-tiercel-blue">Expert Guidance</h4>
                    <p className="text-sm text-tiercel-dark/70">From professionals with decades of experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 reveal reveal-delay-400">
                  <CheckCircle className="text-tiercel-gold shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold text-tiercel-blue">Personalized Approach</h4>
                    <p className="text-sm text-tiercel-dark/70">Tailored strategies for each student's needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 reveal reveal-delay-500">
                  <CheckCircle className="text-tiercel-gold shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold text-tiercel-blue">Proven Results</h4>
                    <p className="text-sm text-tiercel-dark/70">90% success rate for visa applications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 reveal reveal-delay-600">
                  <CheckCircle className="text-tiercel-gold shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold text-tiercel-blue">Comprehensive Support</h4>
                    <p className="text-sm text-tiercel-dark/70">From application to arrival and beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
