
import React from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-bold text-2xl text-primary mb-4">
              Exchange<span className="text-foreground">Pay</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Professional service for buying, selling, and exchanging electronic balances.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "How It Works", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    {item} 
                    <ArrowUpRight size={14} className="ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <ul className="space-y-2">
              {["Terms of Service", "Privacy Policy", "Refund Policy"].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    {item}
                    <ArrowUpRight size={14} className="ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} ExchangePay. All rights reserved.
          </div>
          <div className="text-muted-foreground text-sm">
            Designed with precision and elegance.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
