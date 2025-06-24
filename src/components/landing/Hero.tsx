import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CountryFlags from "./CountryFlags";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Heroc from "./Heroc";
import Herod from "./Herod";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedHero, setSelectedHero] = useState("Hero"); // Default to Hero
  const pathRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderHero = () => {
    switch (selectedHero) {
      /* case "Hero1":
        return <Hero1 />;
      case "Hero2":
        return <Hero2 />;
      case "Herod":
        return <Herod />;
      case "Heroc":
        return <Heroc />; */
      default:
        return (
          <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
            {/* Rest of the Hero content remains the same */}
            <div className="relative z-10 container mx-auto px-6 text-center">
              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-bold text-tiercel-blue/85 mb-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                Your Gateway to{" "}
                <span className="text-tiercel-red">DREAM Education</span>
              </h1>

              <p
                className={`text-lg md:text-xl text-tiercel-blue/80 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-700 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                Fast, personalized guidance for students seeking admission to
                top universities in the UK, USA, Canada, Ireland, Australia,
                Europe
              </p>

              <div
                className={`transition-all duration-1000 delay-900 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <Link
                  to="/consultation"
                  className="btn-primary bg-tiercel-blue/90 inline-flex items-center gap-2 text-lg group"
                >
                  Start Your Journey
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Link>
              </div>
              <br />
              {/* Advanced Flight Path Background */}
              <div className="absolute inset-0 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  viewBox="0 0 1200 800"
                >
                  <defs>
                    {/* Gradient for path */}
                    <linearGradient
                      id="pathGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop
                        offset="100%"
                        stopColor="#2563EB"
                        stopOpacity="0.1"
                      />
                    </linearGradient>

                    {/* Complex flight path */}
                    <path
                      id="complexPath"
                      d="M-100,100 Q200,300 400,200 C600,100 800,250 1000,150 Q1200,50 1300,200"
                      fill="none"
                      stroke="url(#pathGradient)"
                      strokeWidth="2"
                    />

                    {/* Plane icon path */}
                    <path
                      id="planeIcon"
                      d="M0,0 L0,-5 L5,0 L0,5 Z"
                      stroke="#0a2342e6"
                      strokeWidth="1"
                      fill="none"
                    />
                  </defs>

                  {/* Animated path */}
                  <use
                    href="#complexPath"
                    strokeDasharray="10,10"
                    strokeDashoffset="0"
                    className="animate-dash"
                  />

                  {/* Animated plane */}
                  <animateMotion
                    href="#planeIcon"
                    dur="15s"
                    repeatCount="indefinite"
                    rotate="auto"
                    path="M-100,100 Q200,300 400,200 C600,100 800,250 1000,150 Q1200,50 1300,200"
                  />
                  <use
                    href="#planeIcon"
                    x="-100"
                    y="100"
                    className="animate-plane"
                  />
                </svg>
              </div>

              <div
                className={`transition-all duration-1000 delay-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <CountryFlags />
                <div className="text-center">
                  <div className="bg-transparent  text-blue-700 font-bold px-4 py-1 rounded-md inline-block">
                    {/* IVY LEAGUE{" "} */}
                    <span className="bg-red-600 text-white px-2 ml-1 rounded-sm">
                      RUSSELL GROUP UNIVERSITIES
                    </span>
                  </div>
                  {/* <div className="text-sm mt-2">
                    UK | USA | CANADA | IRELAND | AUSTRALIA | EUROPE
                  </div> */}
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-8 h-12 rounded-full border-2 border-blue/30 flex items-start justify-center p-1">
                <div className="w-1.5 h-3 bg-tiercel-blue/60 rounded-full animate-pulse-subtle"></div>
              </div>
            </div>
          </section>
        );
    }
  };

  return (
    <>
      <div className="relative z-40">
        <button
          className="px-1 mx-1 bg-tiercel-blue/90"
          onClick={() => setSelectedHero("Hero")}
        >
          Hero
        </button>
        <button
          className="px-1 mx-1 bg-tiercel-blue/90"
          onClick={() => setSelectedHero("Hero1")}
        >
          Hero 1
        </button>
        <button
          className="px-1 mx-1 bg-tiercel-blue/90"
          onClick={() => setSelectedHero("Hero2")}
        >
          Hero 2
        </button>
        <button
          className="px-1 mx-1 bg-tiercel-blue/90"
          onClick={() => setSelectedHero("Heroc")}
        >
          Hero 3
        </button>
        <button
          className="px-1 mx-1 bg-tiercel-blue/90"
          onClick={() => setSelectedHero("Herod")}
        >
          Hero 4
        </button>
      </div>
      {renderHero()}
    </>
  );
};

export default Hero;
