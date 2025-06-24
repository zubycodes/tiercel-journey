import { useRef, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Target,
  Globe,
  Award,
  BookOpen,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Tiercel helped me secure a spot at Oxford despite my low GPA! Their personalized approach to my application made all the difference.",
    name: "Zainab Ahmed",
    position: "Oxford University",
    image:
      "https://png.pngtree.com/png-clipart/20220216/ourmid/pngtree-icon-graduation-girl-avatar-png-image_4392103.png",
  },
  {
    id: 2,
    content:
      "I was overwhelmed by the US application process until I found Tiercel. Their step-by-step guidance helped me get accepted to my dream school with a scholarship!",
    name: "Ali Raza",
    position: "University of Pennsylvania",
    image:
      "https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg",
  },
  {
    id: 3,
    content:
      "The visa application seemed impossible until Tiercel's team prepared me for the interview. Their mock interviews and documentation guidance were invaluable.",
    name: "Fatima Khan",
    position: "University College Dublin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9Ak9QMFryHla2ocBcozwFGP8CenL1MI3Ag&s",
  },
];

const motivationalContent = [
  {
    icon: <Target className="text-tiercel-red" size={28} />,
    title: "Dream Big",
    content:
      "Your ambitions have no limits. We're here to help you reach even the most prestigious institutions worldwide.",
  },
  {
    icon: <Globe className="text-tiercel-red" size={28} />,
    title: "Global Perspective",
    content:
      "Education transcends borders. We'll guide you through every step of your international academic journey.",
  },
  {
    icon: <Award className="text-tiercel-red" size={28} />,
    title: "Excellence Assured",
    content:
      "We're committed to excellence in every application, interview, and personal statement we help craft.",
  },
  {
    icon: <BookOpen className="text-tiercel-red" size={28} />,
    title: "Continuous Growth",
    content:
      "Your education is just the beginning. We prepare you for a lifetime of learning and achievement.",
  },
];

const Progress = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = sectionRef.current?.querySelectorAll(".reveal");
          elements?.forEach((el) => {
            el.classList.add("active");
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
    <div>
      <section
        id="testimonials"
        ref={sectionRef}
        className="section-container bg-tiercel-blue text-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Motivational Content */}
          <div className="text-center mb-12">
            <h6 className="text-tiercel-red font-semibold mb-2 reveal">
              OUR PHILOSOPHY
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 reveal reveal-delay-100">
              Empowering Your Academic Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {motivationalContent.map((item, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl glass-panel reveal reveal-delay-${index * 100
                  }`}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-tiercel-gold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/80">{item.content}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* <section
        className="section-container bg-tiercel-white"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h6 className="text-tiercel-red font-semibold mb-2 reveal">
              SUCCESS STORIES
            </h6>
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
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="glass-panel text-tiercel-blue rounded-2xl p-8 h-full">
                      <Quote
                        className="text-tiercel-red mb-4 opacity-60"
                        size={32}
                      />
                      <p className="text-lg mb-8 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                        <div className="text-left">
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-white/70 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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

            <div className="flex items-center justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                    ? "bg-tiercel-gold w-6"
                    : "bg-white/30"
                    }`}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Progress;
