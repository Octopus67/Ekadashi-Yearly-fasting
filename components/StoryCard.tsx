
import React, { useState } from 'react';
import { BookOpen, ChevronUp, X, Leaf, Sparkles, Brain, Activity, Dna, Droplets, Ban, CheckCircle2 } from 'lucide-react';
import { EkadashiInfo } from '../types';

interface StoryCardProps {
  info: EkadashiInfo | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ info, isOpen, onOpenChange }) => {
  const [mode, setMode] = useState<'spiritual' | 'scientific'>('spiritual');

  if (!info) return null;

  if (!isOpen) {
    return (
      <div 
        onClick={() => onOpenChange(true)}
        className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-t border-white/20 p-6 pb-8 rounded-t-3xl cursor-pointer hover:bg-white/15 transition-all z-50 flex flex-col items-center"
      >
        <div className="w-12 h-1 bg-white/30 rounded-full mb-4" />
        <div className="flex items-center gap-3 text-white">
          <BookOpen className="w-5 h-5 text-amber-300" />
          <span className="font-serif text-lg tracking-wide">Read Vrat Katha</span>
          <ChevronUp className="w-4 h-4 text-white/50" />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-0 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={() => onOpenChange(false)}
      />
      
      {/* Modal/Sheet */}
      <div className="relative w-full max-w-lg bg-[#0f0f1a] sm:rounded-2xl rounded-t-3xl overflow-hidden flex flex-col max-h-[90vh] border border-white/10 shadow-2xl animate-in slide-in-from-bottom-10 duration-300">
        
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-r from-indigo-900 to-purple-900 flex items-center justify-center shrink-0">
          <button 
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 p-2 bg-black/20 rounded-full text-white/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-center p-4">
            <div className="text-amber-400 text-xs tracking-[0.3em] uppercase font-bold mb-1">Current Katha</div>
            <h2 className="font-serif text-3xl text-white">{info.name}</h2>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex p-2 bg-[#1a1a2e]">
            <button 
              onClick={() => setMode('spiritual')}
              className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all ${mode === 'spiritual' ? 'bg-indigo-600 text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}
            >
              <Sparkles className="w-4 h-4" /> Spiritual
            </button>
            <button 
              onClick={() => setMode('scientific')}
              className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all ${mode === 'scientific' ? 'bg-emerald-600 text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}
            >
              <Leaf className="w-4 h-4" /> Scientific
            </button>
        </div>

        {/* Content Scroll */}
        <div className="overflow-y-auto p-6 text-white/80 leading-relaxed space-y-6 scrollbar-thin scrollbar-thumb-white/10">
          
          {mode === 'spiritual' ? (
            <>
               <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl">
                  <h4 className="text-indigo-300 font-serif mb-2 text-sm font-bold uppercase tracking-wider">Spiritual Benefit</h4>
                  <p className="text-sm leading-relaxed">{info.spiritual_benefit}</p>
               </div>
               <div>
                  <h3 className="font-serif text-2xl text-white mb-4">The Legend</h3>
                  <p className="text-justify opacity-90 whitespace-pre-line">{info.story}</p>
               </div>
            </>
          ) : (
             <>
               {/* Nobel Badge */}
               <div className="bg-gradient-to-r from-amber-900/20 to-amber-600/10 border border-amber-500/20 p-3 rounded-lg flex items-start gap-3">
                  <div className="p-2 bg-amber-500/20 rounded-full shrink-0">
                    <Dna className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-amber-300 text-xs font-bold uppercase tracking-wide mb-1">Backed by Science</h4>
                    <p className="text-xs text-amber-100/80 leading-relaxed">
                      The 2016 Nobel Prize in Medicine was awarded for the discovery of <strong>Autophagy</strong>—the exact cellular repair mechanism triggered by the Ekadashi fast.
                    </p>
                  </div>
               </div>

               {/* Physiological Impact Grid */}
               <h3 className="text-white font-serif text-lg">Physiological Impact</h3>
               <div className="grid grid-cols-1 gap-3">
                  
                  <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-full">
                      <Activity className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-emerald-300 font-bold text-sm">Cellular Detritus Removal</h4>
                      <p className="text-xs text-white/60">Cells hunt down and eat their own damaged parts (senescent cells), recycling them into new energy.</p>
                    </div>
                  </div>

                  <div className="bg-blue-500/5 border border-blue-500/10 p-4 rounded-xl flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-full">
                      <Brain className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-blue-300 font-bold text-sm">Neuro-Plasticity Boost</h4>
                      <p className="text-xs text-white/60">Fasting increases BDNF (Brain-Derived Neurotrophic Factor), effectively growing new brain cells.</p>
                    </div>
                  </div>
                  
               </div>
               
               {/* Food Protocol */}
               <div className="mt-6">
                  <h3 className="text-white font-serif text-lg mb-4">The Dietary Protocol</h3>
                  
                  <div className="space-y-4">
                    {/* Allowed */}
                    <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl overflow-hidden">
                      <div className="bg-emerald-500/10 px-4 py-2 flex items-center gap-2 border-b border-emerald-500/10">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">Sattvic Fuel (Allowed)</span>
                      </div>
                      <div className="p-4 flex flex-wrap gap-2">
                        {info.foods_allowed.map(f => (
                          <span key={f} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-200">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Avoid */}
                    <div className="bg-red-900/10 border border-red-500/20 rounded-xl overflow-hidden">
                      <div className="bg-red-500/10 px-4 py-2 flex items-center gap-2 border-b border-red-500/10">
                        <Ban className="w-4 h-4 text-red-400" />
                        <span className="text-xs font-bold text-red-300 uppercase tracking-widest">Tamasic Load (Avoid)</span>
                      </div>
                      <div className="p-4 flex flex-wrap gap-2">
                        {info.foods_avoided.map(f => (
                          <span key={f} className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-xs text-red-200">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
               </div>

               {/* Hydration Note */}
               <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10 mt-2">
                  <Droplets className="w-5 h-5 text-blue-400 shrink-0" />
                  <p className="text-xs text-blue-200/80 italic">
                    Unless observing <strong>Nirjala</strong> (dry fast), drink plenty of warm water to assist the lymphatic system in flushing out the toxins released during autophagy.
                  </p>
               </div>

             </>
          )}

        </div>
      </div>
    </div>
  );
};

export default StoryCard;
