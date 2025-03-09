
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const animatedDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0");
        }
      },
      { threshold: 0.1 }
    );

    if (animatedDivRef.current) {
      observer.observe(animatedDivRef.current);
    }

    return () => {
      if (animatedDivRef.current) {
        observer.unobserve(animatedDivRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden" id="home">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-transparent opacity-70"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div ref={animatedDivRef} className="opacity-0 transition-opacity duration-500">
          <div className="space-y-4 mb-8">
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground">
              بيع و شراء
              <br />
              <span className="text-primary">SELL AND BUY</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[85%]">
              خدمة بيع و شراء و تحويل جميع الأرصدة الإلكترونية
            </p>
          </div>
          
          <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
            Get Started <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="relative aspect-square md:aspect-auto">
          <div className="w-72 h-72 rounded-full bg-primary/20 absolute -top-10 -right-10 blur-3xl animate-pulse-soft"></div>
          <div className="w-64 h-64 rounded-full bg-primary/30 absolute -bottom-10 -left-10 blur-3xl animate-pulse-soft animation-delay-1000"></div>
          
          <div className="relative z-10 animate-float rounded-2xl shadow-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=1000"
              alt="Digital Exchange" 
              className="w-full h-auto rounded-2xl opacity-100"
              style={{ animationFillMode: 'forwards' }}
            />
            
            <div className="absolute bottom-0 left-0 right-0 glass p-4 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="font-medium">Secure Digital Exchange</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
