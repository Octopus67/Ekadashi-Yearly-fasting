
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface DaylightDialProps {
  sunrise: Date | null;
  sunset: Date | null;
  currentTime: Date;
}

const DaylightDial: React.FC<DaylightDialProps> = ({ sunrise, sunset, currentTime }) => {
  // Defensive check: if dates are invalid objects (NaN), do not render calculation dependent UI
  const isValid = (d: any) => d instanceof Date && !isNaN(d.getTime());
  
  const now = isValid(currentTime) ? currentTime : new Date();
  
  // If sunrise/sunset are missing or invalid, we can't render the arc
  if (!sunrise || !sunset || !isValid(sunrise) || !isValid(sunset)) {
    return null;
  }

  const isDay = now >= sunrise && now < sunset;
  
  // Calculate percentage of day/night passed
  let progress = 0;
  if (isDay) {
    const totalDay = sunset.getTime() - sunrise.getTime();
    const elapsed = now.getTime() - sunrise.getTime();
    // Prevent division by zero
    if (totalDay > 0) {
      progress = Math.min(100, Math.max(0, (elapsed / totalDay) * 100));
    }
  } else {
    // Night logic is a bit more complex as it wraps around midnight
    // Simplified for visuals: just show a full moon state or pre-sunrise state
    progress = 50; 
  }

  // SVG parameters
  const radius = 120;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center my-8">
      {/* Background Circle */}
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90 drop-shadow-xl"
      >
        <circle
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress Circle */}
        <circle
          stroke={isDay ? "#fbbf24" : "#818cf8"} // Amber or Indigo
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s ease-in-out' }}
          strokeLinecap="round"
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      {/* Center Content */}
      <div className="absolute flex flex-col items-center text-white">
        {isDay ? (
          <Sun className="w-10 h-10 text-amber-400 mb-2 animate-pulse" />
        ) : (
          <Moon className="w-10 h-10 text-indigo-300 mb-2 animate-pulse" />
        )}
        <span className="text-3xl font-serif font-bold tracking-wider">
          {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
        <span className="text-xs text-white/60 uppercase tracking-widest mt-1">
          {isDay ? "Surya" : "Chandra"} Hora
        </span>
      </div>

      {/* Markers */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 text-xs text-white/40 text-center w-full">
        <div className="flex justify-between px-8 w-full max-w-[300px] mx-auto">
          <div className="flex flex-col items-center">
            <span>Rise</span>
            <span>{sunrise.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Set</span>
            <span>{sunset.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaylightDial;
