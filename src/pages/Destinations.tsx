import React, { useEffect, useState } from "react";
import {
  Globe,
  University,
  MapPin,
  BookOpen,
  Award,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const destinations = [
  {
    name: "United States",
    src: "https://tierceledconsulting.com/wp-content/uploads/destinations/usa.jpeg",
    description:
      "Home to world-renowned universities and cutting-edge research institutions, the United States offers unparalleled educational opportunities across diverse fields.",

    topFields: [
      "Computer Science",
      "Business",
      "Engineering",
      "Medical Sciences",
    ],
    // Add the logo data specifically for UK
    partnerLogos: [
      {
        name: "California State University San Marcos",
        href: "https://students.studygroup.com/study-options/direct-admit/california-state-university-san-marcos",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/c531ce33-bc53-4cf5-8fa3-9cc4912397b3/CSUSM.svg?lossless=true&auto=format",
      },
      {
        name: "DePaul University",
        href: "https://students.studygroup.com/study-options/direct-admit/depaul-university",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/cb8201a9-16c4-40a3-b306-61c51f2eff93/depaul.svg?lossless=true&auto=format",
      },
      {
        name: "Florida Atlantic University",
        href: "https://students.studygroup.com/study-options/direct-admit/florida-atlantic-university",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/64d1125c-3d16-4ba8-9bd9-6d2aaaf8fd9c/fau-24.svg?lossless=true&auto=format",
      },
      {
        name: "University of Hartford",
        href: "https://students.studygroup.com/study-options/direct-admit/university-of-hartford",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/07956c35-d34f-40ce-82e4-498b46923256/hartford.svg?lossless=true&auto=format",
      },
      {
        name: "James Madison University",
        href: "https://students.studygroup.com/study-options/direct-admit/james-madison-university",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/e38a4c29-cbb9-414f-85fd-318f599e6c00/jmu.svg?lossless=true&auto=format",
      },
      {
        name: "Lipscomb University",
        href: "https://students.studygroup.com/study-options/direct-admit/lipscomb-university",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/ef75327a-7771-45bd-9bcb-71c478ac3400/lipscomb.svg?lossless=true&auto=format",
      },
      {
        name: "Long Island University",
        href: "https://students.studygroup.com/study-options/direct-admit/long-island-university",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/cf8951dd-5e42-4709-b437-bdfdd192b47d/liu.svg?lossless=true&auto=format",
      },
      {
        name: "University of Nebraska Omaha",
        href: "https://students.studygroup.com/study-options/direct-admit/university-of-nebraska-at-omaha",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/aa6cef5e-0423-4c5a-8ba2-f38d9ec60355/Nebraska_Omaha.svg?lossless=true&auto=format",
      },
      {
        name: "Texas A&M University-Corpus Christi",
        href: "https://students.studygroup.com/study-options/direct-admit/texas-am-corpus-christi",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/9710a363-3adf-43cc-9082-fc9546696f64/texas.svg?lossless=true&auto=format",
      },
      {
        name: "Towson University",
        href: "https://students.studygroup.com/study-options/direct-admit/towson-university",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/e093ab4f-0f4b-4cd8-92b7-5c1daabca702/towson.svg?lossless=true&auto=format",
      },
      {
        name: "Western Washington University",
        href: "https://students.studygroup.com/study-options/direct-admit/western-washington-university",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/420bc000-4f3f-4d33-9ecb-71ea2dc2731b/wwu.svg?lossless=true&auto=format",
      },
    ],
  },
  {
    name: "United Kingdom",
    src: "https://tierceledconsulting.com/wp-content/uploads/destinations/uk.jpeg",
    description:
      "With a rich academic heritage, the UK provides world-class education through historic and innovative institutions known for academic excellence.",
    // We'll replace the text list with logos for UK, but keep data if needed elsewhere
    universities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London",
      "London School of Economics",
    ],
    topFields: [
      "Economics",
      "Law",
      "Engineering",
      "Social Sciences",
      "Business",
    ],
    // Add the logo data specifically for UK
    partnerLogos: [
      {
        name: "Aberdeen",
        href: "https://www.aberdeen-isc.ac.uk/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/b8900069-d7fc-40c7-a202-d090bef00189/Aberdeen_logo_black_resized_174634.jpg?lossless=true&auto=format",
      },
      {
        name: "Cardiff",
        href: "https://isc.cardiff.ac.uk/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/7306bb6f-a21f-4801-bd60-73ed34de6c85/cardiff.svg?lossless=true&auto=format",
      },
      {
        name: "Durham",
        href: "https://www.durhamisc.com/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/4e083874-9c1d-47c2-b17e-c2bfcb632693/durham.svg?lossless=true&auto=format",
      },
      {
        name: "Huddersfield",
        href: "https://www.huddersfieldisc.com/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/a1077874-9e1e-4c85-90c5-d601c52f7350/huddersfield.svg?lossless=true&auto=format",
      },
      {
        name: "Huddersfield London",
        href: "https://london.hud.ac.uk/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/0ea58626-f7f2-4d1f-8d7d-f2bfa1e989ae/huds_london.svg?lossless=true&auto=format",
      },
      {
        name: "Kingston",
        href: "https://www.kingstonisc.com/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/78953b09-36f1-4f0c-902b-d256b2759237/kingston.svg?lossless=true&auto=format",
      },
      {
        name: "Leeds",
        href: "http://www.leedsisc.com/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/97e23015-8514-4c8f-8ff6-d0301eae1f08/leeds.svg?lossless=true&auto=format",
      },
      {
        name: "Leeds Beckett",
        href: "https://isc.leedsbeckett.ac.uk/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/10bff8c3-f5c9-4e8e-8700-2fb6383fdff2/leedsbeckett.svg?lossless=true&auto=format",
      },
      {
        name: "LJMU",
        href: "https://www.ljmuisc.com/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/978ab907-0805-467f-974e-fedb7bdcba8d/ljmu.svg?lossless=true&auto=format",
      },
      {
        name: "RHUL",
        href: "https://www.rhulisc.com/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/0fbe5b6c-8bdb-401f-befc-98eed536218d/rhul.svg?lossless=true&auto=format",
      },
      {
        name: "Sheffield",
        href: "https://usic.sheffield.ac.uk/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/959a0f81-0cc3-4115-8013-3958627c32af/PayOnline_Sheffield_Logo.png?lossless=true&auto=format",
      },
      {
        name: "Strathclyde",
        href: "https://isc.strath.ac.uk/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/42ef92fc-bea9-4f0f-af18-a345d5dce4f0/strathclyde.svg?lossless=true&auto=format",
      },
      {
        name: "Surrey",
        href: "https://isc.surrey.ac.uk/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/74f63e45-6a84-45e9-a5d8-29875539400f/Surrey23-resize.svg?lossless=true&auto=format",
      },
      {
        name: "Sussex",
        href: "https://isc.sussex.ac.uk/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/6f4f40b1-181b-414e-adc0-93e47f3bbaa6/sussex.svg?lossless=true&auto=format",
      },
      {
        name: "Teesside",
        href: "https://isc.tees.ac.uk/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/26e35e31-2180-4a8e-a06c-3c06dc7f000b/TEE_Logo_Black_159489.png?lossless=true&auto=format",
      },
      // Add more logos here if needed
    ],
  },
  {
    name: "Canada",
    src: "https://tierceledconsulting.com/wp-content/uploads/destinations/canada.jpeg",
    description:
      "Canada offers a welcoming environment with high-quality education, multicultural campuses, and excellent research opportunities.",
    universities: [
      "University of Toronto",
      "McGill University",
      "University of British Columbia",
      "University of Waterloo",
      "Queen's University",
    ],
    topFields: [
      "Computer Science",
      "Environmental Studies",
      "Business",
      "Engineering",
    ],
  },
  {
    name: "Australia",
    src: "https://tierceledconsulting.com/wp-content/uploads/destinations/aus.jpeg",
    description:
      "Known for innovative teaching methods and world-class research, Australian universities provide a unique and globally recognized education.",
    universities: [
      "University of Melbourne",
      "Australian National University",
      "University of Sydney",
      "University of Queensland",
      "Monash University",
    ],
    topFields: [
      "Marine Sciences",
      "Renewable Energy",
      "Digital Media",
      "Biotechnology",
    ],
  },
  {
    name: "Europe",
    src: "https://tierceledconsulting.com/wp-content/uploads/destinations/europe.jpeg",
    description:
      "Europe offers a rich tapestry of educational experiences, combining centuries-old academic traditions with modern, innovative learning approaches.",
    universities: [
      "ETH Zurich",
      "University of Amsterdam",
      "Sciences Po Paris",
      "Technical University of Munich",
      "University of Copenhagen",
    ],
    topFields: [
      "International Relations",
      "Design",
      "Technology",
      "Sustainable Development",
    ],
  },
  {
    name: "Ireland",
    src: "https://tierceledconsulting.com/wp-content/uploads/destinations/ireland.jpeg",
    description:
      "Ireland provides a warm, innovative educational environment with strong international connections and a focus on cutting-edge research.",
    universities: [
      "Trinity College Dublin",
      "University College Dublin",
      "National University of Ireland, Galway",
      "University of Limerick",
      "Dublin City University",
    ],
    topFields: [
      "Technology",
      "Pharmaceuticals",
      "Literature",
      "Global Business",
    ],
  },
];

const DestinationsPage = () => {
  const [activeDestination, setActiveDestination] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 mt-16 py-16">
          <div
            className={`text-center text-tiercel-blue/85 mb-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h1 className="text-4xl font-bold text-blue-900 mb-4 flex justify-center items-center gap-3">
              <Globe className="text-blue-600" size={40} />
              DREAM Education Destinations
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover world-class educational opportunities across continents,
              tailored to your academic aspirations and career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className={`
                relative overflow-hidden rounded-xl shadow-lg 
                transform transition-all duration-1000 delay-700 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                } 
                hover:scale-102 hover:shadow-2xl hover:text-black
                cursor-pointer
              `}
                onClick={() =>
                  setActiveDestination(
                    activeDestination === destination.name
                      ? null
                      : destination.name
                  )
                }
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url(${destination.src})` }}
                />

                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="flex items-center mb-4">
                    <MapPin
                      className="text-blue-600 mr-3 text-tiercel-red"
                      size={24}
                    />
                    <h2 className="text-2xl font-bold text-blue-900">
                      {destination.name}
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3 hover:text-black">
                    {destination.description}
                  </p>

                  {/* --- Conditional Rendering for UK Logos --- */}
                  {destination.name === "United States" ||
                  (destination.name === "United Kingdom" &&
                    destination.partnerLogos) ? (
                    <div className="mb-5">
                      {/* <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                         <University className="mr-2 text-tiercel-red" size={20} />
                         Partner Institutions
                       </h3> */}
                      <div className="p-3 rounded-md">
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                          {destination.partnerLogos.map((logo) => (
                            <a
                              key={logo.name}
                              href={logo.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={logo.name} // Add tooltip for accessibility
                              className="flex justify-center items-center p-2 bg-white/20 rounded border border-gray-200 hover:shadow-md transition"
                            >
                              <img
                                src={logo.src}
                                alt={`${logo.name} logo`}
                                className="max-h-20 w-auto object-contain" // Adjusted max height
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* --- Render University List for other countries --- */
                    <div className="mb-5">
                      <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <University
                          className="mr-2 text-tiercel-red"
                          size={20}
                        />
                        Top Universities
                      </h3>
                      <ul className="space-y-1">
                        {destination.universities.map((uni) => (
                          <li
                            key={uni}
                            className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition"
                          >
                            <ChevronRight
                              className="mr-1 text-tiercel-red flex-shrink-0"
                              size={14}
                            />
                            {uni}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* <div className="mt-4 flex justify-between items-center">
                  <BookOpen className="text-blue-600" size={24} />
                  <span className="text-blue-800 font-semibold">
                    {activeDestination === destination.name 
                      ? 'Collapse Details' 
                      : 'Explore Destination'}
                  </span>
                </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationsPage;
