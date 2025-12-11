import React from 'react';
import { Github, Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white border-t border-slate-200 pt-20 pb-10 relative overflow-hidden">
    {/* Background Watermark - "SWORD" at the bottom */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none leading-none z-0">
        <h1 className="text-[18vw] font-black text-slate-100 opacity-60 text-center tracking-tighter transform translate-y-[15%]">
          SWORD
        </h1>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand & Socials */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-md flex items-center justify-center font-bold text-white text-lg">S</div>
            <span className="text-xl font-bold text-slate-900">SWORD</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Strategic Workbench for Organizational Research and Data.
          </p>
          <div className="flex gap-4">
            {[Twitter, Linkedin, Github, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-orange-500 hover:text-white transition-all"><Icon className="w-5 h-5" /></a>
            ))}
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6 text-lg border-b-2 border-orange-500 inline-block pb-1">Services</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li className="hover:text-orange-600 cursor-pointer">Political Consulting</li>
            <li className="hover:text-orange-600 cursor-pointer">Data Profiling</li>
            <li className="hover:text-orange-600 cursor-pointer">Sentiment Analysis</li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6 text-lg border-b-2 border-slate-300 inline-block pb-1">Company</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li className="hover:text-orange-600 cursor-pointer">About Us</li>
            <li className="hover:text-orange-600 cursor-pointer">Careers</li>
            <li className="hover:text-orange-600 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-slate-900 font-bold mb-6 text-lg border-b-2 border-emerald-500 inline-block pb-1">Contact</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-orange-600" />
              <span>swordofficialinfo@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-slate-800" />
              <span>+91 70023 39891</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-emerald-600 mt-1" />
              <span>Asha Bhawan, Kahilipara,<br/>Guwahati - 781019</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-500 text-sm">
          © 2025 SWORD. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Proudly built in ASSAM</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;