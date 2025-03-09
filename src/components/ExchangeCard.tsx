
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import type { ExchangeService } from "@/lib/constants";

interface ExchangeCardProps {
  service: ExchangeService;
  index: number;
}

const ExchangeCard = ({ service, index }: ExchangeCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scale-in");
          entry.target.classList.remove("opacity-0");
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass rounded-xl p-6 card-hover opacity-0",
        "transition-all duration-300 ease-in-out"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon size={28} className="text-primary" />
        </div>
        <div className="text-primary/90 flex items-center">
          <Check size={16} className="mr-1" /> <span className="text-sm">Available</span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 flex flex-col">
        <span>{service.name}</span>
        {service.arabicName && (
          <span className="text-sm text-muted-foreground text-right">{service.arabicName}</span>
        )}
      </h3>
      
      {service.description && (
        <p className="text-muted-foreground text-sm">
          {service.description}
        </p>
      )}
      
      <div className="mt-4 pt-4 border-t border-border">
        <button className="text-primary font-medium text-sm flex items-center justify-between w-full hover:text-primary/80 transition-colors">
          <span>Exchange Now</span>
          <span className="text-right text-xs text-muted-foreground">تبادل الآن</span>
        </button>
      </div>
    </div>
  );
};

export default ExchangeCard;
