
// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  });

  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    // Animate hamburger menu bars
    const bars = mobileMenuBtn.querySelectorAll('.bar');
    bars[0].style.transform = mobileMenu.classList.contains('active') ? 'translateY(9px) rotate(45deg)' : 'none';
    bars[1].style.opacity = mobileMenu.classList.contains('active') ? '0' : '1';
    bars[2].style.transform = mobileMenu.classList.contains('active') ? 'translateY(-9px) rotate(-45deg)' : 'none';
  });
  
  // Close mobile menu when clicking on links
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      const bars = mobileMenuBtn.querySelectorAll('.bar');
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'none';
    });
  });
  
  // Testimonials slider
  const testimonials = [
    {
      id: 1,
      content: "Tiercel helped me secure a spot at Oxford despite my low GPA! Their personalized approach to my application made all the difference.",
      name: "Zainab Ahmed",
      position: "Oxford University",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      content: "I was overwhelmed by the US application process until I found Tiercel. Their step-by-step guidance helped me get accepted to my dream school with a scholarship!",
      name: "Ali Raza",
      position: "University of Pennsylvania",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      content: "The visa application seemed impossible until Tiercel's team prepared me for the interview. Their mock interviews and documentation guidance were invaluable.",
      name: "Fatima Khan",
      position: "University College Dublin",
      image: "/placeholder.svg"
    }
  ];
  
  let currentTestimonial = 0;
  const testimonialsContainer = document.getElementById('testimonials-container');
  const dotsContainer = document.getElementById('testimonial-dots');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  
  // Initialize testimonials
  function initTestimonials() {
    // Create testimonial slides
    testimonials.forEach((testimonial, index) => {
      const slide = document.createElement('div');
      slide.className = 'testimonial';
      slide.innerHTML = `
        <div class="quote-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
        </div>
        <p class="testimonial-quote">"${testimonial.content}"</p>
        <div class="testimonial-author">
          <img src="${testimonial.image}" alt="${testimonial.name}" class="author-img">
          <div class="author-info">
            <h4>${testimonial.name}</h4>
            <p>${testimonial.position}</p>
          </div>
        </div>
      `;
      
      // Only show first testimonial initially
      if (index !== 0) {
        slide.style.display = 'none';
      }
      
      testimonialsContainer.appendChild(slide);
      
      // Create dot
      const dot = document.createElement('span');
      dot.className = index === 0 ? 'dot active' : 'dot';
      dot.setAttribute('data-index', index);
      dotsContainer.appendChild(dot);
      
      // Add click event to dot
      dot.addEventListener('click', function() {
        showTestimonial(parseInt(this.getAttribute('data-index')));
      });
    });
  }
  
  // Show testimonial with animation
  function showTestimonial(index) {
    const testimonialElements = testimonialsContainer.querySelectorAll('.testimonial');
    const dots = dotsContainer.querySelectorAll('.dot');
    
    // Hide current testimonial
    testimonialElements[currentTestimonial].style.opacity = '0';
    setTimeout(() => {
      testimonialElements[currentTestimonial].style.display = 'none';
      
      // Show new testimonial
      testimonialElements[index].style.display = 'block';
      setTimeout(() => {
        testimonialElements[index].style.opacity = '1';
      }, 50);
      
      // Update dots
      dots[currentTestimonial].classList.remove('active');
      dots[index].classList.add('active');
      
      // Update current index
      currentTestimonial = index;
    }, 300);
  }
  
  // Previous testimonial
  prevBtn.addEventListener('click', function() {
    let newIndex = currentTestimonial - 1;
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    }
    showTestimonial(newIndex);
  });
  
  // Next testimonial
  nextBtn.addEventListener('click', function() {
    let newIndex = currentTestimonial + 1;
    if (newIndex >= testimonials.length) {
      newIndex = 0;
    }
    showTestimonial(newIndex);
  });
  
  // Initialize testimonials
  if (testimonialsContainer) {
    initTestimonials();
    
    // Auto-rotate testimonials
    setInterval(() => {
      let newIndex = currentTestimonial + 1;
      if (newIndex >= testimonials.length) {
        newIndex = 0;
      }
      showTestimonial(newIndex);
    }, 7000);
  }
  
  // Subscription form
  const subscriptionForm = document.getElementById('subscription-form');
  const subscriptionBtn = document.getElementById('subscription-btn');
  const toast = document.getElementById('toast');
  
  if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading state
      const originalBtnText = subscriptionBtn.innerHTML;
      subscriptionBtn.innerHTML = 'Processing...';
      subscriptionBtn.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        // Reset form
        subscriptionForm.reset();
        
        // Show success state
        subscriptionBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          Subscribed!
        `;
        
        // Show toast notification
        toast.classList.add('show');
        
        // Reset button after delay
        setTimeout(() => {
          subscriptionBtn.innerHTML = originalBtnText;
          subscriptionBtn.disabled = false;
          toast.classList.remove('show');
        }, 3000);
      }, 1500);
    });
  }
  
  // Video popup functionality
  const playButton = document.querySelector('.play-button');
  if (playButton) {
    playButton.addEventListener('click', function() {
      // This would normally open a video modal
      alert('This would open a video player in a production environment.');
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
});
