
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExchangeCard from "@/components/ExchangeCard";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { EXCHANGE_SERVICES } from "@/lib/constants";
import { ArrowRight, Check, ShieldCheck, RefreshCw } from "lucide-react";

const Index = () => {
  // Smooth scroll animation for the entire page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 px-6" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-4">Our Exchange Services</h2>
            <p className="text-muted-foreground">
              We provide exchange services for all major electronic payment methods
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXCHANGE_SERVICES.map((service, index) => (
              <ExchangeCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 px-6 bg-muted/30" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Simple and secure exchange process in just a few steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Check size={24} className="text-primary" />,
                title: "Select Service",
                description: "Choose the electronic payment method you want to exchange."
              },
              {
                icon: <RefreshCw size={24} className="text-primary" />,
                title: "Specify Amount",
                description: "Enter the amount you wish to exchange and get a quote."
              },
              {
                icon: <ShieldCheck size={24} className="text-primary" />,
                title: "Complete Exchange",
                description: "Finalize your exchange securely and receive confirmation."
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="glass rounded-xl p-8 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <button className="text-primary font-medium flex items-center hover:text-primary/80 transition-colors">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#home" 
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-10"
        aria-label="Back to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;
