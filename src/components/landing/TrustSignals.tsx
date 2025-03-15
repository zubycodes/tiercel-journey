
import { useRef, useEffect } from 'react';

const TrustSignals = () => {
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

  const trustBadges = [
    { label: 'Trusted by 500+ Students', image: '/placeholder.svg' },
    { label: 'ISO Certified', image: '/placeholder.svg' },
    { label: '5-Star Rated Service', image: '/placeholder.svg' },
    { label: 'Award-Winning Consultancy', image: '/placeholder.svg' }
  ];

  const partners = [
    { name: 'UK Visa Services', logo: '/placeholder.svg' },
    { name: 'British Council', logo: '/placeholder.svg' },
    { name: 'EducationUSA', logo: '/placeholder.svg' },
    { name: 'IELTS Official', logo: '/placeholder.svg' },
    { name: 'Campus France', logo: '/placeholder.svg' },
    { name: 'DAAD', logo: '/placeholder.svg' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-tiercel-light">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trust Badges */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-tiercel-blue mb-8 reveal">
            Your Success Is Guaranteed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-6 shadow-sm flex flex-col items-center reveal reveal-delay-${index * 100}`}
              >
                <img 
                  src={badge.image} 
                  alt={badge.label} 
                  className="w-16 h-16 object-contain mb-4" 
                />
                <p className="text-tiercel-blue font-medium">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partners */}
        <div className="mt-20 text-center">
          <h3 className="text-xl text-tiercel-dark/70 mb-8 reveal">Trusted Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`grayscale hover:grayscale-0 transition-all duration-300 reveal reveal-delay-${index * 100}`}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
