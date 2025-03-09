
import React from "react";
import { Phone, Building, CreditCard } from "lucide-react";
import { CONTACT_NUMBER, PAYMENT_METHODS } from "@/lib/constants";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/50" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            Get in touch with our team for any inquiries or to process your exchange.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-8 animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Contact Information</h3>
                <p className="text-muted-foreground">Reach out to us directly</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary" />
                <span className="font-medium text-lg">{CONTACT_NUMBER}</span>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground">
                  Our team is available to assist you with any questions or to process your exchange requests.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-xl p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <CreditCard size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Payment Methods</h3>
                <p className="text-muted-foreground">Multiple options available</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {PAYMENT_METHODS.map((method, index) => (
                <div 
                  key={index} 
                  className="bg-muted/50 rounded-lg p-4 border border-border flex items-center gap-3"
                >
                  {index < 4 ? (
                    <Building size={20} className="text-primary" />
                  ) : (
                    <CreditCard size={20} className="text-primary" />
                  )}
                  <span className="font-medium">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
