
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tiercel-blue text-white">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company */}
          <div>
            <h3 className="font-bold text-2xl mb-6">
              <span className="text-tiercel-red">Tiercel</span> Consulting
            </h3>
            <p className="text-white/70 mb-6">
              Your trusted partner for study abroad guidance, helping Pakistani students achieve their international education dreams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-tiercel-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-tiercel-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-tiercel-red transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-tiercel-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/2 after:bg-tiercel-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#services" className="text-white/70 hover:text-tiercel-red transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-white/70 hover:text-tiercel-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-white/70 hover:text-tiercel-red transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-white/70 hover:text-tiercel-red transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-tiercel-red transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/2 after:bg-tiercel-gold">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-tiercel-red transition-colors">
                  University Selection
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-tiercel-red transition-colors">
                  Visa Guidance
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-tiercel-red transition-colors">
                  Scholarship Support
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-tiercel-red transition-colors">
                  Post-Admission Counseling
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-tiercel-red transition-colors">
                  Career Counseling
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/2 after:bg-tiercel-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-tiercel-red shrink-0 mt-1" />
                <span className="text-white/70">
                  123 Education Avenue, Islamabad, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-tiercel-red shrink-0" />
                <a href="tel:+923001234567" className="text-white/70 hover:text-tiercel-red transition-colors">
                  +92 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-tiercel-red shrink-0" />
                <a href="mailto:info@tiercelconsulting.com" className="text-white/70 hover:text-tiercel-red transition-colors">
                  info@tiercelconsulting.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Tiercel Consulting. All rights reserved.</p>
        </div>
      </div>
      
      {/* Live Chat Widget Placeholder */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 rounded-full bg-tiercel-gold text-tiercel-blue flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
          <Mail size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
