
import React from "react";
import { Phone, Building, CreditCard } from "lucide-react";
import { CONTACT_NUMBER, PAYMENT_METHODS, ARABIC_PAYMENT_METHODS } from "@/lib/constants";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/50" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">اتصل بنا</h2>
          <p className="text-muted-foreground" dir="rtl">
            تواصل مع فريقنا لأي استفسارات أو لتنفيذ عملية التبادل الخاصة بك.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-8 animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">معلومات الاتصال</h3>
                <p className="text-muted-foreground">تواصل معنا مباشرة</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary" />
                <span className="font-medium text-lg" dir="ltr">{CONTACT_NUMBER}</span>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground text-right" dir="rtl">
                  فريقنا متاح لمساعدتك في أي أسئلة أو لمعالجة طلبات التبادل الخاصة بك.
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
                <h3 className="font-semibold text-xl">طرق الدفع</h3>
                <p className="text-muted-foreground">خيارات متعددة متاحة</p>
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
                  <span className="font-medium">
                    <span className="text-right block" dir="rtl">{ARABIC_PAYMENT_METHODS[index]}</span>
                    <span className="text-xs text-muted-foreground">{method}</span>
                  </span>
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
