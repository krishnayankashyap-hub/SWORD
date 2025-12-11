import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Facebook } from 'lucide-react';



const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.15 }); 
    
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return { isVisible, domRef };
};

const FadeIn = ({ children, delay = 0, className = '', direction = 'up' }) => {
  const { isVisible, domRef } = useScrollAnimation();
  
  const transforms = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10',
    none: ''
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible 
          ? 'opacity-100 translate-x-0 translate-y-0' 
          : `opacity-0 ${transforms[direction] || ''}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Main Contact Page Component ---

const Contact = () => {
  return (
    <div className="pt-32 pb-20 min-h-[85vh] flex items-center relative overflow-hidden bg-white">
      {/* Background Watermark - "SWORD" at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none leading-none z-0">
        <h1 className="text-[18vw] font-black text-slate-100 opacity-60 text-center tracking-tighter transform translate-y-[15%]">
          SWORD
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Header, Description & Socials */}
          <FadeIn direction="right">
            <div className="text-left space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold tracking-wider mb-6">
                  GET IN TOUCH
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6">
                  Contact Us
                </h1>
                <p className="text-xl text-slate-500 max-w-md leading-relaxed">
                  We are ready to listen. Reach out for strategic consultations, data inquiries, or to learn more about our methodology.
                </p>
              </div>

              {/* Social Links Section */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-5">Connect With Us</h3>
                <div className="flex gap-4">
                  {[Twitter, Linkedin, Github, Facebook].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Contact Information Card */}
          <FadeIn direction="left" delay={200}>
            <div className="bg-white/60 backdrop-blur-xl border border-slate-200 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group hover:border-orange-200 transition-colors">
               {/* Decorative Gradient for  wow look */}
               <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-100/80 to-transparent rounded-bl-full opacity-60"></div>
               
               <div className="space-y-10 relative z-10">
                  {/* Email */}
                  <div className="flex items-start gap-6 group/item">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-orange-100 flex items-center justify-center shrink-0 text-orange-600 shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                       <Mail className="w-7 h-7" />
                    </div>
                    <div>
                       <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                       <p className="text-slate-600 font-medium break-all hover:text-orange-600 transition-colors cursor-pointer">
                         swordofficialinfo@gmail.com
                       </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-6 group/item">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600 shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                       <Phone className="w-7 h-7" />
                    </div>
                    <div>
                       <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                       <p className="text-slate-600 font-medium hover:text-emerald-600 transition-colors cursor-pointer">
                         +91 70023 39891
                       </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-6 group/item">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600 shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                       <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                       <h3 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h3>
                       <p className="text-slate-600 leading-relaxed max-w-xs">
                         Asha Bhawan, Kahilipara,<br/>
                         Guwahati - 781019, Assam
                       </p>
                    </div>
                  </div>
               </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
};

export default Contact;