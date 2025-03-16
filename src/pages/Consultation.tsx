
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Check } from 'lucide-react';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'US',
    education: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: 'US',
        education: '',
        message: '',
      });
    }, 5000);
  };
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-tiercel-light pt-10 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-tiercel-blue hover:text-tiercel-red transition-colors mb-4"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="px-8 py-4">
              <h1 className="text-3xl font-bold text-tiercel-blue mb-2">Start Your Journey</h1>
              <p className="text-tiercel-dark/70 mb-8">Fill out the form below and one of our consultants will contact you shortly.</p>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">Your consultation request has been received. We'll contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-tiercel-dark mb-1">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-tiercel-gold focus:ring-1 focus:ring-tiercel-gold outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-tiercel-dark mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-tiercel-gold focus:ring-1 focus:ring-tiercel-gold outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-tiercel-dark mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-tiercel-gold focus:ring-1 focus:ring-tiercel-gold outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-tiercel-dark mb-1">
                        Desired Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-tiercel-gold focus:ring-1 focus:ring-tiercel-gold outline-none transition-all"
                      >
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="IE">Ireland</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="education" className="block text-sm font-medium text-tiercel-dark mb-1">
                      Current Education Level
                    </label>
                    <input
                      id="education"
                      name="education"
                      type="text"
                      value={formData.education}
                      onChange={handleChange}
                      placeholder="e.g., Bachelor's in Computer Science"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-tiercel-gold focus:ring-1 focus:ring-tiercel-gold outline-none transition-all"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-tiercel-dark mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your education goals..."
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-tiercel-gold focus:ring-1 focus:ring-tiercel-gold outline-none transition-all"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-tiercel-blue text-white font-medium px-6 py-3.5 rounded-lg hover:bg-tiercel-blue/90 transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Info Section */}
          <div>
            <div className={`mb-8 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h2 className="text-2xl font-bold text-tiercel-blue mb-4">
                What Happens Next?
              </h2>
              <div className="bg-white rounded-xl p-6">
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tiercel-gold/20 text-tiercel-red flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-tiercel-blue">Initial Call</h3>
                      <p className="text-sm text-tiercel-dark/70">
                        One of our consultants will call you within 24 hours to understand your requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tiercel-gold/20 text-tiercel-red flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-tiercel-blue">Strategy Session</h3>
                      <p className="text-sm text-tiercel-dark/70">
                        Schedule a comprehensive consultation to develop your personalized education plan.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tiercel-gold/20 text-tiercel-red flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-tiercel-blue">Begin Your Journey</h3>
                      <p className="text-sm text-tiercel-dark/70">
                        Start working with your dedicated consultant to achieve your international education goals.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <a 
                href="#" 
                className="block bg-tiercel-blue rounded-xl p-6 text-white hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Download className="text-tiercel-red" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">Download Our Free Guide</h3>
                    <p className="text-white/70 text-sm">
                      Get our comprehensive guide to top universities and admission requirements
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
