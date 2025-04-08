import React, { useState, useEffect } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

import { 
  Book, 
  Speaker, 
  Pen, 
  Headphones, 
  Target, 
  Star, 
  Clock, 
  Globe, 
  Menu 
} from 'lucide-react';
const IELTS = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: 'Listening',
      icon: <Headphones className="mr-3 text-blue-600" size={24} />,
      description: 'Master the art of understanding spoken English in various accents and contexts.',
      details: [
        'Four sections with increasing difficulty',
        'Various question types: multiple choice, matching, plan/map/diagram labeling',
        'Time management strategies',
        'Practice with diverse audio materials'
      ]
    },
    {
      title: 'Reading',
      icon: <Book className="mr-3 text-blue-600" size={24} />,
      description: 'Develop comprehensive reading skills for academic and general contexts.',
      details: [
        'Three passages of increasing complexity',
        'Diverse text types: descriptive, factual, discursive, analytical',
        'Skimming and scanning techniques',
        'Handling academic and general reading passages'
      ]
    },
    {
      title: 'Writing',
      icon: <Pen className="mr-3 text-blue-600" size={24} />,
      description: 'Enhance your writing skills for academic and general writing tasks.',
      details: [
        'Task 1: Describe visual information',
        'Task 2: Write an essay with clear arguments',
        'Coherence and cohesion strategies',
        'Vocabulary and grammar development'
      ]
    },
    {
      title: 'Speaking',
      icon: <Speaker className="mr-3 text-blue-600" size={24} />,
      description: 'Build confidence and fluency in spoken English communication.',
      details: [
        'Three-part interview format',
        'Personal introduction and general topics',
        'Extended speaking on complex subjects',
        'Pronunciation and intonation improvement'
      ]
    }
  ];

  const scoringBands = [
    { band: '9.0', description: 'Expert User' },
    { band: '8.0-8.5', description: 'Very Good User' },
    { band: '7.0-7.5', description: 'Good User' },
    { band: '6.0-6.5', description: 'Competent User' },
    { band: '5.0-5.5', description: 'Modest User' },
    { band: '4.0-4.5', description: 'Limited User' }
  ];

  return (
    <div className="overflow-x-hidden bg-tiercel-light">
      <Navbar />
      <div className="container mx-auto py-12 pt-40">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4 flex justify-center items-center gap-3">
            <Target className="text-blue-600" size={40} />
            IELTS Preparation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive guidance and support for your IELTS journey
          </p>
        </div>

        {/* IELTS Exam Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sections.map((section) => (
            <div 
              key={section.title}
              className={`
                bg-white rounded-lg shadow-lg p-6 
                transform transition-all duration-300
                ${activeSection === section.title 
                  ? 'scale-105 shadow-2xl' 
                  : 'hover:scale-105 hover:shadow-xl'}
                cursor-pointer
              `}
              onClick={() => setActiveSection(
                activeSection === section.title ? null : section.title
              )}
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-2xl font-bold text-blue-900">
                  {section.title}
                </h2>
              </div>

              <p className="text-gray-700 mb-4">{section.description}</p>

              {activeSection === section.title && (
                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    {section.details.map((detail) => (
                      <li 
                        key={detail} 
                        className="flex items-center"
                      >
                        <Star className="mr-2 text-blue-500" size={16} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* IELTS Scoring Bands */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6 flex justify-center items-center">
            <Clock className="mr-3 text-blue-600" size={32} />
            IELTS Scoring Bands
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {scoringBands.map((band) => (
              <div 
                key={band.band} 
                className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition"
              >
                <div className="text-4xl font-bold text-blue-800 mb-3">
                  {band.band}
                </div>
                <div className="text-gray-700">
                  {band.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IELTS;