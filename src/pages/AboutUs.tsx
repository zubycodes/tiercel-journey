import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const AboutUs = () => {
  return (
    <div className="overflow-x-hidden bg-tiercel-light">
      <Navbar />
      <div className="container mx-auto py-12 pt-40">
        <h1 className="text-3xl font-semibold mb-6">About Us</h1>
        <p className="text-gray-700">
          We are a team of experts dedicated to helping you succeed.
        </p>
        <p className="text-gray-700 mt-4">
          Our mission is to provide the best possible service to our clients.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;