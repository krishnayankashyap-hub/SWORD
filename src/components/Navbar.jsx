import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// --- Internal Components i placed here ---

const Button = ({ children, variant = 'primary', className = '', onClick, icon: Icon, fullWidth }) => {
  const baseStyle = `relative px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden ${fullWidth ? 'w-full' : ''}`;
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_4px_14px_0_rgba(255,153,51,0.39)] hover:shadow-[0_6px_20px_rgba(255,153,51,0.23)] hover:-translate-y-0.5",
    secondary: "bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 shadow-sm",
    green: "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)]",
    outline: "border border-orange-500 text-orange-600 hover:bg-orange-50",
  };
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </span>
    </button>
  );
};

const SwordLogo = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <img 
      src="data:image/png;base64,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"
      alt="SWORD Logo"
      className="w-full h-full object-contain drop-shadow-md"
    />
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activePage = location.pathname.substring(1) || 'home';

  // listen to the scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(prev => {
        if (prev !== isScrolled) return isScrolled;
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Base styles for the container type design
  const navContainerClasses = `
    fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
    flex items-center justify-center
    ${scrolled 
      ? 'top-4 inset-x-4 md:w-[85%] md:inset-x-0 md:mx-auto rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-xl py-3' 
      : 'top-0 inset-x-0 w-full bg-transparent py-6'
    }
  `;

  return (
    <nav className={navContainerClasses}>
      <div className="w-full px-6 grid grid-cols-3 items-center">
        
        {/* Left Nav Links */}
        <div className="hidden lg:flex items-center justify-start gap-8">
          {['Home', 'Services', 'About', 'Blog'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={`relative text-sm font-medium transition-colors hover:text-orange-600 nav-link ${activePage === item.toLowerCase() ? 'text-orange-600' : 'text-slate-600'}`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
          <div className={`transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
            <SwordLogo />
          </div>
          <span className={`font-bold tracking-tight text-slate-900 transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'}`}>SWORD</span>
        </div>

        {/* Right Nav Links */}
        <div className="hidden lg:flex items-center justify-end gap-6">
          <Link to="/careers" className={`text-sm font-medium text-slate-600 hover:text-orange-600 nav-link transition-colors ${activePage === 'careers' ? 'text-orange-600' : ''}`}>Careers</Link>
          <Link to="/dashboard" className={`text-sm font-medium text-slate-600 hover:text-orange-600 nav-link transition-colors ${activePage === 'dashboard' ? 'text-orange-600' : ''}`}>Dashboard</Link>
          <div className="h-4 w-px bg-slate-300 mx-2"></div>
          <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Log In</Link>
          <Button onClick={() => navigate('/signup')} className={`text-sm !rounded-full transition-all duration-500 ${scrolled ? 'py-2 px-4' : 'py-2 px-5'}`}>Sign Up</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex justify-end col-span-2">
          <button className="text-slate-800 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`lg:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden transition-all duration-300 shadow-2xl rounded-2xl mx-2 ${isMenuOpen ? 'top-[120%] max-h-[500px] opacity-100' : 'top-[100%] max-h-0 opacity-0'}`}>
        <div className="p-6 flex flex-col gap-4 text-center">
          {['Home', 'Services', 'About', 'Blog', 'Careers', 'Dashboard'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-slate-600 hover:text-orange-600"
            >
              {item}
            </Link>
          ))}
          <div className="h-px bg-slate-200 w-full my-2"></div>
          <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-600 hover:text-orange-600">Log In</Link>
          <Button onClick={() => {navigate('/signup'); setIsMenuOpen(false);}} className="w-full justify-center">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;