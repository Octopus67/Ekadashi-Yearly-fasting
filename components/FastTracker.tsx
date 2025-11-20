
import React, { useState, useEffect } from 'react';
import { Flame, Zap, Dna, Activity, Edit2, Check, Clock, RotateCcw, Play, Utensils } from 'lucide-react';

interface FastTrackerProps {
  isEkadashi: boolean;
}

// Phases configuration
const PHASES = [
  { limit: 4, name: 'Anabolic Phase', desc: 'Digestion & Nutrient Storage', color: 'text-emerald-400', bg: 'bg-emerald-500', icon: Utensils },
  { limit: 12, name: 'Catabolic Phase', desc: 'Glycogen Depletion', color: 'text-amber-400', bg: 'bg-amber-500', icon: Activity },
  { limit: 18, name: 'Ketosis', desc: 'Fat Burning Mode', color: 'text-indigo-400', bg: 'bg-indigo-500', icon: Flame },
  { limit: 24, name: 'Autophagy', desc: 'Cellular Repair & Detox', color: 'text-purple-400', bg: 'bg-purple-500', icon: Dna }, // 18+
  { limit: 100, name: 'Deep Autophagy', desc: 'Immune System Reset', color: 'text-fuchsia-400', bg: 'bg-fuchsia-500', icon: Dna },
];

const FastTracker: React.FC<FastTrackerProps> = ({ isEkadashi }) => {
  // Initialize start time. 
  // Priority 1: LocalStorage. 
  // Priority 2: NULL (Not fasting)
  const [startTime, setStartTime] = useState<number | null>(() => {
    try {
      const saved = localStorage.getItem('fastStartTime');
      if (saved) {
        const parsed = parseInt(saved, 10);
        return isNaN(parsed) ? null : parsed;
      }
    } catch (e) {}
    return null;
  });

  const [elapsedMs, setElapsedMs] = useState<number>(0);
  const [isEditing, setIsEditing] = useState(false);
  
  // For the edit input (HH:mm)
  const [editTimeStr, setEditTimeStr] = useState('');
  const [editDayOffset, setEditDayOffset] = useState(0); // 0 = today, -1 = yesterday

  // Auto-start logic:
  // Only run this effect when isEkadashi changes or on mount.
  // We DO NOT include startTime in dependencies to prevent re-triggering when user manually stops the fast.
  useEffect(() => {
    if (isEkadashi) {
      setStartTime(prev => {
        // If already running, don't touch it
        if (prev !== null) return prev;
        
        // If not running, auto-start from midnight
        const midnight = new Date();
        midnight.setHours(0, 0, 0, 0);
        return midnight.getTime();
      });
    }
  }, [isEkadashi]);

  // Timer Tick
  useEffect(() => {
    if (startTime === null) {
      setElapsedMs(0);
      return;
    }

    const tick = () => {
      const now = Date.now();
      setElapsedMs(Math.max(0, now - startTime));
    };
    
    tick(); // Immediate update
    const interval = setInterval(tick, 60000); // Update every minute is enough for this view
    return () => clearInterval(interval);
  }, [startTime]);

  // Save to LS whenever it changes
  useEffect(() => {
    try {
      if (startTime !== null) {
        localStorage.setItem('fastStartTime', startTime.toString());
      } else {
        localStorage.removeItem('fastStartTime');
      }
    } catch (e) {}
  }, [startTime]);

  const handleStartFast = () => {
    setStartTime(Date.now());
  };

  const handleEndFast = () => {
    setStartTime(null);
    setElapsedMs(0);
    setIsEditing(false);
  };

  // --------------------------------------------------------------------------
  // RENDER: INACTIVE STATE (Fed State)
  // --------------------------------------------------------------------------
  if (startTime === null) {
    return (
      <div className={`w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-white shadow-2xl mt-6 flex items-center justify-between gap-4`}>
        <div>
          <h3 className="font-serif text-lg text-white/80 tracking-wide mb-1">Metabolic Status</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-400">Fed State</span>
          </div>
          <p className="text-xs text-white/40 mt-2">
            {isEkadashi ? "It is Ekadashi. Ready to fast?" : "Body is in digestion mode."}
          </p>
        </div>
        <button 
          onClick={handleStartFast}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/20 font-medium text-sm"
        >
          <Play className="w-4 h-4 fill-current" /> Start Fast
        </button>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // RENDER: ACTIVE FASTING STATE
  // --------------------------------------------------------------------------

  // Calculate Derived Metrics
  const hoursElapsed = elapsedMs / (1000 * 60 * 60);
  
  // Find Current Phase
  const currentPhase = PHASES.find(p => hoursElapsed < p.limit) || PHASES[PHASES.length - 1];
  const PhaseIcon = currentPhase.icon;

  // Edit Handlers
  const startEditing = () => {
    const date = new Date(startTime);
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    setEditTimeStr(`${h}:${m}`);
    
    // Check if start time is previous day
    const today = new Date();
    today.setHours(0,0,0,0);
    setEditDayOffset(date.getTime() < today.getTime() ? -1 : 0);
    
    setIsEditing(true);
  };

  const saveEdit = () => {
    const [h, m] = editTimeStr.split(':').map(Number);
    const newStart = new Date();
    // Apply day offset
    newStart.setDate(newStart.getDate() + editDayOffset);
    newStart.setHours(h, m, 0, 0);
    
    setStartTime(newStart.getTime());
    setIsEditing(false);
  };

  const resetToNow = () => {
    setStartTime(Date.now());
    setIsEditing(false);
  };

  return (
    <div className={`w-full bg-white/5 backdrop-blur-md border transition-colors duration-500 ${isEkadashi ? 'border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.1)]' : 'border-white/10'} rounded-3xl p-6 text-white shadow-2xl mt-6 relative overflow-hidden`}>
      {/* Background Glow based on phase */}
      <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl ${currentPhase.bg}`}></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-serif text-lg text-white/80 tracking-wide">Metabolic Status</h3>
            <div className="flex items-center gap-2 mt-1">
              <div className={`w-2 h-2 rounded-full animate-pulse ${currentPhase.bg}`}></div>
              <span className={`text-sm font-bold uppercase tracking-wider ${currentPhase.color}`}>
                {currentPhase.name}
              </span>
            </div>
          </div>
          <div className={`p-3 rounded-xl bg-white/5 border border-white/5 ${currentPhase.color}`}>
            <PhaseIcon className="w-6 h-6" />
          </div>
        </div>

        {/* Main Timer Display */}
        <div className="mb-8">
           <div className="flex items-baseline gap-2">
              <span className="text-6xl font-light tracking-tighter font-mono">
                {Math.floor(hoursElapsed)}<span className="text-white/40 text-4xl">:</span>{Math.floor((elapsedMs / (1000 * 60)) % 60).toString().padStart(2, '0')}
              </span>
              <span className="text-white/40 text-sm font-medium uppercase tracking-widest">Hours Fasted</span>
           </div>
           <p className="text-white/50 text-sm mt-2">{currentPhase.desc}</p>
        </div>

        {/* Timeline Bar */}
        <div className="mb-2 flex justify-between text-[10px] text-white/30 uppercase tracking-wider font-bold">
          <span>Start</span>
          <span>12h</span>
          <span>18h</span>
          <span>24h+</span>
        </div>
        <div className="h-3 bg-gray-800/50 rounded-full w-full overflow-hidden flex relative">
          {/* Phase Markers lines */}
          <div className="absolute left-[50%] h-full w-[1px] bg-white/10"></div> {/* 12h (assuming 24h scale) */}
          <div className="absolute left-[75%] h-full w-[1px] bg-white/10"></div> {/* 18h */}
          
          {/* Progress Fill */}
          {/* We visualize 0-24 hours scale generally. If > 24, it fills completely */}
          <div 
             className={`h-full transition-all duration-1000 ease-out rounded-full ${currentPhase.bg} shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
             style={{ width: `${Math.min(100, (hoursElapsed / 24) * 100)}%` }}
          ></div>
        </div>
        <div className="mt-2 flex justify-end">
          {hoursElapsed < 18 ? (
             <span className="text-xs text-white/40">
               <span className="text-white font-bold">{Math.ceil(18 - hoursElapsed)}h</span> until Autophagy
             </span>
          ) : (
            <span className="text-xs text-emerald-400 flex items-center gap-1">
              <Check className="w-3 h-3" /> Autophagy Active
            </span>
          )}
        </div>

        {/* Footer / Edit Control */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          {!isEditing ? (
            <>
               <div className="flex items-center gap-2 text-white/40 text-sm">
                 <Clock className="w-3 h-3" />
                 <span>Started {editDayOffset === -1 ? 'Yesterday' : 'Today'} at {new Date(startTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
               </div>
               <button 
                 onClick={startEditing}
                 className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                 title="Edit Start Time"
               >
                 <Edit2 className="w-4 h-4" />
               </button>
            </>
          ) : (
            <div className="w-full flex flex-col gap-2 bg-black/20 p-3 rounded-xl animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-2 w-full">
                <select 
                  value={editDayOffset}
                  onChange={(e) => setEditDayOffset(parseInt(e.target.value))}
                  className="bg-white/10 border border-white/10 text-white text-xs rounded-lg px-2 py-2 focus:outline-none flex-1"
                >
                  <option value="0" className="bg-slate-900">Today</option>
                  <option value="-1" className="bg-slate-900">Yesterday</option>
                </select>
                <input 
                  type="time" 
                  value={editTimeStr}
                  onChange={(e) => setEditTimeStr(e.target.value)}
                  className="bg-white/10 border border-white/10 text-white text-xs rounded-lg px-2 py-2 focus:outline-none flex-1"
                />
              </div>
              
              <div className="flex gap-2 w-full mt-1">
                 <button 
                  onClick={handleEndFast}
                  className="flex-1 p-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg text-xs flex items-center justify-center gap-1"
                >
                  Stop Fast
                </button>
                 <button 
                  onClick={resetToNow}
                  className="flex-1 p-2 bg-white/5 text-white/60 hover:bg-white/10 rounded-lg text-xs flex items-center justify-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
                <button 
                  onClick={saveEdit}
                  className="flex-1 p-2 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 rounded-lg text-xs flex items-center justify-center gap-1"
                >
                  <Check className="w-3 h-3" /> Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FastTracker;
