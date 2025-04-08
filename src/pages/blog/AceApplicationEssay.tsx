import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';

const AceApplicationEssay = () => {
  return (
    <div className="overflow-x-hidden bg-tiercel-light">
      <Navbar />
      <div className="container mx-auto py-12 pt-40">
        <h1 className="text-3xl font-semibold mb-4">How to Ace Your Application Essay</h1>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Introduction</h2>
        <p className="mb-4">
          Your application essay is your chance to shine and show the admissions committee who you are beyond your grades and test scores. It's an opportunity to tell your story, highlight your personality, and demonstrate your writing skills.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Key Elements of a Great Essay</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Compelling Story:</strong> Start with an engaging anecdote or personal experience.</li>
          <li><strong>Clear Thesis:</strong> State the main point you want to convey.</li>
          <li><strong>Authenticity:</strong> Be yourself and write in your own voice.</li>
          <li><strong>Strong Writing:</strong> Use proper grammar, vocabulary, and sentence structure.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Tips for Writing Your Essay</h2>
        <ol className="list-decimal list-inside mb-4">
          <li><strong>Brainstorm Ideas:</strong> Think about your experiences, values, and goals.</li>
          <li><strong>Create an Outline:</strong> Organize your thoughts and structure your essay.</li>
          <li><strong>Write a Draft:</strong> Focus on getting your ideas down on paper.</li>
          <li><strong>Revise and Edit:</strong> Refine your writing and correct any errors.</li>
          <li><strong>Get Feedback:</strong> Ask friends, family, or teachers to read your essay and provide suggestions.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Conclusion</h2>
        <p className="mb-4">
          Your application essay is a crucial part of the admissions process. By following these tips and putting in the effort, you can write an essay that showcases your strengths and helps you stand out from the crowd.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AceApplicationEssay;