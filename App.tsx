
import React, { useState, useEffect } from 'react';
import { useSadhana } from './hooks/useSadhana';
import DaylightDial from './components/DaylightDial';
import FastTracker from './components/FastTracker';
import StoryCard from './components/StoryCard';
import { Loader2, MapPin, Calendar, Sunrise, X, Navigation, Search, Check, BookOpen, ChevronRight } from 'lucide-react';
import { EkadashiInfo } from './types';

const App: React.FC = () => {
  const { 
    currentTithi, 
    nextEkadashiDate, 
    nextEkadashiInfo, 
    yearlyEkadashis, 
    sunrise, 
    sunset, 
    paranaStart, 
    paranaEnd,
    loading, 
    error,
    location,
    updateLocation,
    detectLocation
  } = useSadhana();

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  // Story Card State
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [viewedStory, setViewedStory] = useState<EkadashiInfo | null>(null);

  // Determine which story to show: either the specifically selected one (from Calendar) or the default upcoming one
  const activeStory = viewedStory || nextEkadashiInfo;

  const handleStoryOpenChange = (open: boolean) => {
    setIsStoryOpen(open);
    if (!open) {
      // When closing, revert back to the default context (upcoming) after a small delay or immediately.
      // Immediate reset ensures the bottom bar shows the main context again.
      setViewedStory(null);
    }
  };

  const openSpecificStory = (info: EkadashiInfo) => {
    setViewedStory(info);
    setIsStoryOpen(true);
    setIsCalendarOpen(false);
  };
  
  // Location Modal State
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedSearchLocation, setSelectedSearchLocation] = useState<{lat: number, lon: number, displayName: string} | null>(null);

  const openLocationModal = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSelectedSearchLocation(null);
    setIsLocationOpen(true);
  };

  const handleGPSDetect = () => {
    detectLocation();
    setIsLocationOpen(false);
  };

  // Core search logic extracted for reuse
  const performSearch = async (query: string) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    try {
      // Using OpenStreetMap Nominatim API
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`, 
        {
          headers: {
            'Accept-Language': 'en'
          }
        }
      );
      
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      }
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setIsSearching(false);
    }
  };

  // Debounce effect for auto-search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim().length >= 3) {
        performSearch(searchQuery);
      } else if (searchQuery.trim().length === 0) {
        setSearchResults([]);
      }
    }, 300); 

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.length >= 3) {
      performSearch(searchQuery);
    }
  };

  const selectCity = (result: any) => {
    const lat = parseFloat(result.lat);
    const lng = parseFloat(result.lon);
    if (!isNaN(lat) && !isNaN(lng)) {
      setSelectedSearchLocation({ lat, lon: lng, displayName: result.display_name });
    }
  };

  const handleSaveLocation = () => {
    if (selectedSearchLocation) {
      updateLocation(selectedSearchLocation.lat, selectedSearchLocation.lon);
      setIsLocationOpen(false);
    }
  };

  // Construct a time object for the dial
  const now = new Date();
  
  // Dynamic Background based on state (Ekadashi vs Normal)
  const isEkadashiToday = currentTithi?.isEkadashi || false;
  
  const bgClass = isEkadashiToday
    ? "bg-gradient-to-br from-indigo-950 via-purple-950 to-black" // Deep purple for fast
    : "bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950"; // Normal dark mode

  if (loading) {
    return (
      <div className="h-screen w-full bg-slate-950 flex items-center justify-center text-white flex-col gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-400" />
        <p className="font-serif tracking-widest animate-pulse">ALIGNING CELESTIAL BODIES...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full bg-slate-950 flex items-center justify-center text-white p-8 text-center">
        <div>
          <h1 className="text-2xl font-serif text-red-400 mb-2">Connection Lost</h1>
          <p className="text-white/60">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 bg-white/10 rounded-full border border-white/20 hover:bg-white/20"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const daysUntil = (nextEkadashiDate && !isNaN(nextEkadashiDate.getTime()))
    ? Math.ceil((nextEkadashiDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) 
    : 0;

  // Check if Parana date is valid for display
  const isParanaValid = paranaStart && !isNaN(paranaStart.getTime());

  return (
    <div className={`min-h-screen w-full ${bgClass} transition-colors duration-1000 overflow-hidden flex flex-col`}>
      
      {/* Top Bar */}
      <header className="flex justify-between items-center p-6 pt-8 text-white">
        <div className="flex flex-col">
          <h1 className="font-serif text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-orange-100">
            SADHANA SYNC
          </h1>
          <span className="text-xs text-white/40 uppercase tracking-widest">Vedic Chronometer</span>
        </div>

        {/* Actions: Location & Calendar */}
        <div className="flex items-center gap-3">
          
          {/* Calendar Button */}
          <button 
            onClick={() => setIsCalendarOpen(true)}
            className="relative bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors group"
            title="View Annual Calendar"
          >
             <Calendar className="w-5 h-5 text-indigo-300" />
          </button>

          {/* Location Button */}
          <button 
            onClick={openLocationModal}
            className="bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors" 
            title="Edit Location"
          >
             <MapPin className="w-5 h-5 text-indigo-300" />
          </button>
        </div>
      </header>

      {/* Main Scrollable Content */}
      <main className="flex-1 overflow-y-auto px-6 pb-32 scrollbar-hide">
        
        {/* Status Banner */}
        <div className="text-center mb-2 mt-2">
          {isEkadashiToday ? (
            <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 text-sm font-bold uppercase tracking-widest animate-pulse shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              Ekadashi Active
            </div>
          ) : (
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-sm uppercase tracking-widest">
              {currentTithi?.paksha} Paksha • Tithi {currentTithi?.tithiIndex}
            </div>
          )}
        </div>

        {/* Dial */}
        <DaylightDial 
          sunrise={sunrise} 
          sunset={sunset} 
          currentTime={now} 
        />

        {/* Info Widget */}
        <div className="text-center text-white mb-8">
           <h2 className="font-serif text-3xl text-white mb-1">
             {isEkadashiToday ? nextEkadashiInfo?.name : `Upcoming: ${nextEkadashiInfo?.name || 'Ekadashi'}`}
           </h2>
           {!isEkadashiToday && (
             <p className="text-indigo-200/60 font-light">
               {daysUntil > 0 ? `in ${daysUntil} days` : (daysUntil === 0 ? 'Tomorrow' : 'Calculating...')}
             </p>
           )}
        </div>
        
        {/* Parana Time Display */}
        {isParanaValid && paranaStart && (
          <div className="bg-indigo-900/30 border border-indigo-500/20 rounded-xl p-4 mb-6 flex items-center justify-between max-w-md mx-auto backdrop-blur-sm">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Sunrise className="w-5 h-5 text-amber-400" />
               </div>
               <div className="flex flex-col text-left">
                 <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">Parana (Break Fast)</span>
                 <span className="text-white text-sm">
                   {paranaStart.toLocaleDateString(undefined, {weekday: 'short', month: 'short', day: 'numeric'})}
                 </span>
               </div>
             </div>
             <div className="text-right">
               <span className="block text-lg font-serif font-bold text-amber-200">
                 {paranaStart.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                 {paranaEnd && !isNaN(paranaEnd.getTime()) && (
                    <> – {paranaEnd.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</>
                 )}
               </span>
               <span className="text-xs text-white/40">Auspicious Window</span>
             </div>
          </div>
        )}

        {/* Autophagy Tracker */}
        <FastTracker isEkadashi={isEkadashiToday} />

      </main>

      {/* Floating/Drawer Content */}
      <StoryCard 
        info={activeStory} 
        isOpen={isStoryOpen}
        onOpenChange={handleStoryOpenChange}
      />

      {/* Yearly Calendar Modal */}
      {isCalendarOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setIsCalendarOpen(false)}
          />
          <div className="relative w-full max-w-md bg-[#0f0f1a] rounded-2xl border border-white/10 shadow-2xl flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
               <h3 className="font-serif text-xl text-white">Ekadashi Calendar {now.getFullYear()}</h3>
               <button 
                 onClick={() => setIsCalendarOpen(false)}
                 className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"
               >
                 <X className="w-5 h-5" />
               </button>
            </div>
            <div className="overflow-y-auto p-6 space-y-3 scrollbar-thin scrollbar-thumb-white/10">
              {(!yearlyEkadashis || yearlyEkadashis.length === 0) ? (
                <p className="text-white/40 text-center italic">Calculating calendar...</p>
              ) : (
                yearlyEkadashis.map((event, i) => {
                   // Safety check for event object structure
                   if (!event || !event.date || !event.info) return null;

                   const isPast = event.date < now && event.date.toDateString() !== now.toDateString();
                   const isToday = event.date.toDateString() === now.toDateString();
                   return (
                     <div key={`${event.date.toISOString()}-${i}`} className={`flex items-center justify-between p-4 rounded-xl border ${isToday ? 'bg-indigo-600/20 border-indigo-500/50' : 'bg-white/5 border-white/5'} ${isPast ? 'opacity-50 hover:opacity-100 transition-opacity' : ''}`}>
                        <div className="flex-1 min-w-0 mr-4">
                          <p className={`text-sm font-serif font-semibold truncate ${isToday ? 'text-amber-300' : 'text-white'}`}>
                             {event.info.name}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-xs text-white/50">
                               {event.date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                            </p>
                            {isToday && (
                              <span className="text-[9px] uppercase tracking-widest font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">Today</span>
                            )}
                          </div>
                        </div>
                        <button 
                          onClick={() => openSpecificStory(event.info)}
                          className="shrink-0 p-2 bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-300 text-white/40 rounded-lg transition-colors flex items-center gap-1 group"
                          title="Read Katha"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span className="text-[10px] font-medium uppercase tracking-wider hidden sm:inline-block">Katha</span>
                          <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                     </div>
                   );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* Location Settings Modal */}
      {isLocationOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setIsLocationOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-[#0f0f1a] rounded-2xl border border-white/10 shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
               <h3 className="font-serif text-xl text-white">Location Settings</h3>
               <button 
                 onClick={() => setIsLocationOpen(false)}
                 className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"
               >
                 <X className="w-5 h-5" />
               </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-white/50 mb-4">
                Search for your city or use GPS for accurate Tithi calculation.
              </p>
              
              {/* Search Form */}
              <form onSubmit={handleManualSubmit} className="relative">
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search city..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-colors placeholder-white/30"
                />
                <button 
                  type="submit"
                  disabled={isSearching || !searchQuery.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white/50 hover:text-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                </button>
              </form>

              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="max-h-48 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-white/10 border-t border-white/5 pt-2">
                  {searchResults.map((result: any, index) => {
                    const isSelected = selectedSearchLocation?.displayName === result.display_name;
                    return (
                      <button
                        key={index}
                        onClick={() => selectCity(result)}
                        className={`w-full text-left p-3 rounded-lg transition-colors group border flex items-center justify-between ${
                          isSelected 
                            ? 'bg-indigo-600/20 border-indigo-500/50' 
                            : 'hover:bg-white/5 border-transparent hover:border-white/5'
                        }`}
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className={`text-sm font-medium truncate ${isSelected ? 'text-indigo-300' : 'text-white group-hover:text-indigo-300'}`}>
                            {result.display_name.split(',')[0]}
                          </div>
                          <div className="text-xs text-white/40 truncate">
                            {result.display_name}
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-indigo-400" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Save Button */}
              {(searchResults.length > 0 || selectedSearchLocation) && (
                <button 
                  onClick={handleSaveLocation}
                  disabled={!selectedSearchLocation}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-white/5 disabled:text-white/20 disabled:cursor-not-allowed rounded-xl text-white font-semibold transition-all shadow-lg shadow-indigo-500/20 disabled:shadow-none mb-2"
                >
                  Save Location
                </button>
              )}

              {/* Divider */}
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-[#0f0f1a] px-2 text-xs text-white/30 uppercase">Or</span>
                </div>
              </div>

              {/* Use GPS Button */}
              <button 
                onClick={handleGPSDetect}
                className="w-full py-3 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 rounded-xl text-indigo-200 flex items-center justify-center gap-2 transition-all group"
              >
                <Navigation className="w-4 h-4 group-hover:scale-110 transition-transform" /> 
                <span>Use Current Location (GPS)</span>
              </button>

            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default App;