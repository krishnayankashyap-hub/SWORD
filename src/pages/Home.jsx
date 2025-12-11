import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, TrendingUp, PieChart, Megaphone, Server, Cpu, 
  MapPin, Award, Users, Lightbulb, BarChart2, Crosshair, AlertTriangle 
} from 'lucide-react';
import { FadeIn, CountUp, Button, SectionTitle, useScrollAnimation } from '../components/Common';

// --- Internal Component: Our Services Section ---
const OurServicesSection = () => {
  const { isVisible, domRef } = useScrollAnimation();

  return (
    <section className="py-24 bg-white overflow-hidden" ref={domRef}>
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Our Services" 
          subtitle="Specialized solutions powered by advanced technology." 
        />
        
        <div className="relative">
           {/* Connecting Line - Scroll Dependent depending on scroll */}
           <div className={`absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 hidden md:block transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className={`h-full bg-gradient-to-r from-orange-500 via-slate-300 to-green-500 ${isVisible ? 'animate-line' : ''}`}></div>
           </div>

           <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Survey", desc: "Scientific data collection using stratified sampling for precise voter sentiment analysis.", icon: PieChart, color: "orange" },
              { title: "PR and Brand Management", desc: "Strategic image building, crisis management, and narrative control across all media channels.", icon: Megaphone, color: "slate" },
              { title: "IT Support", desc: "End-to-end digital infrastructure management, securing campaign data and optimizing workflows.", icon: Server, color: "green" },
              { title: "Ai Driven Data", desc: "Predictive analytics and machine learning models to forecast trends and optimize resource allocation.", icon: Cpu, color: "blue" },
            ].map((service, i) => (
              <div 
                key={i} 
                className={`transition-all duration-700 ${isVisible ? 'animate-train-card' : 'opacity-0 translate-x-[100px] scale-90'}`} 
                style={{animationDelay: `${i * 300}ms`, transitionDelay: `${i * 200}ms`}}
              >
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-500 transition-all h-full group hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
                  <div className={`w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10`}>
                    <service.icon className={`w-6 h-6 text-${service.color === 'slate' ? 'slate-700' : service.color + '-500'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 relative z-10">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed relative z-10">{service.desc}</p>
                  
                  {/* Train Trail Glow */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 animate-trail-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Home Component ---
const Home = () => {
  const navigate = useNavigate();
  const { isVisible: graphVisible, domRef: graphRef } = useScrollAnimation();

  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-orange-100/40 via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-bold tracking-wider mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  #VocalForLocal
                </div>
              </FadeIn>
              
              <FadeIn delay={100}>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900 mb-2">
                  Powering <br />
                  <span className="animate-tricolor">Political Precision</span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={200}>
                  <h2 className="text-xl text-slate-700 font-semibold mb-3 tracking-wide">Strategic Workbench for Organized Research and Data</h2>
                  <p className="text-lg text-slate-500 max-w-lg lg:mx-0 mx-auto font-light leading-relaxed">
                    Empowering political, social, and developmental research through AI, data analytics, and field intelligence.
                  </p>
              </FadeIn>
              
              <FadeIn delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
                  <Button variant="primary" onClick={() => navigate('/dashboard')} icon={ArrowRight}>
                    Explore Dashboard
                  </Button>
                  <Button variant="secondary" onClick={() => navigate('/contact')}>
                    Schedule Consultation
                  </Button>
                </div>
              </FadeIn>

              {/* Animated Stats Row */}
              <FadeIn delay={400}>
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200 mt-8">
                  <div>
                    <div className="text-3xl font-bold text-slate-900 tabular-nums">
                      <CountUp end={500} suffix="+" />
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Research Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 tabular-nums">
                      <CountUp end={94} suffix="%" />
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">24/7</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Real-time Intel</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Dashboard Preview */}
            <div className="lg:w-1/2 relative perspective-1000">
              <FadeIn delay={200} className="relative z-10 animate-float">
                <div className="relative bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden">
                  <div className="bg-slate-50 p-4 flex items-center justify-between border-b border-slate-200">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">SWORD_INTEL_V2</div>
                  </div>
                  <div className="p-6 grid grid-cols-2 gap-4">
                    <div className="col-span-2 bg-gradient-to-br from-orange-50 to-white border border-orange-100 p-5 rounded-lg overflow-hidden relative" ref={graphRef}>
                      <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                           <div className="text-xs text-orange-600 uppercase font-bold mb-1">Live Sentiment</div>
                           <div className="text-2xl font-bold text-slate-800">Positive Trend</div>
                        </div>
                        <TrendingUp className="text-emerald-500 w-6 h-6 animate-pulse" />
                      </div>
                      {/* Graph Bars */}
                      <div className="h-32 flex items-end justify-between gap-2 mt-4">
                         {[35, 55, 45, 70, 65, 85, 95, 75, 60, 90, 80, 100].map((h, i) => (
                           <div 
                             key={i} 
                             className={`w-full bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-sm ${graphVisible ? 'animate-bar' : 'opacity-0'}`} 
                             style={{
                               height: `${h}%`, 
                               animationDelay: `${i * 100}ms`
                             }}
                           ></div>
                         ))}
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <div className="text-xs text-slate-500 mb-1">Completion</div>
                      <div className="text-xl font-bold text-slate-800">
                        <CountUp end={87} suffix="%" />
                      </div>
                      <div className="w-full bg-slate-200 h-1 mt-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[87%] animate-pulse"></div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <div className="text-xs text-slate-500 mb-1">Requests</div>
                        <div className="text-xl font-bold text-slate-800">
                          <CountUp end={156} />
                        </div>
                        <div className="w-full bg-slate-200 h-1 mt-2 rounded-full overflow-hidden">
                           <div className="bg-orange-500 h-full w-[45%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights Section*/}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 sticky top-32 h-fit">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold tracking-wider mb-6">
                  <Lightbulb className="w-3 h-3" /> INTELLIGENCE WING
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Featured <br/> <span className="text-gradient-saffron">Insights</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  <strong className="text-slate-800">Latest research and data-driven discoveries from our intelligence wing.</strong> Stay ahead with our comprehensive analysis of political trends and voter behavior.
                </p>
                <Button variant="outline" icon={ArrowRight}>View All Reports</Button>
              </FadeIn>
            </div>

            <div className="lg:w-2/3 space-y-8">
              {[
                { title: "Voter Sentiment Analysis", desc: "AI-powered analysis of voter behavior across multiple constituencies. Real-time tracking of public opinion shifts.", icon: BarChart2, color: "orange" },
                { title: "Demographic Insights", desc: "Comprehensive constituency profiling and machine learning segmentation to identify key voter blocs.", icon: Users, color: "slate" },
                { title: "Strategic Planning", desc: "Actionable political strategy development informed by predictive models and historical data patterns.", icon: Crosshair, color: "green" },
                { title: "Crisis Management", desc: "Rapid response protocols and sentiment recovery strategies powered by AI monitoring.", icon: AlertTriangle, color: "orange" },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 150} direction="up">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 group flex gap-6 items-start shadow-sm hover:shadow-md">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-slate-50 group-hover:bg-${item.color === 'slate' ? 'slate-100' : item.color + '-50'} transition-colors`}>
                      <item.icon className={`w-8 h-8 text-slate-400 group-hover:text-${item.color === 'slate' ? 'slate-800' : item.color + '-600'} transition-colors`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed mb-4">{item.desc}</p>
                      <button className="text-sm font-bold text-orange-600 flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider">
                        Read Full Report <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <OurServicesSection />

      {/* Map Coverage Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Strategic Coverage" 
            subtitle="Deep operational capabilities across the region, tailored for localized impact."
          />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
                <div className="map-container bg-white p-2 relative group hover:border-orange-500 transition-colors duration-500">
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-200 shadow-lg">
                      <div className="text-xs text-orange-600 font-bold uppercase tracking-wider">Active Region</div>
                      <div className="text-slate-900 font-bold">Assam & North East</div>
                  </div>
                  <div className="w-full h-[450px] bg-slate-100 rounded-xl overflow-hidden relative">
                      <img 
                      src="https://www.mapsofindia.com/maps/assam/assam-map.jpg" 
                      alt="Assam Strategic Map" 
                      className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-1000 opacity-80 mix-blend-multiply"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                    
                      <div className="absolute top-[40%] left-[45%] w-4 h-4 bg-orange-500 rounded-full animate-ping z-10"></div>
                      <div className="absolute top-[40%] left-[45%] w-4 h-4 bg-orange-500 rounded-full border-2 border-white z-10 shadow-lg"></div>
                      
                      <div className="absolute top-[30%] right-[30%] w-3 h-3 bg-emerald-500 rounded-full animate-pulse z-10"></div>
                      <div className="absolute bottom-[35%] left-[30%] w-3 h-3 bg-emerald-500 rounded-full animate-pulse z-10"></div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn direction="left">
               <div className="space-y-8">
                 <div className="flex gap-4 group">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors border border-orange-100">
                       <MapPin className="text-orange-500 w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">Localized Field Operations</h3>
                      <p className="text-slate-500 leading-relaxed">
                        Our field teams are deployed across key districts, providing real-time data from the ground up. We understand the local dialect, culture, and sentiment.
                      </p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4 group">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors border border-emerald-100">
                       <Award className="text-emerald-500 w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">Vocal for Local</h3>
                      <p className="text-slate-500 leading-relaxed">
                        Proudly built in India, for India. Our technologies are designed to address the specific nuances of the Indian political landscape, promoting self-reliance and local innovation.
                      </p>
                    </div>
                 </div>

                 <div className="flex gap-4 group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-100 transition-colors border border-slate-100">
                       <Users className="text-slate-600 w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Constituency Profiling</h3>
                      <p className="text-slate-500 leading-relaxed">
                        Comprehensive data profiling for every Ward, GP, and ZPC. We map the pulse of the voter with granular precision.
                      </p>
                    </div>
                 </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;