import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 bg-white",
        {
          "shadow-sm": scrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* <span className="font-bold text-2xl text-tiercel-red">Tiercel</span>
          <span className="font-medium text-tiercel-blue">Consulting</span> */}
          <img
            src="https://tierceledconsulting.com/wp-content/uploads/2025/01/cropped-Main-Logo.png"
            style={{ width: "60%" }}
            alt=""
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* <Link
            to="/"
            className="text-tiercel-blue hover:text-tiercel-red transition-colors"
          >
            Home
          </Link> */}
          <a
            href="/#about"
            className="text-tiercel-blue hover:text-tiercel-red transition-colors"
          >
            About Us
          </a>
          <Link
            to="/destinations"
            className="text-tiercel-blue hover:text-tiercel-red transition-colors"
          >
            Destinations
          </Link>

          <Link
            to="/ivy-league"
            className="text-tiercel-blue hover:text-tiercel-red transition-colors"
          >
            Ivy League
          </Link>
          <Link
            to="/ielts"
            className="text-tiercel-blue hover:text-tiercel-red transition-colors"
          >
            IELTS
          </Link>
          {/*  <Link to="/pte" className="text-tiercel-blue hover:text-tiercel-red transition-colors">
            PTE
          </Link> */}
          <a
            href="/#services"
            className="text-tiercel-blue hover:text-tiercel-red transition-colors"
          >
            Services
          </a>
          {/*  <a
            href="/#testimonials"
            className="text-tiercel-blue hover:text-tiercel-red transition-colors"
          >
            Success Stories
          </a> */}

          <Link
            to="/#faqs"
            className="text-tiercel-blue hover:text-tiercel-red transition-colors"
          >
            FAQs
          </Link>
          <Link to="/consultation" className="btn-primary bg-tiercel-blue/90">
            Virtual Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-tiercel-blue focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-tiercel-blue/95 backdrop-blur-lg p-4 shadow-lg text-white">
          <nav className="flex flex-col space-y-4">
            {/* <Link
              to="/"
              className="text-white hover:text-tiercel-red py-2 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link> */}
            <a
              href="/#about"
              className="text-white hover:text-tiercel-red py-2 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <Link
              to="/destinations"
              className="text-white hover:text-tiercel-red py-2 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Destinations
            </Link>
            <Link
              to="/ivy-league"
              className="text-white hover:text-tiercel-red py-2 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ivy League
            </Link>
            <Link
              to="/ielts"
              className="text-white hover:text-tiercel-red py-2 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              IELTS
            </Link>
            <a
              href="/#services"
              className="text-white hover:text-tiercel-red py-2 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            {/*  <a
              href="/#testimonials"
              className="text-white hover:text-tiercel-red py-2 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Success Stories
            </a> */}
            <Link
              to="/faqs"
              className="text-white hover:text-tiercel-red py-2 px-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>
            <Link to="/consultation" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
              Virtual Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
