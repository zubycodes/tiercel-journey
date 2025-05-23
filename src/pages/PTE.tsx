import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const PTE = () => {
  return (
    <div className="overflow-x-hidden bg-tiercel-light">
      <Navbar />
      <div className="container mx-auto py-12 pt-40">
        <h1 className="text-3xl font-semibold text-center mb-8">PTE</h1>
        <p className="text-gray-700 text-center">Welcome to the PTE page!</p>
      </div>
      <Footer />
    </div>
  );
};

export default PTE;