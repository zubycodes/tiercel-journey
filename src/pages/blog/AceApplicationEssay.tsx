import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";

const AceApplicationEssay = () => {
  const observerRef = useRef(null);

  // Animation for elements as they come into view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      handleIntersect,
      observerOptions
    );

    document.querySelectorAll(".observe-element").forEach((element) => {
      observerRef.current.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-8 px-4 md:px-0 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="observe-element opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium mb-4">
              Application Tips
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How to Ace Your Application Essay
            </h1>
            <div className="flex items-center justify-center text-blue-100 text-sm">
              <span>April 2, 2025</span>
              <span className="mx-2">•</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 -mt-8">
        {/* Article Card */}
        <article className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-12">
          {/* Table of Contents */}
          <div className="observe-element opacity-0 translate-y-8 transition-all duration-700 delay-200 mb-8 border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 rounded-r-lg">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">
              In this article
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#introduction"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#key-elements"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Key Elements of a Great Essay
                </a>
              </li>
              <li>
                <a
                  href="#tips"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Tips for Writing Your Essay
                </a>
              </li>
              <li>
                <a
                  href="#conclusion"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Conclusion
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Image */}
          <div className="observe-element opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src="https://assets.grok.com/users/3960d952-69ad-4907-ad16-04ffc3047dc7/0GnndmQpfzm6k0H6-generated_image.jpg"
                alt="Student writing an application essay"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Introduction */}
          <section
            id="introduction"
            className="observe-element opacity-0 translate-y-8 transition-all duration-700 delay-400 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Introduction
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4 text-lg leading-relaxed">
                Your application essay is your chance to shine and show the
                admissions committee who you are beyond your grades and test
                scores. It's an opportunity to tell your story, highlight your
                personality, and demonstrate your writing skills.
              </p>
              <p className="text-lg leading-relaxed">
                In today's competitive academic environment, a well-crafted
                essay can be the difference between acceptance and rejection.
                This guide will walk you through the essential elements of
                creating an essay that captures attention and leaves a lasting
                impression.
              </p>
            </div>
          </section>

          {/* Key Elements */}
          <section
            id="key-elements"
            className="observe-element opacity-0 translate-y-8 transition-all duration-700 delay-500 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Key Elements of a Great Essay
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Every successful application essay incorporates these essential
                components:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-600 rounded-full p-2 mr-3">
                      <svg
                        className="w-5 h-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        Compelling Story
                      </h3>
                      <p className="text-gray-700">
                        Start with an engaging anecdote or personal experience
                        that captures attention immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-600 rounded-full p-2 mr-3">
                      <svg
                        className="w-5 h-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        Clear Thesis
                      </h3>
                      <p className="text-gray-700">
                        State the main point you want to convey and ensure it's
                        consistent throughout your essay.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-600 rounded-full p-2 mr-3">
                      <svg
                        className="w-5 h-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        Authenticity
                      </h3>
                      <p className="text-gray-700">
                        Be yourself and write in your own voice. Admissions
                        officers want to get to know the real you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-600 rounded-full p-2 mr-3">
                      <svg
                        className="w-5 h-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        Strong Writing
                      </h3>
                      <p className="text-gray-700">
                        Use proper grammar, vocabulary, and sentence structure
                        to showcase your communication skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section
            id="tips"
            className="observe-element opacity-0 translate-y-8 transition-all duration-700 delay-600 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Tips for Writing Your Essay
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Follow these steps to create an essay that stands out from the
                crowd:
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Brainstorm Ideas
                    </h3>
                    <p className="text-gray-700">
                      Take time to reflect on your experiences, values, and
                      goals. Consider moments that have shaped you, challenges
                      you've overcome, or lessons you've learned. Don't rush
                      this process—the best essays often come from deep
                      reflection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Create an Outline
                    </h3>
                    <p className="text-gray-700">
                      Organize your thoughts and structure your essay. A typical
                      outline includes an introduction with a hook and thesis,
                      body paragraphs that develop your story and ideas, and a
                      conclusion that ties everything together.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Write a Draft
                    </h3>
                    <p className="text-gray-700">
                      Focus on getting your ideas down on paper without worrying
                      too much about perfection. Let your voice come through
                      naturally and don't be afraid to show vulnerability or
                      personality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Revise and Edit
                    </h3>
                    <p className="text-gray-700">
                      Refine your writing and correct any errors. Look for
                      opportunities to strengthen your arguments, improve
                      clarity, and eliminate redundancies. Pay close attention
                      to your opening and closing paragraphs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-semibold">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Get Feedback
                    </h3>
                    <p className="text-gray-700">
                      Ask friends, family, or teachers to read your essay and
                      provide suggestions. Fresh eyes can catch issues you might
                      have missed and offer perspective on how your story comes
                      across.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quote Section */}
          <div className="observe-element opacity-0 translate-y-8 transition-all duration-700 delay-700 mb-12">
            <blockquote className="border-l-4 border-blue-600 pl-6 py-4 italic text-xl text-gray-700">
              "The best essays reveal something about you that grades and test
              scores cannot: your personality, your voice, and your unique
              perspective on the world."
            </blockquote>
          </div>

          {/* Conclusion */}
          <section
            id="conclusion"
            className="observe-element opacity-0 translate-y-8 transition-all duration-700 delay-800 mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Conclusion
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4 text-lg leading-relaxed">
                Your application essay is a crucial part of the admissions
                process. By following these tips and putting in the effort, you
                can write an essay that showcases your strengths and helps you
                stand out from the crowd.
              </p>
              <p className="text-lg leading-relaxed">
                Remember that authenticity is key. Admissions officers read
                thousands of essays each year, and they can spot insincerity
                quickly. Trust your voice and tell your story in a way that only
                you can.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <div className="observe-element opacity-0 translate-y-8 transition-all duration-700 delay-900">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Ready to write your winning essay?
              </h3>
              <p className="text-gray-700 mb-6">
                Check out our essay review service to get personalized feedback
                from experienced admissions advisors.
              </p>
              <button className="bg-blue-600 text-white py-3 px-8 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </article>

        {/* Author Section */}
        <div className="observe-element opacity-0 translate-y-8 transition-all duration-700 delay-1000 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Sarah Johnson
                </h3>
                <p className="text-gray-600">
                  Admissions Counselor with 10+ years of experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="observe-element opacity-0 translate-y-8 transition-all duration-700 delay-1100 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog/scholarship-opportunities" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://assets.grok.com/users/3960d952-69ad-4907-ad16-04ffc3047dc7/NmyRVTS9Rg7DKF6b-generated_image.jpg"
                    alt="Scholarship Opportunities"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    Scholarship Opportunities for International Students
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover scholarship opportunities for international
                    students.
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/blog/top-universities" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://assets.grok.com/users/3960d952-69ad-4907-ad16-04ffc3047dc7/RpYqDUiMADWSwzHp-generated_image.jpg"
                    alt="Top Universities"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    Top Universities for Students in 2025
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Read about the best universities for students.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="observe-element opacity-0 translate-y-8 transition-all duration-700 delay-1200">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get More Application Tips
            </h2>
            <p className="text-blue-200 mb-8">
              Subscribe to our newsletter for the latest tips, guides, and
              resources to help you succeed.
            </p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-80"
              />
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
        <div
          id="reading-progress"
          className="h-full bg-blue-600 transition-all duration-200"
          style={{ width: "0%" }}
        ></div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-10 opacity-0 translate-y-10"
        id="back-to-top"
        style={{
          opacity: 0,
          transform: "translateY(10px)",
          transition: "opacity 0.3s, transform 0.3s",
        }}
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

     

      <script>
        {`
          // Reading progress bar
          function updateReadingProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = scrollTop / (docHeight - winHeight);
            const progressBar = document.getElementById("reading-progress");
            progressBar.style.width = (scrollPercent * 100) + "%";
            
            // Back to top button visibility
            const backToTop = document.getElementById("back-to-top");
            if (scrollTop > 300) {
              backToTop.style.opacity = "1";
              backToTop.style.transform = "translateY(0)";
            } else {
              backToTop.style.opacity = "0";
              backToTop.style.transform = "translateY(10px)";
            }
          }
          
          window.addEventListener("scroll", updateReadingProgress);
        `}
      </script>
    </div>
  );
};

export default AceApplicationEssay;
