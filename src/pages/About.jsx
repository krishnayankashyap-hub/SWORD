import React from 'react';
import { Crosshair, Globe } from 'lucide-react';
import { FadeIn, ProfessionalCard, PowerStat } from '../components/Common';

const About = () => (
  <div className="pt-32 pb-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <FadeIn>
          <div className="inline-block px-4 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-bold mb-4">EST. 2024</div>
          <h1 className="text-5xl font-bold mb-8 text-slate-900">About <span className="text-gradient-saffron">SWORD</span></h1>
          <p className="text-lg text-slate-500 leading-relaxed text-justify md:text-center">
            S.W.O.R.D. (Strategic Wing for Organizational Research & Development) is a data-driven political campaign and analytics organization empowering leaders with actionable insights through advanced voter intelligence, campaign dashboards, and social media analytics. With secure cloud infrastructure and command platforms, S.W.O.R.D. drives transparent, innovative, and precision-based strategies that shape narratives and influence political outcomes.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-24">
        <ProfessionalCard delay={100} color="orange">
          <div className="glass-card p-10 rounded-3xl h-full border-t-4 border-orange-500 h-full flex flex-col bg-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-100 rounded-xl">
                 <Crosshair className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
            </div>
            <p className="text-slate-500 leading-relaxed flex-grow">
              At SWORD, our mission is to empower political leaders and organizations with intelligent, data-driven systems that transform how they plan, act, and connect with people. We aim to bring precision to politics.
            </p>
            <div className="mt-8 flex justify-end">
               <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
            </div>
          </div>
        </ProfessionalCard>

        <ProfessionalCard delay={300} color="emerald">
          <div className="glass-card p-10 rounded-3xl h-full border-t-4 border-emerald-500 h-full flex flex-col bg-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-100 rounded-xl">
                 <Globe className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Our Vision</h2>
            </div>
            <p className="text-slate-500 leading-relaxed flex-grow">
              To redefine modern political strategy through the power of artificial intelligence, data, and digital precision - creating a future where decisions are smarter, campaigns are sharper, and democracy is more informed.
            </p>
            <div className="mt-8 flex justify-end">
               <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full"></div>
            </div>
          </div>
        </ProfessionalCard>
      </div>

      {/* i placed Team Strength Section here  */}
      <div className="relative mt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-emerald-50 blur-3xl -z-10"></div>
        <div className="bg-white border border-slate-200 rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Team Strength</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 relative">
             <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>

            <div className="flex items-start gap-8">
              <PowerStat 
                number={50} 
                label="Engineering Team" 
                subLabel="A dedicated force of AI engineers and data scientists." 
                color="orange"
                delay={100}
              />
            </div>
            
            <div className="flex items-start gap-8">
              <PowerStat 
                number={42} 
                label="Strategic Wing" 
                subLabel="Strategists, content creators, and communication experts." 
                color="emerald"
                delay={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;