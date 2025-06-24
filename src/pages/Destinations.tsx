import React, { useEffect, useState } from "react";
import {
  Globe,
  University,
  MapPin,
  BookOpen,
  Award,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const destinations: any = [
  {
    name: "UK",
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
        src: "https://www.abneducation.com/wp-content/uploads/2020/12/Direct-UK-Universities-2021-06.png",
        isc_hidden: true
      },
      {
        name: "Durham",
        href: "https://www.durhamisc.com/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/4e083874-9c1d-47c2-b17e-c2bfcb632693/durham.svg?lossless=true&auto=format",
      },
      {
        name: "Huddersfield",
        href: "https://www.huddersfieldisc.com/",
        src: "https://logowik.com/content/uploads/images/university-of-huddersfield5613.logowik.com.webp",
        isc_hidden: true
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
        name: "Cardiff - Russel Group",
        href: "https://isc.cardiff.ac.uk/",
        src: "https://assets-us-01.kc-usercontent.com:443/95d47d95-36b6-00af-a24c-b886ecdfc4a2/7306bb6f-a21f-4801-bd60-73ed34de6c85/cardiff.svg?lossless=true&auto=format",
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
  }, {
    name: "USA",
    src: "https://tierceledconsulting.com/wp-content/uploads/destinations/usa.jpeg",
    description:
      "Home to world-renowned universities and cutting-edge research institutions, the United States offers unparalleled educational opportunities across diverse fields.",

    topFields: [
      "Computer Science",
      "Business",
      "Engineering",
      "Medical Sciences",
    ],
    partnerGroups: [
      {
        groupName: "",
        logos: [
          { name: "Western Kentucky University", href: "https://www.wku.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Direct-USA-Universities-2021-01.png" },
          { name: "New York Institute of Technology", href: "https://www.nyit.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Direct-USA-Universities-2021-02.png" },
          { name: "Hult International Business School", href: "https://www.hult.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Direct-USA-Universities-2021-03.png" },
          { name: "Florida International University", href: "https://www.fiu.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Direct-USA-Universities-2021-04.png" },
          { name: "Weber State University", href: "https://www.weber.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Direct-USA-Universities-2021-05.png" }
        ]
      },
      {
        groupName: "INTO USA",
        logos: [
          { name: "Drew", href: "http://www.drew.edu/1/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-01.png" },
          { name: "Saint Louis University", href: "https://www.slu.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-02.png" },
          { name: "The University of Arizona", href: "https://www.arizona.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-03.png" },
          { name: "Oregon State University", href: "https://oregonstate.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-04.png" },
          { name: "George Mason University", href: "https://www2.gmu.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-05.png" },
          { name: "Hofstra University", href: "https://www.hofstra.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-06.png" },
          { name: "Colorado State University", href: "https://www.colostate.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-07.png" },
          { name: "University of South Florida", href: "https://www.usf.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-08.png" },
          { name: "University of Alabama at Birmingham", href: "https://www.uab.edu/home/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-09.png" },
          { name: "Illinois State University", href: "https://illinoisstate.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-10.png" },
          { name: "Suffolk University", href: "https://www.suffolk.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-11.png" },
          { name: "Washington State University", href: "https://wsu.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-12.png" },
          { name: "Glasgow Caledonian University", href: "https://www.gcu.ac.uk/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-13.png" },
          // NYU was here in thought process, but moved to SHORELIGHT based on HTML section. The item with image ...2021-14.png is NYU.
          { name: "Fisher College", href: "https://www.fisher.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-15.png" },
          { name: "New England College", href: "https://www.nec.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-16.png" },
          { name: "Quinnipiac University", href: "https://www.qu.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-17.png" }
        ]
      },
      {
        groupName: "NAVITAS USA",
        logos: [
          { name: "Richard Bland College of William & Mary", href: "https://www.rbc.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Navitas-USA-Universities-2021-01.png" },
          { name: "University of Massachusetts Boston", href: "https://www.umb.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Navitas-USA-Universities-2021-02.png" },
          { name: "Queens College", href: "https://www.qc.cuny.edu/Pages/home.aspx", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Navitas-USA-Universities-2021-03.png" },
          { name: "SAE Institute", href: "https://www.sae.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Navitas-USA-Universities-2021-04.png" }
        ]
      },
      {
        groupName: "SHORELIGHT USA",
        logos: [
          { name: "Adelphi University", href: "https://www.adelphi.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-01.png" },
          { name: "American University", href: "https://www.american.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-02.png" },
          { name: "Auburn University", href: "https://www.auburn.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-03.png" },
          { name: "University of Illinois at Chicago", href: "https://www.uic.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-04.png" },
          { name: "Florida International University", href: "https://www.fiu.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-05.png" },
          { name: "Louisiana State University", href: "https://www.lsu.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-06.png" },
          { name: "University of Central Florida", href: "https://www.ucf.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-07.png" },
          { name: "University of Dayton", href: "https://udayton.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-08.png" },
          { name: "University of Kansas", href: "https://ku.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-09.png" },
          { name: "University of the Pacific", href: "https://www.pacific.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-10.png" },
          { name: "University of South Carolina", href: "https://sc.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-11.png" },
          { name: "The University of Utah", href: "https://www.utah.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-12.png" },
          { name: "Gonzaga University", href: "https://www.gonzaga.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-13.png" },
          { name: "American Collegiate", href: "https://americancollegiate.com/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-14.png" },
          { name: "New York University", href: "https://www.nyu.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/INTO-USA-Universities-2021-14.png" }, // Image path is INTO, link had uni_city_name=INTO USA, but placed under SHORELIGHT per section
          { name: "University of Mississippi", href: "https://olemiss.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-15.png" },
          { name: "Cleveland State University", href: "https://www.csuohio.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/Shorelight-USA-Universities-2021-16.png" }
        ]
      },
     /*  {
        groupName: "EDUCO USA",
        logos: [
          { name: "Duquesne University", href: "https://www.duq.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/EDUCO-USA-Universities-2021-01.png" },
          { name: "University of Maryland, Baltimore County", href: "https://www.umbc.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/EDUCO-USA-Universities-2021-02.png" },
          { name: "University of Nebraska-Lincoln", href: "https://www.unl.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/EDUCO-USA-Universities-2021-03.png" },
          { name: "Seattle Pacific University", href: "https://spu.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/EDUCO-USA-Universities-2021-04.png" },
          { name: "DUKE", href: "https://duke.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/EDUCO-USA-Universities-2021-05.png" },
          { name: "Stevens Institute of Technology", href: "https://www.stevens.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/EDUCO-USA-Universities-2021-06.png" }
        ]
      },
      {
        groupName: "KAPLAN USA",
        logos: [
          { name: "Arizona State University", href: "https://www.asu.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/KAPLAN-USA-Universities-2021-01.png" },
          { name: "Northeastern University", href: "https://www.northeastern.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/KAPLAN-USA-Universities-2021-02.png" },
          { name: "Pace University", href: "https://www.pace.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/KAPLAN-USA-Universities-2021-03.png" },
          { name: "The University of Tulsa", href: "https://utulsa.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/KAPLAN-USA-Universities-2021-04.png" },
          { name: "Simmons University", href: "https://www.simmons.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/KAPLAN-USA-Universities-2021-05.png" }
        ]
      }, */
      {
        groupName: "SG USA",
        logos: [
          { name: "James Madison University", href: "https://www.jmu.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/SG-USA-Universities-2021-01.png" },
          { name: "LIU Post", href: "https://liu.edu/post", src: "https://www.abneducation.com/wp-content/uploads/2020/12/SG-USA-Universities-2021-02.png" },
          { name: "Long Island University Brooklyn", href: "https://liu.edu/brooklyn", src: "https://www.abneducation.com/wp-content/uploads/2020/12/SG-USA-Universities-2021-03.png" },
          { name: "Western Washington University", href: "https://www.wwu.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/SG-USA-Universities-2021-04.png" },
          { name: "DePaul University", href: "https://www.depaul.edu/Pages/default.aspx", src: "https://www.abneducation.com/wp-content/uploads/2020/12/SG-USA-Universities-2021-08.png" },
          { name: "Texas A&M University-Corpus Christi", href: "https://tamucc.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/SG-USA-Universities-2021-05.png" },
          { name: "Baylor University", href: "https://www.baylor.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/SG-USA-Universities-2021-06.png" },
          { name: "Lipscomb University", href: "https://www.lipscomb.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/SG-USA-Universities-2021-07.png" },
          { name: "University of Hartford", href: "https://www.hartford.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/SG-USA-Universities-2021-09.png" }
        ]
      },
      /* {
        groupName: "CEG USA",
        logos: [
          { name: "Illinois Institute of Technology", href: "https://www.iit.edu/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/CEG-USA-Universities-2021-01.png" },
          { name: "CATS Academy Boston", href: "https://www.catsacademyboston.com/", src: "https://www.abneducation.com/wp-content/uploads/2020/12/CEG-USA-Universities-2021-02.png" },
          { name: "ONCAMPUS Boston", href: "https://www.oncampus.global/cn/usa/campuses/oncampus-boston/welcome.htm", src: "https://www.abneducation.com/wp-content/uploads/2020/12/CEG-USA-Universities-2021-03.png" }
        ]
      } */
    ]
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
    partnerLogos: [
      {
        name: "University College Dublin",
        href: "https://www.ucd.ie/",
        src: "https://www.abneducation.com/wp-content/uploads/2020/12/IRELAND-Universities-2021-01.png",
      }
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
            className={`text-center text-blue-900/85 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-500 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
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

          {/* Destinations Grid */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className={`
                  relative overflow-hidden rounded-xl shadow-lg 
                  transform transition-all duration-700 
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                  hover:shadow-xl
                  cursor-pointer
                `}
                onClick={() => setActiveDestination(
                  activeDestination === destination.name ? null : destination.name
                )}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-25"
                  style={{ backgroundImage: `url(${destination.src})` }}
                />

                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <MapPin className="text-blue-600 mr-3" size={24} />
                      <h2 className="text-2xl font-bold text-blue-900">{destination.name}</h2>
                    </div>
                    {activeDestination === destination.name ? (
                      <ChevronUp className="text-blue-600" size={24} />
                    ) : (
                      <ChevronDown className="text-blue-600" size={24} />
                    )}
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {destination.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Expanded Destination Details */}
          {activeDestination && (() => {
            const currentDestinationData = destinations.find(d => d.name === activeDestination);
            if (!currentDestinationData) return null;

            // USA: Render with Partner Groups
            if (currentDestinationData.name === "USA" && currentDestinationData.partnerGroups) {
              return (
                <div className="mt-8 bg-white rounded-xl shadow-xl p-6 sm:p-8 transition-all duration-500 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                    <University className="mr-3 text-blue-600" size={32} />
                    {activeDestination}
                  </h2>
                  {currentDestinationData.partnerGroups.map((group, groupIndex) => (
                    <div key={group.groupName} className={groupIndex > 0 ? "mt-10" : ""}>
                      <h3 className="text-2xl font-semibold text-blue-800 mb-5 border-b-2 border-blue-200 pb-3">
                        {group.groupName}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8">
                        {group.logos.map((logo) => (
                          <a
                            key={logo.name}
                            href={logo.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={logo.name}
                            className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-44"
                          >
                            <img
                              src={logo.src}
                              alt={`${logo.name} Logo`}
                              className="max-h-24 w-auto object-contain mb-3 flex-grow"
                            />
                            <span className="font-medium text-sm text-gray-800 text-center break-words leading-tight">
                              {logo.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
            // Other Countries: Render with partnerLogos (if available)
            else if (currentDestinationData.partnerLogos && currentDestinationData.partnerLogos.length > 0) {
              return (
                <div className="mt-8 bg-white rounded-xl shadow-xl p-6 sm:p-8 transition-all duration-500 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center">
                    <University className="mr-3 text-blue-600" size={32} />
                    {activeDestination} - Partner Universities
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8">
                    {currentDestinationData.partnerLogos.map((logo) => (
                      <a
                        key={logo.name}
                        href={logo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={logo.name}
                        className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-44"
                      >
                        <img
                          src={logo.src}
                          alt={`${logo.name} Logo`}
                          className="max-h-24 w-auto object-contain mb-3 flex-grow"
                        />
                        <span className="font-medium text-sm text-gray-800 text-center break-words leading-tight">
                          {logo.name}
                        </span>
                        {/* This was from the original UK example, kept for compatibility if needed for some logos */}
                        {!logo.isc_hidden && logo.name !== "Cardiff" && ( // Example of specific conditional text
                          <span className="text-xs text-blue-500 text-center mt-1">
                            International Study Centre
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            // Fallback: Render with universities list (if partnerLogos is not available or empty)
            else if (currentDestinationData.universities && currentDestinationData.universities.length > 0) {
              return (
                <div className="mt-8 bg-white rounded-xl shadow-xl p-6 sm:p-8 transition-all duration-500 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
                    <University className="mr-3 text-blue-600" size={32} />
                    {activeDestination} - Featured Universities
                  </h2>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <ul className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3">
                      {currentDestinationData.universities.map((uni) => (
                        <li
                          key={uni}
                          className="flex items-center text-gray-700 hover:text-blue-700 transition-colors duration-200"
                        >
                          <ChevronRight className="mr-2 text-blue-500 flex-shrink-0" size={18} />
                          <span className="text-base">{uni}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }
            // If no specific content to show for the expanded section
            return (
              <div className="mt-8 bg-white rounded-xl shadow-xl p-6 transition-all duration-500 animate-fadeIn">
                <p className="text-gray-600">Further details for {activeDestination} will be available soon.</p>
              </div>
            );
          })()}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationsPage;
