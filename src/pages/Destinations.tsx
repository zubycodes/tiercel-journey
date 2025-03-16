import React from 'react';

const Destinations = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">Explore Our Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200?text=United+States"
            alt="United States"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">United States</h2>
            <p className="text-gray-700">Discover the diverse landscapes and vibrant cities of the United States.</p>
            <a
              href="#"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200?text=United+Kingdom"
            alt="United Kingdom"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">United Kingdom</h2>
            <p className="text-gray-700">Experience the rich history and cultural heritage of the United Kingdom.</p>
            <a
              href="#"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200?text=Europe"
            alt="Europe"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Europe</h2>
            <p className="text-gray-700">Embark on a journey through the diverse countries and cultures of Europe.</p>
            <a
              href="#"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200?text=Ireland"
            alt="Ireland"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Ireland</h2>
            <p className="text-gray-700">Discover the stunning landscapes and warm hospitality of Ireland.</p>
            <a
              href="#"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;