import { useRef, useEffect, useState } from "react";
import {
  GraduationCap,
  FileText,
  Award,
  Building,
  BookOpen,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const FAQs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [destinations, setDestinations] = useState([
    { name: "Oxford", x: 25, y: 30 },
    { name: "Harvard", x: 18, y: 35 },
    { name: "Trinity", x: 28, y: 28 },
    { name: "Stanford", x: 12, y: 38 },
    { name: "Cambridge", x: 26, y: 29 },
  ]);
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

  const services = [
    {
      icon: <Building size={28} />,
      title: "University Selection & Applications",
      description:
        "Strategic guidance for selecting institutions that match your academic profile and career goals.",
    },
    {
      icon: <FileText size={28} />,
      title: "Visa Guidance & Documentation",
      description:
        "Expert assistance with visa documentation and interview preparation for success.",
    },
    {
      icon: <Award size={28} />,
      title: "Scholarship Support",
      description:
        "Identify and apply for scholarships and financial aid opportunities worldwide.",
    },
    {
      icon: <Handshake size={28} />,
      title: "Post-Admission Counseling",
      description:
        "Comprehensive support for travel arrangements, accommodation, and cultural adjustment.",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Statement of Purpose Crafting",
      description:
        "Professional guidance to create compelling personal statements that stand out.",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Career Counseling",
      description:
        "Long-term planning for academic and professional success abroad and after returning.",
    },
  ];

  return (
    <section
      id="faqs"
      ref={sectionRef}
      className="section-container bg-tiercel-blue"
    >
      {/* FAQs */}
      <div className="bg-tiercel-blue/5 p-8 rounded-2xl">
        <div className="text-center mb-16">
          <h6 className="text-tiercel-red font-bold mb-2 reveal">FAQs</h6>
          <h2 className="section-heading reveal reveal-delay-100 text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {/* FAQ 1 */}
          <div className="reveal reveal-delay-200">
            <h4 className="font-semibold text-white/90 mb-2">
              What services does Tiercel Education Consulting offer?
            </h4>
            <p className="text-sm text-white/70">
              We offer comprehensive consulting services, including university
              selection, application assistance, visa guidance, scholarship
              support, and career counseling.
            </p>
          </div>
          {/* FAQ 2 */}
          <div className="reveal reveal-delay-300">
            <h4 className="font-semibold text-white/90 mb-2">
              Which countries and universities do you specialize in?
            </h4>
            <p className="text-sm text-white/70">
              We specialize in universities in the UK, USA, Canada, Ireland,
              Australia, and Europe. Our consultants have extensive knowledge of
              the admission requirements for these regions.
            </p>
          </div>
          {/* FAQ 3 */}
          <div className="reveal reveal-delay-400">
            <h4 className="font-semibold text-white/90 mb-2">
              How does Tiercel Education Consulting personalize its services?
            </h4>
            <p className="text-sm text-white/70">
              We tailor our strategies to each student's unique academic
              profile, career goals, and personal preferences, ensuring a
              customized approach.
            </p>
          </div>
          {/* FAQ 4 */}
          <div className="reveal reveal-delay-500">
            <h4 className="font-semibold text-white/90 mb-2">
              What kind of support do you offer after a student is admitted to a
              university?
            </h4>
            <p className="text-sm text-white/70">
              We provide post-admission support, including guidance on travel
              arrangements, accommodation, and cultural adjustment to help
              students settle in smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
