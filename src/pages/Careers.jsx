import React, { useState, useEffect, useRef } from 'react';
import { Brain, PieChart, Code, MapPin, Shield } from 'lucide-react';
import { SectionTitle, Button } from '../components/Common';

const Careers = () => {
  const [activeJob, setActiveJob] = useState(0);
  const jobRefs = useRef([]);

  const jobs = [
    { role: "Senior Data Scientist", type: "Full-time", loc: "Guwahati / Remote", dept: "Engineering", icon: Brain, color: "orange", desc: "Lead our predictive modeling initiatives, building algorithms that analyze voter sentiment and election trends." },
    { role: "Political Analyst", type: "Full-time", loc: "Guwahati", dept: "Research", icon: PieChart, color: "slate", desc: "Decode complex political landscapes and provide actionable intelligence reports for campaign strategy." },
    { role: "Frontend Developer", type: "Full-time", loc: "Remote", dept: "Engineering", icon: Code, color: "emerald", desc: "Build immersive, data-rich dashboards using React and D3.js to visualize campaign metrics." },
    { role: "Field Operations Lead", type: "Contract", loc: "Assam", dept: "Operations", icon: MapPin, color: "orange", desc: "Coordinate ground teams, manage survey logistics, and ensure real-time data sync from remote districts." },
    { role: "Security Engineer", type: "Full-time", loc: "Bangalore", dept: "Security", icon: Shield, color: "slate", desc: "Fortify our data infrastructure against cyber threats and ensure compliance with data privacy laws." }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) setActiveJob(index);
          }
        });
      }, { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
    );
    jobRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Intelligence Network" subtitle="Join the team reshaping political technology." />

        <div className="flex gap-8 relative">
           {/* Timeline Line */}
           <div className="hidden lg:block w-1 bg-slate-200 absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 rounded-full">
              <div className="w-full bg-gradient-to-b from-orange-500 via-slate-400 to-emerald-500 absolute top-0 rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(255,153,51,0.5)]" style={{ height: `${((activeJob + 0.5) / jobs.length) * 100}%` }}>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-orange-500 rounded-full shadow-md animate-pulse"></div>
              </div>
           </div>

           <div className="w-full flex flex-col gap-32 pb-32">
              {jobs.map((job, i) => (
                 <div key={i} ref={(el) => (jobRefs.current[i] = el)} data-index={i} className={`flex items-center w-full transition-all duration-700 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Spacer for desktop layout alignment */}
                    <div className={`hidden lg:block w-1/2 ${i % 2 === 0 ? 'order-2' : 'order-1'}`}></div>
                    
                    {/* Content Card */}
                    <div className={`w-full lg:w-1/2 px-4 z-10 ${i % 2 === 0 ? 'order-1 lg:text-right' : 'order-2 lg:text-left'}`}>
                       <div className={`relative p-8 rounded-2xl border transition-all duration-500 group ${activeJob === i ? 'bg-white border-orange-500 shadow-xl scale-100 opacity-100' : 'bg-slate-100/50 border-slate-200 scale-95 opacity-50 blur-[1px]'}`}>
                          <div className={`absolute top-0 ${i % 2 === 0 ? 'right-0' : 'left-0'} w-1 h-full bg-gradient-to-b from-${job.color === 'slate' ? 'slate' : job.color}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                          
                          <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'lg:flex-row-reverse' : 'flex-row'}`}>
                             <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${activeJob === i ? `bg-${job.color === 'slate' ? 'slate-100' : job.color + '-100'} text-${job.color === 'slate' ? 'slate-800' : job.color + '-600'}` : 'bg-slate-200 text-slate-500'}`}>
                                <job.icon className="w-6 h-6" />
                             </div>
                             <div>
                                <h3 className={`text-2xl font-bold ${activeJob === i ? 'text-slate-900' : 'text-slate-400'}`}>{job.role}</h3>
                                <div className={`flex gap-3 text-xs mt-1 ${i % 2 === 0 ? 'lg:justify-end' : 'justify-start'}`}>
                                   <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">{job.type}</span>
                                   <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">{job.loc}</span>
                                </div>
                             </div>
                          </div>
                          <p className="text-slate-500 text-sm leading-relaxed mb-6">{job.desc}</p>
                          <Button variant={activeJob === i ? "primary" : "secondary"} className={`text-sm py-2 ${i % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>Apply Now</Button>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
        
        <div className="text-center mt-20">
           <p className="text-slate-500 mb-4">Don't see your role?</p>
           <Button variant="outline">Send Open Application</Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;