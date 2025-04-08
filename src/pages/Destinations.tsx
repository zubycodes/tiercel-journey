import React, { useEffect, useState } from 'react';
import { 
  Globe, 
  University, 
  MapPin, 
  BookOpen, 
  Award, 
  ChevronRight 
} from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const destinations = [
  {
    name: 'United States',
    src: 'https://tierceledconsulting.com/wp-content/uploads/destinations/usa.jpeg',
    description: 'Home to world-renowned universities and cutting-edge research institutions, the United States offers unparalleled educational opportunities across diverse fields.',
    universities: [
      'Harvard University',
      'Stanford University',
      'MIT',
      'Yale University',
      'Princeton University'
    ],
    topFields: ['Computer Science', 'Business', 'Engineering', 'Medical Sciences']
  },
  {
    name: 'United Kingdom',
    src: 'https://tierceledconsulting.com/wp-content/uploads/destinations/uk.jpeg',
    description: 'With a rich academic heritage, the UK provides world-class education through historic and innovative institutions known for academic excellence.',
    universities: [
      'University of Oxford',
      'University of Cambridge',
      'Imperial College London',
      'University College London',
      'London School of Economics'
    ],
    topFields: ['Economics', 'Law', 'Engineering', 'Social Sciences', 'Business']
  },
  {
    name: 'Canada',
    src: 'https://tierceledconsulting.com/wp-content/uploads/destinations/canada.jpeg',
    description: 'Canada offers a welcoming environment with high-quality education, multicultural campuses, and excellent research opportunities.',
    universities: [
      'University of Toronto',
      'McGill University',
      'University of British Columbia',
      'University of Waterloo',
      'Queen\'s University'
    ],
    topFields: ['Computer Science', 'Environmental Studies', 'Business', 'Engineering']
  },
  {
    name: 'Australia',
    src: 'https://tierceledconsulting.com/wp-content/uploads/destinations/aus.jpeg',
    description: 'Known for innovative teaching methods and world-class research, Australian universities provide a unique and globally recognized education.',
    universities: [
      'University of Melbourne',
      'Australian National University',
      'University of Sydney',
      'University of Queensland',
      'Monash University'
    ],
    topFields: ['Marine Sciences', 'Renewable Energy', 'Digital Media', 'Biotechnology']
  },
  {
    name: 'Europe',
    src: 'https://tierceledconsulting.com/wp-content/uploads/destinations/europe.jpeg',
    description: 'Europe offers a rich tapestry of educational experiences, combining centuries-old academic traditions with modern, innovative learning approaches.',
    universities: [
      'ETH Zurich',
      'University of Amsterdam',
      'Sciences Po Paris',
      'Technical University of Munich',
      'University of Copenhagen'
    ],
    topFields: ['International Relations', 'Design', 'Technology', 'Sustainable Development']
  },
  {
    name: 'Ireland',
    src: 'https://tierceledconsulting.com/wp-content/uploads/destinations/ireland.jpeg',
    description: 'Ireland provides a warm, innovative educational environment with strong international connections and a focus on cutting-edge research.',
    universities: [
      'Trinity College Dublin',
      'University College Dublin',
      'National University of Ireland, Galway',
      'University of Limerick',
      'Dublin City University'
    ],
    topFields: ['Technology', 'Pharmaceuticals', 'Literature', 'Global Business']
  }
];

const DestinationsPage = () => {
  const [activeDestination, setActiveDestination] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-x-hidden">
    <Navbar />
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      
      <div className="container mx-auto px-4 mt-16 py-16">
        <div className={`text-center text-tiercel-blue/85 mb-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-4xl font-bold text-blue-900 mb-4 flex justify-center items-center gap-3">
            <Globe className="text-blue-600" size={40} />
            DREAM Education Destinations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover world-class educational opportunities across continents, tailored to your academic aspirations and career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.name}
              className={`
                relative overflow-hidden rounded-xl shadow-lg 
                transform transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} 
                hover:scale-102 hover:shadow-2xl hover:text-black
                cursor-pointer
              `}
              onClick={() => setActiveDestination(
                activeDestination === destination.name ? null : destination.name
              )}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{backgroundImage: `url(${destination.src})`}}
              />

              {/* Content */}
              <div className="relative z-10 p-6 bg-tiercel-blue bg-opacity-30 hover:bg-opacity-0">
                <div className="flex items-center mb-4">
                  <MapPin className="text-blue-600 mr-3 text-tiercel-red" size={24} />
                  <h2 className="text-2xl font-bold text-blue-900">
                    {destination.name}
                  </h2>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-3 hover:text-black">
                  {destination.description}
                </p>

                  <div className="mt-6">
                    <div className="mb-4">
                      <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <University className="mr-2 text-tiercel-red" size={20} />
                        Universities
                      </h3>
                      <ul className="space-y-2">
                        {destination.universities.map((uni) => (
                          <li 
                            key={uni} 
                            className="flex items-center text-gray-700 hover:text-blue-600 transition"
                          >
                            <ChevronRight className="mr-2 text-tiercel-red" size={16} />
                            {uni}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <Award className="mr-2 text-tiercel-red" size={20} />
                        Academic Fields
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {destination.topFields.map((field) => (
                          <span 
                            key={field} 
                            className="
                              px-3 py-1 
                              bg-blue-100 text-blue-800 
                              rounded-full text-sm
                              hover:bg-blue-200 transition
                            "
                          >
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

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