import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { GlobalStyles } from './components/Common';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import Auth from './pages/Auth';
import Contact from './pages/Contact';

// --- Internal Preloader Component ---
const Preloader = ({ onFinish }) => {
  // Define colors to match the brand (Orange, Navy, Green)
  const brandColors = ['#FF9933', '#000080', '#138808', '#FF9933', '#138808']; 
  const logoSrc = "data:image/png;base64,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";
  const tagline = "Empowering political, social, and developmental research through AI, data analytics, and field intelligence.";

  useEffect(() => {
    // Wait for animation to finish (2.5 seconds) + tagline display time (1.5s)
    const timer = setTimeout(onFinish, 2500); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center space-y-8">
      
      {/* Logo Image */}
      <div className="w-24 h-24 md:w-32 md:h-32 opacity-0 animate-logo-fade" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
        <img src={logoSrc} alt="SWORD Logo" className="w-full h-full object-contain" />
      </div>

      {/* SWORD Text Animation (Using Gray/Black Gradient) */}
      <div className="flex gap-2 md:gap-4 overflow-hidden">
        {['S', 'W', 'O', 'R', 'D'].map((char, index) => (
          <span
            key={index}
            
            className="inline-block text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-600 opacity-0 animate-sword-reveal"
            style={{ 
              animationDelay: `${index * 0.2}s`, //delay
              animationFillMode: 'forwards',
            }}
          >
            {char}
          </span>
        ))}
      </div>
      
      {/* Tagline */}
      <p 
        className="text-sm md:text-base text-slate-600 max-w-sm text-center opacity-0 animate-tagline-fade"
        style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
      >
        {tagline}
      </p>
      
      {/* Defined Keyframes */}
      <style>{`
        @keyframes sword-reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-sword-reveal {
          animation: sword-reveal 0.6s cubic-bezier(0.2, 0.5, 0.4, 1.2);
        }
        @keyframes logo-fade {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-logo-fade {
            animation: logo-fade 0.8s ease-out;
        }
        @keyframes tagline-fade {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        .animate-tagline-fade {
            animation: tagline-fade 1s ease-in;
        }
      `}</style>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // If loading, show Preloader instead of the App
  if (isLoading) {
    return (
      <>
        <GlobalStyles /> {/* Load fonts for the preloader */}
        <Preloader onFinish={() => setIsLoading(false)} />
      </>
    );
  }

  return (
    <Router>
      {/* 1. Global Styles here for design work i kept it */}
      <GlobalStyles />
      
      <div className="min-h-screen relative text-slate-900 selection:bg-orange-100 bg-white">
        
        {/* 2. Navbar at the top */}
        <Navbar />

        {/* 3. Main Content Area */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Auth type="login" />} />
            <Route path="/signup" element={<Auth type="signup" />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* 4. Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;