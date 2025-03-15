
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6',
        {
          'bg-white/10 backdrop-blur-lg shadow-sm': scrolled,
          'bg-transparent': !scrolled
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-tiercel-gold">Tiercel</span>
          <span className="font-medium text-white">Consulting</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#services" className="text-white/90 hover:text-white transition-colors">
            Services
          </Link>
          <Link to="/#about" className="text-white/90 hover:text-white transition-colors">
            About Us
          </Link>
          <Link to="/#testimonials" className="text-white/90 hover:text-white transition-colors">
            Success Stories
          </Link>
          <Link 
            to="/consultation" 
            className="btn-primary"
          >
            Start Your Journey
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-tiercel-blue/95 backdrop-blur-lg p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/#services" 
              className="text-white/90 hover:text-white py-2 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/#about" 
              className="text-white/90 hover:text-white py-2 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/#testimonials" 
              className="text-white/90 hover:text-white py-2 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Success Stories
            </Link>
            <Link 
              to="/consultation" 
              className="btn-primary mx-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Start Your Journey
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
