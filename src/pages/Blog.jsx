import React, { useState, useRef, useEffect } from 'react';
import { Database, Clock, Cpu, MapPin, Activity, Users, Crosshair, Wifi, ArrowUpRight, Search } from 'lucide-react';

// --- Static---
const POSTS = [
  { id: 1, title: "AI in Modern Politics", cat: "Tech", date: "Oct 12", author: "Dr. Sharma", readTime: "5m", desc: "Revolutionizing voter behavior analysis with predictive modeling and sentiment tracking.", icon: Cpu, color: "orange" },
  { id: 2, title: "Constituency Profiling", cat: "Method", date: "Sep 28", author: "Research Team", readTime: "8m", desc: "Granular details of every ward for maximum impact and resource allocation.", icon: MapPin, color: "slate" },
  { id: 3, title: "Sentiment Tracking", cat: "Case Study", date: "Sep 15", author: "Sarah J.", readTime: "4m", desc: "How live data turned the tide in the recent assembly elections.", icon: Activity, color: "emerald" },
  { id: 4, title: "The Swing Voter", cat: "Analytics", date: "Aug 30", author: "Data Wing", readTime: "6m", desc: "Strategies for engaging and converting the undecided demographic effectively.", icon: Users, color: "orange" },
  { id: 5, title: "Micro-Targeting", cat: "Strategy", date: "Aug 12", author: "Ops Team", readTime: "7m", desc: "Moving beyond broad messaging to hyper-local relevance in rural districts.", icon: Crosshair, color: "slate" },
  { id: 6, title: "Rural Campaigning", cat: "Field Ops", date: "Jul 22", author: "Field Lead", readTime: "5m", desc: "Overcoming connectivity challenges to reach every voter with precision.", icon: Wifi, color: "emerald" }
];

// --- Internal Component for Scroll Animation (Bidirectional) ---
const ScrollReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection (Reveal/Dereveal)
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "-50px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on search query
  const filteredPosts = POSTS.filter(post => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.desc.toLowerCase().includes(query) ||
      post.cat.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 relative">
      
      {/* Background Ambience ( to prevent breaking sticky) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start"> 
          {/* items-start is crucial for sticky behavior */}
          
          {/* --- LEFT COLUMN: Sticky Header & Filters --- */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold tracking-wider mb-6 shadow-sm">
              <Database className="w-3 h-3 text-orange-500" /> INTELLIGENCE ARCHIVE
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tighter mb-6">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-slate-600 to-emerald-500">Insights</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Deep dives into political strategy, data science, and field operations.
            </p>

            {/* Search Bar */}
            <div className="flex items-center gap-3 bg-white p-2 pr-2 rounded-full border border-slate-200 shadow-sm focus-within:border-orange-300 focus-within:ring-2 focus-within:ring-orange-100 transition-all mb-8">
              <div className="pl-3 text-slate-400">
                  <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400 font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-orange-600 transition-all">
                  Search
              </button>
            </div>

            {/* Categories (Clicking sets search query) */}
            <div className="flex flex-wrap gap-3">
              {['All', 'Strategy', 'Tech', 'Field Ops', 'Data'].map((tag, i) => (
                  <span 
                    key={i} 
                    onClick={() => setSearchQuery(tag === 'All' ? '' : tag)}
                    className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border cursor-pointer transition-colors ${i === 0 && searchQuery === '' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-orange-500 hover:text-orange-600'}`}
                  >
                    {tag}
                  </span>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: Scrollable Content List --- */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            {filteredPosts.length > 0 ? (
                filteredPosts.map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 50}> 
                    <div className="group relative bg-white border border-slate-200 p-6 md:p-8 rounded-2xl hover:border-orange-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                        
                        {/* Hover Gradient Effect */}
                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-${post.color}-500 to-${post.color}-600 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-br from-${post.color}-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>

                        <div className="flex flex-col md:flex-row gap-6 relative z-10">
                            {/* Icon Box */}
                            <div className={`w-16 h-16 rounded-2xl bg-${post.color}-50 border border-${post.color}-100 flex items-center justify-center shrink-0 text-${post.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                            <post.icon className="w-8 h-8" />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <span className={`text-[10px] font-bold uppercase tracking-widest text-${post.color}-600 bg-${post.color}-50 px-2 py-1 rounded border border-${post.color}-100`}>
                                    {post.cat}
                                </span>
                                <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                                    {post.date} <span className="w-1 h-1 rounded-full bg-slate-300"></span> {post.readTime} read
                                </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                                {post.title}
                            </h3>
                            
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                {post.desc}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-100/50">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
                                        {post.author.charAt(0)}
                                    </div>
                                    <span className="text-xs font-bold text-slate-700">{post.author}</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs font-bold text-orange-600 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                                    Read Article <ArrowUpRight className="w-3 h-3" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
                ))
            ) : (
                <div className="py-20 text-center text-slate-400 flex flex-col items-center">
                    <Database className="w-12 h-12 mb-4 text-slate-200" />
                    <p>No insights found matching "{searchQuery}"</p>
                    <button 
                        onClick={() => setSearchQuery("")} 
                        className="mt-4 text-orange-600 font-bold text-sm hover:underline"
                    >
                        Clear filters
                    </button>
                </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;