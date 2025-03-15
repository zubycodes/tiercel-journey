
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Tiercel helped me secure a spot at Oxford despite my low GPA! Their personalized approach to my application made all the difference.",
    name: "Zainab Ahmed",
    position: "Oxford University",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    content: "I was overwhelmed by the US application process until I found Tiercel. Their step-by-step guidance helped me get accepted to my dream school with a scholarship!",
    name: "Ali Raza",
    position: "University of Pennsylvania",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    content: "The visa application seemed impossible until Tiercel's team prepared me for the interview. Their mock interviews and documentation guidance were invaluable.",
    name: "Fatima Khan",
    position: "University College Dublin",
    image: "/placeholder.svg"
  }
];

const stats = [
  { value: '50+', label: 'Students Admitted to Top Universities in 2024' },
  { value: '90%', label: 'Visa Success Rate' },
  { value: '75%', label: 'Students Received Scholarships' },
  { value: '100%', label: 'Satisfaction Rate' }
];

const Progress = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
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
    <section id="testimonials" ref={sectionRef} className="section-container bg-tiercel-blue text-white">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center p-6 rounded-xl glass-panel reveal reveal-delay-${index * 100}`}>
              <div className="text-4xl font-bold text-tiercel-gold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h6 className="text-tiercel-gold font-semibold mb-2 reveal">SUCCESS STORIES</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 reveal reveal-delay-100">
            Hear From Our Students
          </h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto reveal reveal-delay-200">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="glass-panel rounded-2xl p-8 h-full">
                    <Quote className="text-tiercel-gold mb-4 opacity-60" size={32} />
                    <p className="text-lg mb-8 text-white/90 italic">"{testimonial.content}"</p>
                    <div className="flex items-center justify-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div className="text-left">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-white/70 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white text-tiercel-blue w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-80 hover:opacity-100 transition-opacity"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white text-tiercel-blue w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-80 hover:opacity-100 transition-opacity"
            onClick={nextSlide}
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Dots */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-tiercel-gold w-6' : 'bg-white/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
