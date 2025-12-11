import React, { useState, useEffect, useRef } from 'react';
import { PieChart, Brain, Server, Megaphone, Zap } from 'lucide-react';
import { SectionTitle } from '../components/Common';

const Services = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cardRefs = useRef([]);

  const steps = [
    { id: 1, title: "Survey & Data", icon: PieChart, color: "orange", desc: "Ground-level intelligence gathering through stratified sampling.", subtitle: "Ground Intelligence", features: ["Geo-tagged Data Points", "Real-time Sync", "Voter Mood Tracking"] },
    { id: 2, title: "AI Analytics", icon: Brain, color: "slate", desc: "Processing millions of data points to find hidden patterns.", subtitle: "Data Processing", features: ["Sentiment Analysis", "Trend Forecasting", "Swing Factor Calculation"] },
    { id: 3, title: "IT Infrastructure", icon: Server, color: "green", desc: "Secure command centers and real-time data pipelines.", subtitle: "Infrastructure", features: ["Social Listening", "Encrypted Database", "Live Dashboards"] },
    { id: 4, title: "Strategic PR", icon: Megaphone, color: "blue", desc: "Narrative building and targeted dissemination.", subtitle: "Execution", features: ["Crisis Management", "Image Building", "Narrative Control"] }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) setActiveStep(index);
          }
        });
      },
      { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
    );
    cardRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Digital Strategic Ecosystem" subtitle="A next-generation workflow where data meets decisive action." />

        <div className="flex flex-col lg:flex-row gap-16 relative">
            <div className="lg:w-1/3 sticky top-32 h-[600px] hidden lg:flex flex-col items-center">
               <div className="relative w-full h-full flex justify-center">
                  <div className="absolute top-0 bottom-0 w-1 bg-slate-200 rounded-full"></div>
                  <div className="absolute top-0 w-1 bg-gradient-to-b from-orange-500 via-slate-400 to-green-500 rounded-full transition-all duration-700 ease-out" style={{ height: `${((activeStep) / (steps.length - 1)) * 100}%` }}>
                      <div className="absolute left-0 w-full h-2 bg-slate-800 rounded-full animate-packet shadow-sm"></div>
                  </div>
                  <div className="absolute w-4 h-4 bg-white border-2 border-orange-500 rounded-full shadow-lg z-30 transition-all duration-700 ease-out" style={{ top: `${(activeStep / (steps.length - 1)) * 100}%`, transform: 'translateY(-50%)' }}></div>

                  <div className="flex flex-col justify-between h-full z-10 py-0 w-full">
                      {steps.map((step, i) => {
                          const isActive = i === activeStep;
                          const isPast = i < activeStep;
                          return (
                            <div key={i} className={`flex items-center gap-6 w-full ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-all duration-500 ${isActive ? 'scale-110 opacity-100' : 'opacity-60 scale-95'}`}>
                              <div className={`flex-1 text-sm font-bold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-400'} ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>{step.title}</div>
                              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-500 shadow-md relative shrink-0 z-20 ${isActive || isPast ? `bg-white border-${step.color === 'slate' ? 'slate' : step.color}-500` : 'bg-slate-100 border-slate-200'}`}>
                                  <step.icon className={`w-6 h-6 ${isActive || isPast ? `text-${step.color === 'slate' ? 'slate-800' : step.color + '-500'}` : 'text-slate-400'}`} />
                                  {isActive && <div className="absolute inset-0 rounded-xl animate-ping border border-orange-500/30"></div>}
                              </div>
                              <div className="flex-1"></div>
                            </div>
                          )
                      })}
                  </div>
               </div>
            </div>

            <div className="lg:w-2/3 flex flex-col gap-32 pb-32">
                {steps.map((service, i) => (
                   <div key={i} ref={(el) => (cardRefs.current[i] = el)} data-index={i} className={`transition-all duration-700 ease-out transform ${activeStep === i ? 'scale-100 opacity-100 translate-x-0 blur-none' : 'scale-90 opacity-0 translate-y-20 blur-sm'}`}>
                      <div className="group relative bg-white border border-slate-200 p-8 rounded-2xl overflow-hidden hover:border-orange-500 transition-all duration-500 w-full shadow-lg">
                         <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/50 to-transparent h-[200%] w-full pointer-events-none transition-opacity ${activeStep === i ? 'animate-scan-active opacity-100' : 'opacity-0'}`}></div>
                         <div className="relative z-10 flex gap-6 sm:flex-row flex-col">
                            <div className="shrink-0">
                               <div className={`w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center border transition-colors shadow-sm ${activeStep === i ? 'border-orange-200' : 'border-slate-100'}`}>
                                  <service.icon className={`w-8 h-8 transition-colors ${activeStep === i ? 'text-orange-600' : 'text-slate-400'}`} />
                               </div>
                            </div>
                            <div>
                               <div className={`text-xs font-bold tracking-widest uppercase mb-1 transition-colors ${activeStep === i ? 'text-orange-600' : 'text-slate-400'}`}>{service.subtitle}</div>
                               <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                               <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
                               <div className="flex flex-wrap gap-2">
                                  {service.features.map((feat, j) => (
                                     <span key={j} className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-center gap-1">
                                        <Zap className="w-3 h-3 text-orange-500" /> {feat}
                                     </span>
                                  ))}
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;