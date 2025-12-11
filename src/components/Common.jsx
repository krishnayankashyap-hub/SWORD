import React, { useState, useEffect, useRef } from 'react';

// --- global style and animation i have put hereee ---
export const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    
    :root {
      --orange: #FF9933;
      --white: #FFFFFF;
      --green: #138808;
      --navy: #000080;
      --light-bg: #ffffff;
      --section-bg: #f8fafc;
      --text-main: #0f172a;
      --text-muted: #64748b;
    }

    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--light-bg);
      color: var(--text-main);
      overflow-x: hidden;
      cursor: default;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--light-bg); }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--orange); }

    /* Animations */
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }

    @keyframes pulse-glow {
      0%, 100% { opacity: 0.3; transform: scale(1); filter: blur(60px); }
      50% { opacity: 0.5; transform: scale(1.1); filter: blur(80px); }
    }
    .animate-pulse-glow { animation: pulse-glow 8s ease-in-out infinite; }

    @keyframes gradient-xy {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-tricolor {
      background: linear-gradient(90deg, var(--orange), #334155, var(--green));
      background-size: 200% auto;
      animation: gradient-xy 5s ease infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @keyframes grow-up {
      0% { transform: scaleY(0); opacity: 0; }
      100% { transform: scaleY(1); opacity: 0.9; }
    }
    .animate-bar {
      transform-origin: bottom;
      animation: grow-up 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    @keyframes train-enter {
      0% { opacity: 0; transform: translateX(50px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    .animate-train-card {
      opacity: 0; 
      animation: train-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes draw-line {
      0% { width: 0; }
      100% { width: 100%; }
    }
    .animate-line {
      width: 0;
      animation: draw-line 2s cubic-bezier(0.45, 0, 0.55, 1) forwards;
    }

    @keyframes trail-glow {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    .animate-trail-glow { animation: trail-glow 3s linear infinite; }

    @keyframes scan-light {
      0% { transform: translateY(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateY(100%); opacity: 0; }
    }
    .animate-scan-active { animation: scan-light 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }

    @keyframes packet-drop {
      0% { top: 0%; opacity: 0; }
      20% { opacity: 1; }
      100% { top: 100%; opacity: 0; }
    }
    .animate-packet { animation: packet-drop 2s linear infinite; }
    
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .animate-shimmer {
      background: linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent);
      background-size: 200% 100%;
      animation: shimmer 3s infinite linear;
    }

    /* Glassmorphism */
    .glass {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .glass-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .glass-card:hover {
      border-color: var(--orange);
      box-shadow: 0 20px 40px -10px rgba(255, 153, 51, 0.2);
      transform: translateY(-5px);
    }

    .text-gradient-saffron {
      background: linear-gradient(135deg, #FF9933 0%, #FF7700 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .map-container {
      position: relative;
      overflow: hidden;
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.1);
      box-shadow: 0 20px 50px rgba(0,0,0,0.1);
    }
    
    .map-overlay { background: linear-gradient(to top, #ffffff 0%, transparent 100%); }

    /* Navbar Link Hover */
    .nav-link { position: relative; }
    .nav-link::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(to right, var(--orange), var(--navy), var(--green));
        transition: width 0.3s ease;
    }
    .nav-link:hover::after { width: 100%; }
  `}</style>
);

// --- Hooks are hereeee  ---
export const useScrollAnimation = () => {
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

// --- Animations Components i have put hereee ---
export const FadeIn = ({ children, delay = 0, className = '', direction = 'up' }) => {
  const { isVisible, domRef } = useScrollAnimation();
  const transforms = {
    up: 'translate-y-10', down: '-translate-y-10', left: 'translate-x-10', right: '-translate-x-10', none: ''
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

export const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { isVisible, domRef } = useScrollAnimation();

  useEffect(() => {
    let startTime;
    let animationFrame;

    if (isVisible) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        if (progress < duration) {
          const nextCount = Math.min(end, Math.floor((progress / duration) * end));
          setCount(nextCount);
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      animationFrame = requestAnimationFrame(animate);
    } else {
      setCount(0); 
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <span ref={domRef}>{count}{suffix}</span>;
};

export const FadeInOnLoad = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible 
          ? 'opacity-100 translate-x-0 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- UI Components which make it wowwww ---
export const Button = ({ children, variant = 'primary', className = '', onClick, icon: Icon, fullWidth }) => {
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

export const SectionTitle = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-2xl mx-auto">{subtitle}</p>}
    <div className={`h-1.5 w-24 bg-gradient-to-r from-orange-500 via-white to-emerald-600 rounded-full mt-6 shadow-sm border border-slate-100 ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);

export const ProfessionalCard = ({ children, delay = 0, color = 'orange' }) => {
  const { isVisible, domRef } = useScrollAnimation();
  return (
    <div ref={domRef} className={`relative group transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-${color}-500/0 via-${color}-500/30 to-${color}-500/0 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
      <div className="relative h-full">{children}<div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-${color}-500 to-transparent w-full transition-all duration-1000 ${isVisible ? 'opacity-50 width-full' : 'opacity-0 width-0'}`}></div></div>
    </div>
  );
};

export const PowerStat = ({ number, label, subLabel, delay = 0, color = 'orange' }) => {
  const { isVisible, domRef } = useScrollAnimation();
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime;
    let animationFrame;
    const duration = 1500;
    if (isVisible) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        if (progress < duration) {
          setCount(Math.min(number, Math.floor((progress / duration) * number)));
          animationFrame = requestAnimationFrame(animate);
        } else { setCount(number); }
      };
      animationFrame = requestAnimationFrame(animate);
    } else { setCount(0); }
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, number]);
  return (
    <div ref={domRef} className="w-full">
      <div className="flex items-end justify-between mb-2">
        <h4 className="text-xl font-bold text-slate-800">{label}</h4>
        <div className={`text-3xl font-black text-${color}-600 leading-none tabular-nums`}>{count}+</div>
      </div>
      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
        <div className={`h-full bg-gradient-to-r from-${color}-500 to-${color}-600 shadow-[0_0_10px_rgba(var(--${color}-rgb),0.3)] transition-all duration-1000 ease-out`} style={{ width: isVisible ? '100%' : '0%', transitionDelay: `${delay}ms` }}></div>
      </div>
      <p className="text-slate-500 text-sm mt-2">{subLabel}</p>
    </div>
  );
};

// --- SWord logo with sword image url s hereee  ---
export const SwordLogo = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <img 
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAADOCAMAAADsQNVfAAAAY1BMVEX///8StYcVlLnE7OGI2sNNx6UguY7w+vfE5O1Prsqm49Lw+PsvvpaKydwjmr1q0bTi8van1+XS8eg+w5151bvh9vBsvNPT6/IxocJAqMa16NlbzKy23emX3sp7w9ddtc+Y0OB9eyaVAAAKD0lEQVR4nOWd54LivA6GB0ghJIHQWfr9X+WXQJzqFkuyzTnvn92dYYMfLEtyE39/NpUuG52tvrEdpct7nifJv/lY/5Ikz+/L1HUT4Vq+TwkHcKzklP8sb7E98XpRpsvr/Ws2nd5Pl4mUTOvXu3DdfF2l25chZdO3z1/oWjBmDZv73bPFaY3C+VGydY0j1F3PzeprnXvpjremPkiqk3dGTMPpH+sS22578seGUxx3K9baE9/0RvS3IiUemHBBariN1m/XoHcLHfpV4na0Pm1xllov3XGmUycrQL1dgZ6tWS7T6f8FdD7/52Kwbu1zukF1A+oAdekI1DqqizHqBLVwCDqfv+yB2o6jQ9kLNie3oPO5rbnN2zXofG5n7dClN2K6WPFKjgfpV08LoB7YbiX6iY3bANOK3n6d+12mnBjUXRY4EvHSkp1VIy3R5g8edSmxU/JmlFZKCEEL13B9EY5UjKXAyysv9cQY8IQjFRxLL+3WfoqwCUnWqXco52AOAl7/J4upQH90Gqc1W5iVXKhIYc3iTiqBEyOiQAMzXsHsOQWhEvkkkOcVDilQr65pSCETU0mUB5kKifmmgAatZfEA4oFJZuSQz14aDiCZ1z8K0hzQIPm0GXJOgiJ5ABiZYi0aYi13AlLAiSPV+iyAlGKgApqjMjGAuRBM3c4AUtWzIS4AnxSw3KD83CGk+Mv5gK1hJSlkDRnfJQE+dyUpZHkKf+bmKyl+ku8rKb7zpYwEEFL8fNBXUvwwAyBVfuz/M6TKxoBI0TfdIKSqmAciRZ+MQ0hVkcAv6wUtgSpSfD9Id/WfxXK5rXYZuPdIVVJMUP0g3XB+ln6ok0R/yiofqV6QLkL575fLd/5SI6+lUw4vSDcKUqbiQ2yI6gNpPJtNen1amvWLO5JlqD6QBhNJa53vY17JTSYfSLPZbKd+lUDn7TPp7kVwNtu+8oB0NZvNFrBHFPe8Gb4XgQsG3dCFNY+p7NJZUP/9NqsV1toEpVaLxeKofM75XV+RF15QOz9NV1lRQBcVGAuowUymkjwIHjLq4v6shq74Puk5N9rjQiENK4Z9F1tDURgegisfOd2WfSu5O1sY9CwGaM3G/qlJ2ij7EI+een4nL8n84/ycOGYxSLNvi1ljw6morI8PwaCH0+1zK5lW3idtSSGAruqmMpf0MCOtVTqwLm8qTQ+LXN+K4aBxxtpY/2AHIq2fdVhpRi3t40pw0tbXxvVPMgnCFO03Dx3cQm9KDAY9Rk3LriN2BJW9q4zDaa7hncCkt7ZRLKIeMUkrRbdA0bkarFDQa7dB7IeG3leuMLjGkoYoWYGgcdRtDDPfq6i1UO0Pkr5VsAJJb72G3NiPsXwST2EgnDWlskNfMNBh5zHzWnHbiKboJvJShTiZAIEeo0ETHuw3lJ36lciQl6JcAkS6H759xn5DNlK7ijZXXqsEwxUCehi/efPWJO53rCzgmDH/5DMAlDcYmxVC9Jgq1IZjxbxqNuagu+Eg/ah5W9RESa79atQ4Trcag8Zc0LZTx4OYUNljlFSMTiEYg4pAmk4dOWZSRcGQdbnGIRV6nLZTrfjfViPWNMEg3YjfsR00FofqR1EwaOVTSFrtIQz2Ay9J8srz5WBBRwI6y2Ktl5EoG/imLYe0WkfnRaFa/UOjcoJD+0KbXumrsJ8Ud+4pVP8s3i/FjGc7AbS7byH0W4Q6xHzUv0JjnbgHGivTn/2fU9SslyMWDE9nvakPqtH2jmdQfy4EunW7dUJNlB4oPzMaqpugWXdLpbKFCWoPdKWXDkTdD9V2sPkomI7aBY3V/VN/Ep2hWqYQVrOlWl0L1rop1gXdqYZoOWFk+0+9oyzK/0ih/W4SahdUYYXfRYBmp60fwzlTWXJFHVTlVZvOke6FZMEkalco2z3FPqrsv1Mp6oQbxQHr7jm+R7AJRxFjH96Cx6LrflrSqJ+txC66tfNpS/fluCeL40Ut/lpkZ594gPq3cxBaW9RUsitnVNytuyM+RNWNUZhqA6v4ypL0LqgW6Rg1DmyzdpogHKpml4b6pxyi0TKlddZOEiNIIAzrug3Pc4wXs2yztkkM335NL9KMTq4cxq+xzNq2gLdtY1xqcnxGJ+TsBcYrm+G18UqcUglm3ohPOsu48WhxG7+SSO1QHTsl8+KL3HNXD+5Lj4Gtjm3tdxhUAbfd+CfMQsEm4NXS5LWx38GdUUjlOsFZuojfrdWItTHPaRahByMVcodGeGpQ1K2lFT/orbgJdr2RCromLzkfOdpPaLU7EMM2G7sFku3KT4JG4zTCGmzz1i8c21WdeR2usduDbUZqOycH1mxWne6VsxLCNkGd+STznEGPtGKVHaAig21iKjtlCL0ir3NiOzooTgLuDviJcXMA7o7hjjRJS924p046um6wYdk7ptA0cBpp1bGKCzbxCnc1plmX/UxT4eXqtElLZSrYI6YVNyH1idKlk0hnn7VwuX9CTBaZc9iidOlU0kp7+eHdBZYRs/i2ROlSE9IPrexkNhJrM1Bxikoakn4kHrUoOwBNmoTz/UkQUpkRY2xNsmcla4zaDlSkGPt1bHwkKHV1yEh1Nm81n5+g1L+iI4WfI2DrHjilkihJoajsRABOXRJSUiDq8LCdz6QxKNrclM/3hxT0+JlmyQk/SEHn+3+LFHJoGJcUctNA68YpYB6HSzr5lvhUUoD5/hgpIAFGJgWkpz9GCrAualLczAFybu7HSAEt+TFSQEClJgVW+xkKEFB/jBQQ2qlJkUEBzpeYNFI/fJrMm0JMihxOIS6JmJRz2g0oX0nle9QmMj48RkyqLqM2Vcb1kWhJM/Wzp8o4otKS8kq0QmU6naElxR+m5uZLSyrfpzWTqfmSkuIugTIZel9SUgrjNV7A02qM6fyXwnj/TEvpaM0fDdNqGuM19UlarTGcKmHP2JgEpUoU0plsGBYzJEgbapn5DdXBM+MHE/mjSmadqpHGmHkA9KlpR2afvTIJNyyQhrxW1pfRh6/sVLMuzYhCzFdmMVXhIg3zTLpR+pFRoiT/9PWKSYy0lz0TQWZOSRZTTUubUMXSRmb2Kx6qpqD460cjmSX6IlRTUFp3VLfNzFPuubFmYbpiTm67lQw9yKhKF+QonQXbrWRaCXVQVQ9wSp3a7zYyX7O81TW240UA2GaPLAzSWi6qI3Vk/gUpP4ZKnBz5g2oX1CGqbVBnqPZBHVUycwFKXmHcH9AyW7Jc8iqykgNyZbfC4t5mHB0J9rUzk7SxlxlxZasWn7TEgCU9bFQLEpfIsKkjeQEdYdkT60K7TcrXzYsOrUVYBGrvLrbwRcSqKIrhRgQ27CVnJdRr/aXD9c1ue1phOWJlzQ/3ijFg+V8y45/iFaTsSLRRlKvxTLvHzYQ2VH2Jm586XoNQHzdTflWd54oXj2BcDrmnfTgojfzb2i1K5CA4hI0O3686tvHm/wFjscr0JsNXGAAAAABJRU5ErkJggg=="
      alt="SWORD Logo"
      className="w-full h-full object-contain drop-shadow-md"
    />
  </div>
);