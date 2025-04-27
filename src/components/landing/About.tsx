import { useEffect, useRef } from "react";
import { Play, CheckCircle } from "lucide-react";

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
      className="section-container h-[85vh] bg-tiercel-light"
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

            {/* Changed to md:grid-cols-3 to accommodate more points better on wider screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {/* Existing Point 1 */}
              <div className="flex items-start gap-3 reveal reveal-delay-300">
                {/* Replace CheckCircle with your actual icon component or SVG */}
                <svg
                  /* CheckCircle Placeholder */ className="text-tiercel-red shrink-0 mt-1"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue">
                    Expert Guidance
                  </h4>
                  <p className="text-sm text-tiercel-dark/70">
                    From professionals with decades of experience
                  </p>
                </div>
              </div>
              {/* Existing Point 2 */}
              <div className="flex items-start gap-3 reveal reveal-delay-400">
                <svg
                  /* CheckCircle Placeholder */ className="text-tiercel-red shrink-0 mt-1"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue">
                    Personalized Approach
                  </h4>
                  <p className="text-sm text-tiercel-dark/70">
                    Tailored guidance for each student's needs
                  </p>
                </div>
              </div>
              {/* Existing Point 3 */}
              <div className="flex items-start gap-3 reveal reveal-delay-500">
                <svg
                  /* CheckCircle Placeholder */ className="text-tiercel-red shrink-0 mt-1"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue">
                    Proven Results
                  </h4>
                  <p className="text-sm text-tiercel-dark/70">
                    High success rate for admissions & visas
                  </p>{" "}
                  {/* Updated text slightly */}
                </div>
              </div>
              {/* Existing Point 4 */}
              <div className="flex items-start gap-3 reveal reveal-delay-600">
                <svg
                  /* CheckCircle Placeholder */ className="text-tiercel-red shrink-0 mt-1"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue">
                    Comprehensive Support
                  </h4>
                  <p className="text-sm text-tiercel-dark/70">
                    From application to arrival and beyond
                  </p>
                </div>
              </div>
              {/* New Point 5 */}
              <div className="flex items-start gap-3 reveal reveal-delay-700">
                <svg
                  /* CheckCircle Placeholder */ className="text-tiercel-red shrink-0 mt-1"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue">
                    Global Network
                  </h4>
                  <p className="text-sm text-tiercel-dark/70">
                    Strong ties with universities worldwide
                  </p>
                </div>
              </div>
              {/* New Point 6 */}
              <div className="flex items-start gap-3 reveal reveal-delay-800">
                <svg
                  /* CheckCircle Placeholder */ className="text-tiercel-red shrink-0 mt-1"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue">
                    Student Focused
                  </h4>
                  <p className="text-sm text-tiercel-dark/70">
                    Your goals and success are our top priority
                  </p>
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
