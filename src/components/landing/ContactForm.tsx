import { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://13.239.184.38:6500/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setShowSuccess(true);
        })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error appropriately (e.g., display an error message)
      })
      .finally(() => {
        // Reset form after success message
        setTimeout(() => {
          setShowSuccess(false);
          setEmail("");
        }, 5000);
      });
    setTimeout(() => {}, 3000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          formRef.current?.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={formRef}
      className="opacity-0 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-md w-full mx-auto"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-tiercel-blue mb-2">
          Get Our Free Study Guide
        </h3>
        <p className="text-sm text-tiercel-dark/70">
          Subscribe to receive our 10-Step Study Abroad Checklist and latest
          education tips.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-tiercel-gold focus:ring-1 focus:ring-tiercel-gold outline-none transition-all"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-tiercel-blue text-white font-medium px-6 py-3 rounded-lg hover:bg-tiercel-blue/90 transition-colors"
        >
          {showSuccess ? (
            <span className="flex items-center justify-center gap-2">
              <Check size={18} />
              Subscribed!
            </span>
          ) : (
            "Download Free Guide"
          )}
        </button>

        <p className="text-xs text-center text-tiercel-dark/60 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
