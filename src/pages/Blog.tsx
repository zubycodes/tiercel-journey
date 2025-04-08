import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="overflow-x-hidden bg-tiercel-light">
      <Navbar />
      <div className="container mx-auto py-12 pt-40">
        <h1 className="text-3xl font-semibold text-center mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="shadow-md rounded-md overflow-hidden">
            <img
              src="https://assets.grok.com/users/3960d952-69ad-4907-ad16-04ffc3047dc7/NmyRVTS9Rg7DKF6b-generated_image.jpg"
              alt="Top Universities"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Top Universities for students in 2025</h2>
              <p className="text-gray-700">Read about the best universities for students.</p>
              <Link to="/blog/top-universities" className="inline-block mt-4 bg-tiercel-blue text-white py-2 px-4 rounded-md hover:bg-tiercel-secondary">
                Read More
              </Link>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="shadow-md rounded-md overflow-hidden">
            <img
              src="https://assets.grok.com/users/3960d952-69ad-4907-ad16-04ffc3047dc7/0GnndmQpfzm6k0H6-generated_image.jpg"
              alt="Ace Application Essay"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">How to Ace Your Application Essay</h2>
              <p className="text-gray-700">Learn how to write an outstanding application essay.</p>
              <Link to="/ace-application-essay" className="inline-block mt-4 bg-tiercel-blue text-white py-2 px-4 rounded-md hover:bg-tiercel-secondary">
                Read More
              </Link>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="shadow-md rounded-md overflow-hidden">
            <img
              src="https://assets.grok.com/users/3960d952-69ad-4907-ad16-04ffc3047dc7/RpYqDUiMADWSwzHp-generated_image.jpg"
              alt="Scholarship Opportunities"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Scholarship Opportunities for International Students</h2>
              <p className="text-gray-700">Discover scholarship opportunities for international students.</p>
              <Link to="/blog/scholarship-opportunities" className="inline-block mt-4 bg-tiercel-blue text-white py-2 px-4 rounded-md hover:bg-tiercel-secondary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;