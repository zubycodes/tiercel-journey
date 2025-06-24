import { useEffect, useRef } from "react";
import { Play, CheckCircle } from "lucide-react";

import logo_ceo from "./ceo.jpeg"

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section
      id="about"
      ref={sectionRef}
      className="section-container  py-20 bg-tiercel-light"
    >
      <div className="max-w-7xl mx-auto">
        {/* Assuming this div now spans the full width previously occupied by two columns */}
        <div>
          <h6 className="text-tiercel-red font-semibold mb-2 reveal">
            ABOUT US
          </h6>
          <h2 className="section-heading reveal reveal-delay-100">
            Soaring to New Heights
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-tiercel-dark/80 reveal reveal-delay-200">
              Tiercel Consulting takes its name from the male falcon—swift,
              precise, and reliable. Like our namesake, we help students
              navigate the complex journey of studying abroad with speed and
              accuracy, guiding them to prestigious institutions in the UK, USA,
              Canada, Ireland, Australia, Europe. Our foundation is built on
              trust, transparency, and a genuine passion for empowering student
              success.
            </p>

            <div className="bg-white rounded-xl shadow-md overflow-hidden reveal reveal-delay-400">
              <div className="md:flex">
                {/* CEO Image Container - Left Side (Mobile: Top) */}
                <div className="md:w-1/3 lg:w-1/4 bg-tiercel-blue">
                  <div className="h-64 md:h-full relative">
                    {/* Replace with actual CEO image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-tiercel-blue/90">
                      <img src={logo_ceo} alt="" />
                    </div>
                    {/* Overlay with Experience Stats */}
                    <div className="absolute inset-x-0 bottom-0 bg-tiercel-blue/80 p-4">
                      <div className="flex justify-center space-x-6 text-white">
                        <div className="text-center">
                          <p className="text-3xl font-bold">15+</p>
                          <p className="text-sm opacity-80">Years Experience</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold">5000+</p>
                          <p className="text-sm opacity-80">Students Placed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CEO Bio - Right Side (Mobile: Bottom) */}
                <div className="p-8 md:w-2/3 lg:w-3/4">
                  <div className="uppercase tracking-wide text-tiercel-red font-semibold">Leadership</div>
                  <h3 className="mt-1 text-2xl font-bold text-tiercel-blue">Meet Our Founder & CEO</h3>

                  <div className="mt-4">
                    <div className="flex items-center mb-4">
                      <h4 className="text-xl font-semibold text-tiercel-blue">Mahmood Ur Rehman</h4>
                      <span className="mx-2 text-tiercel-dark/30">•</span>
                      <p className="text-tiercel-red">Founder & Chief Executive Officer</p>
                    </div>

                    <p className="text-tiercel-dark/80 mb-4">
                      Driven by a clear vision to revolutionize the educational consulting landscape, Mahmood founded Tiercel Consulting. He masterfully combines his deep-seated industry expertise and an extensive network of relationships with top-tier institutions worldwide with genuine, personalized care for each student's journey, ensuring Tiercel clients receive unparalleled opportunities and insightful guidance.
                    </p>
                    <p className="text-tiercel-dark/80 mb-4">
                      With over 15+ years of shaping future of students, Mahmood Ur Rehman brings a wealth of experience and a deep passion for empowering students to achieve their academic ambitions abroad. His journey is built on a genuine commitment to guiding scholars through every step of their international education.
                    </p>
                    <p className="text-tiercel-dark/80 mb-4">

                      His expertise was significantly sharpened during his impactful tenure with Study Group, where he demonstrated exceptional leadership by adeptly spearheading the development of the crucial UK and US markets within Pakistan. Furthermore, Mahmood skillfully managed the broader dynamic South Asia market, encompassing key countries like India, Bangladesh, and Sri Lanka, showcasing his versatile market acumen.
                    </p>
                    <p className="text-tiercel-dark/80 mb-4">

                      As a distinguished foreign graduate himself, holding an Education degree from the prestigious Queen Mary University of London, Mahmood possesses an invaluable firsthand understanding of the unique challenges and transformative opportunities that await international students. This personal experience fuels his empathetic and effective approach to consulting.
                    </p>
                    {/*  <div className="flex space-x-4">
                      <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-tiercel-blue/10 text-tiercel-blue hover:bg-tiercel-blue hover:text-white transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-tiercel-blue/10 text-tiercel-blue hover:bg-tiercel-blue hover:text-white transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-tiercel-blue/10 text-tiercel-blue hover:bg-tiercel-blue hover:text-white transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                        </svg>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;
