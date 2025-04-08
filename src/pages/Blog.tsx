import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const observerRef = useRef(null);
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Top Universities for students in 2025",
      excerpt: "Read about the best universities for students.",
      category: "education",
      readTime: "5 min read",
      date: "Apr 2, 2025",
      image: "https://assets.grok.com/users/3960d952-69ad-4907-ad16-04ffc3047dc7/NmyRVTS9Rg7DKF6b-generated_image.jpg",
      slug: "/blog/top-universities",
      featured: true
    },
    {
      id: 2,
      title: "How to Ace Your Application Essay",
      excerpt: "Learn how to write an outstanding application essay.",
      category: "tips",
      readTime: "7 min read",
      date: "Mar 28, 2025",
      image: "https://assets.grok.com/users/3960d952-69ad-4907-ad16-04ffc3047dc7/0GnndmQpfzm6k0H6-generated_image.jpg",
      slug: "/ace-application-essay"
    },
    {
      id: 3,
      title: "Scholarship Opportunities for International Students",
      excerpt: "Discover scholarship opportunities for international students.",
      category: "scholarships",
      readTime: "4 min read",
      date: "Mar 25, 2025",
      image: "https://assets.grok.com/users/3960d952-69ad-4907-ad16-04ffc3047dc7/RpYqDUiMADWSwzHp-generated_image.jpg",
      slug: "/blog/scholarship-opportunities"
    },
    {
      id: 4,
      title: "Campus Life: What to Expect in Your First Year",
      excerpt: "Everything you need to know about your freshman year.",
      category: "campus",
      readTime: "8 min read",
      date: "Mar 20, 2025",
      image: "/api/placeholder/800/500",
      slug: "/blog/campus-life-first-year"
    },
    {
      id: 5,
      title: "How to Balance Studies and Social Life",
      excerpt: "Tips for maintaining a healthy work-life balance in college.",
      category: "tips",
      readTime: "6 min read",
      date: "Mar 15, 2025",
      image: "/api/placeholder/800/500",
      slug: "/blog/balance-studies-social"
    }
  ]);

  // Animation for elements as they come into view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);
    
    document.querySelectorAll('.observe-element').forEach((element) => {
      observerRef.current.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter posts based on active filter and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = activeFilter === 'all' || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="observe-element opacity-0 translate-y-8 transition-all duration-700">
          <h1 className="text-5xl md:text-6xl font-bold text-tiercel-blue/90 mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-tiercel-blue/80 max-w-2xl">
            Insights, tips and guides to help you navigate the education landscape and make informed decisions.
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="mt-12 mb-8 observe-element opacity-0 transition-all duration-700 delay-300">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/2 relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
              {['all', 'education', 'tips', 'scholarships', 'campus'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeFilter === filter
                      ? 'bg-tiercel-blue/90 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-16">
          <div className="observe-element opacity-0 transition-all duration-700 delay-500">
            <Link to={featuredPost.slug} className="block group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform group-hover:scale-[1.01]">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full uppercase font-semibold">
                        Featured
                      </span>
                      <span className="text-gray-500 text-sm ml-3">{featuredPost.date} • {featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center font-medium text-tiercel-red group-hover:text-tiercel-red">
                        Read More
                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-24">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link 
                to={post.slug} 
                key={post.id}
                className="observe-element opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 100 + 700}ms` }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col group">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white font-medium">Read article</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded capitalize">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs ml-2">{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center mt-4 text-gray-500 text-sm">
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 observe-element opacity-0 transition-all duration-700">
            <div className="mx-auto w-24 h-24 mb-6 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            <button 
              onClick={() => {setActiveFilter('all'); setSearchTerm('');}}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-24">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 observe-element opacity-0 transition-all duration-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-white text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-blue-100 mb-6">Subscribe to our newsletter and never miss new articles, tips, and opportunities.</p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-blue-100 text-sm mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-10 opacity-0 translate-y-10"
        id="back-to-top"
        style={{
          opacity: 0,
          transform: 'translateY(10px)',
          transition: 'opacity 0.3s, transform 0.3s',
        }}
        onScroll={() => {
          const button = document.getElementById('back-to-top');
          if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
          } else {
            button.style.opacity = '0';
            button.style.transform = 'translateY(10px)';
          }
        }}
      >
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      
     
    </div>
  );
};

export default Blog;