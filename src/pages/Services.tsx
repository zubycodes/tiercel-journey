import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const Services = () => {
  return (
    <div className="overflow-x-hidden bg-tiercel-light">
      <Navbar />
      <div className="container mx-auto py-12 pt-40">
        <h1 className="text-3xl font-semibold mb-6">Our Services</h1>
        <p className="text-gray-700">
          We offer a range of services to help you achieve your goals.
        </p>

      </div>
      <Footer />
    </div>
  );
};

export default Services;