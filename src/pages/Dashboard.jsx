import React from 'react';
import { Layers, FileText, CheckCircle, Lock } from 'lucide-react';
import { Button, FadeInOnLoad } from '../components/Common';

const Dashboard = () => {
  const stats = [
    { label: "Available Services", value: "28", icon: Layers, color: "text-orange-600" },
    { label: "Requested", value: "156", icon: FileText, color: "text-slate-800" },
    { label: "Completed", value: "132", icon: CheckCircle, color: "text-emerald-600" }
  ];

  return (
    <div className="min-h-screen pt-32 bg-slate-50 relative overflow-hidden">
      {/* Background Dashboard UI i (Visual Blurred)for now can be change or integrate with live data backend */}
      <div className="container mx-auto px-6 opacity-40 blur-sm pointer-events-none select-none">
        <div className="grid grid-cols-3 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between mb-4">
                 <span className="font-bold text-slate-500">{stat.label}</span>
                 <stat.icon className={`${stat.color} w-6 h-6`} />
              </div>
              <div className="text-4xl font-bold text-slate-900">{stat.value}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
           <div className="h-64 bg-white rounded-xl border border-slate-200 shadow-sm"></div>
           <div className="h-64 bg-white rounded-xl border border-slate-200 shadow-sm"></div>
        </div>
      </div>

      {/* Lock Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-50/60 backdrop-blur-sm">
        <FadeInOnLoad>
          <div className="text-center p-12 border border-slate-200 rounded-3xl bg-white shadow-2xl max-w-lg mx-6 relative overflow-hidden">
            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-orange-100">
              <Lock className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Restricted Access</h2>
            <p className="text-slate-500 mb-8 text-sm">
              This secure dashboard contains sensitive voter data and real-time analytics.
            </p>
            <Button variant="primary" fullWidth>Login to Access</Button>
          </div>
        </FadeInOnLoad>
      </div>
    </div>
  );
};

export default Dashboard;