
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
        <div className="bg-primary/10 p-2 rounded-full">
          <Icon size={24} className="text-primary" />
        </div>
        <div className="text-primary/90 flex items-center">
          <Check size={16} className="mr-1" /> Available
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
      
      {service.description && (
        <p className="text-muted-foreground text-sm">{service.description}</p>
      )}
      
      <div className="mt-4 pt-4 border-t border-border">
        <button className="text-primary font-medium text-sm flex items-center hover:text-primary/80 transition-colors">
          Exchange now
        </button>
      </div>
    </div>
  );
};

export default ExchangeCard;
