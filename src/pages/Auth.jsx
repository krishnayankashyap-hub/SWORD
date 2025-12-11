import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Button } from '../components/Common';

const Auth = ({ type }) => {
  const navigate = useNavigate();
  return (
  <div className="min-h-screen pt-20 flex items-center justify-center p-6 bg-slate-50">
    <div className="w-full max-w-4xl grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
      <div className="hidden md:flex flex-col justify-center p-12 bg-slate-900 relative overflow-hidden text-white">
         <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>
         
         <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Welcome to <span className="text-orange-400">SWORD</span></h2>
            <p className="text-slate-300 mb-8">The most advanced political intelligence platform in the region.</p>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
               <Shield className="w-4 h-4 text-emerald-400" /> Secure Encryption
            </div>
         </div>
      </div>

      <div className="p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          {type === 'login' ? 'Sign In' : 'Create Account'}
        </h2>

        <form className="space-y-4">
          {type === 'signup' && (
            <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400" />
          )}
          <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400" />
          <input type="password" placeholder="Password" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-orange-500 outline-none transition-all placeholder:text-slate-400" />

          <Button variant="primary" fullWidth onClick={() => navigate('/dashboard')}>
            {type === 'login' ? 'Access Dashboard' : 'Register'}
          </Button>
        </form>

        <p className="text-center text-slate-500 text-sm mt-6">
          {type === 'login' ? "New here? " : "Already registered? "}
          <button onClick={() => navigate(type === 'login' ? '/signup' : '/login')} className="text-orange-600 hover:text-orange-700 font-bold">
            {type === 'login' ? "Create Account" : "Login"}
          </button>
        </p>
      </div>
    </div>
  </div>
)};

export default Auth;