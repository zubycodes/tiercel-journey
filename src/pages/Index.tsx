
import { useEffect } from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Services from '../components/landing/Services';
import Progress from '../components/landing/Progress';
import TrustSignals from '../components/landing/TrustSignals';
import ContactForm from '../components/landing/ContactForm';
import Footer from '../components/landing/Footer';
import FAQs from '@/components/landing/FAQs';

const Index = () => {
  // Scroll reveal functionality
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');

      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.85) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Popup subscription form
  /* useEffect(() => {
    const timer = setTimeout(() => {
      const popupElement = document.getElementById('subscription-popup');
      if (popupElement) {
        popupElement.classList.remove('hidden');
        popupElement.classList.add('flex');
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []); */

  const closePopup = () => {
    const popupElement = document.getElementById('subscription-popup');
    if (popupElement) {
      popupElement.classList.add('hidden');
      popupElement.classList.remove('flex');
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Progress />
      <FAQs />
      {/* <TrustSignals /> */}

      {/* Newsletter Section */}
      <section className="py-20 hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tiercel-blue mb-6">
            Stay Updated with Education Opportunities
          </h2>
          <p className="text-lg text-tiercel-dark/70 max-w-2xl mx-auto mb-10">
            Get the latest updates on scholarship opportunities, university applications, and visa tips.
          </p>

          <ContactForm />
        </div>
      </section>

      <Footer />

      {/* Subscription Popup */}
      <div
        id="subscription-popup"
        className="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) closePopup();
        }}
      >
        <div className="relative max-w-md w-full animate-scale-up">
          <button
            className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10"
            onClick={closePopup}
          >
            ✕
          </button>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
