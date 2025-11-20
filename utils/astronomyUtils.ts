
import * as Astronomy from 'astronomy-engine';
import { GeoLocation, TithiData, EkadashiEvent } from '../types';
import { getEkadashiInfo } from '../data/ekadashiContent';

// Fallback object to use on error
const FALLBACK_TITHI: TithiData = { 
  tithiIndex: 1, 
  isEkadashi: false, 
  fraction: 0, 
  paksha: 'Shukla' 
};

const isValidDate = (d: any): d is Date => {
  return d instanceof Date && !isNaN(d.getTime());
};

// Helper to normalize date to Noon to avoid edge cases with Tithis starting/ending at night
const resetToNoon = (d: Date): Date => {
  const copy = new Date(d.getTime());
  copy.setHours(12, 0, 0, 0);
  return copy;
};

// Determine Tithi from a specific date and time
export const calculateTithi = (inputDate: Date): TithiData => {
  // 1. Basic Validation
  if (!isValidDate(inputDate)) {
    return FALLBACK_TITHI;
  }

  // 2. Create a clean Date object to avoid reference side-effects
  const date = new Date(inputDate.getTime());

  try {
    // 3. Ensure Library Availability
    const lib = Astronomy as any;
    if (!lib) return FALLBACK_TITHI;

    // Handle different module structures (Default export vs Named export)
    const GeoVector = lib.GeoVector || (lib.default && lib.default.GeoVector);
    const Ecliptic = lib.Ecliptic || (lib.default && lib.default.Ecliptic);

    if (typeof GeoVector !== 'function' || typeof Ecliptic !== 'function') {
      return FALLBACK_TITHI;
    }

    // 4. Calculation
    // Use string literals 'Sun' and 'Moon' and explicit aberration boolean
    const sunVector = GeoVector('Sun', date, true);
    if (!sunVector) return FALLBACK_TITHI;
    const sun = Ecliptic(sunVector);
    
    const moonVector = GeoVector('Moon', date, true);
    if (!moonVector) return FALLBACK_TITHI;
    const moon = Ecliptic(moonVector);

    if (!sun || !moon) {
       return FALLBACK_TITHI;
    }

    // Calculate longitude difference (Moon - Sun)
    let diff = moon.elon - sun.elon;
    // Normalize to 0-360
    if (diff < 0) {
      diff += 360;
    }

    // Each Tithi is 12 degrees
    // Tithi index 1-30
    const tithiFloat = diff / 12;
    const tithiIndex = Math.floor(tithiFloat) + 1;
    
    // Fraction of the tithi passed (for progress bars)
    const fraction = tithiFloat - Math.floor(tithiFloat);

    // Ekadashi is 11th (Shukla) or 26th (11th of Krishna)
    const isEkadashi = tithiIndex === 11 || tithiIndex === 26;
    
    const paksha = tithiIndex <= 15 ? 'Shukla' : 'Krishna';

    return {
      tithiIndex,
      isEkadashi,
      fraction,
      paksha
    };
  } catch (e) {
    console.error("Astronomy calculation failed:", e);
    return FALLBACK_TITHI;
  }
};

// Find the next Ekadashi date from a start date
export const findNextEkadashi = (startDate: Date): Date => {
  // Default to today if invalid
  let current = isValidDate(startDate) ? new Date(startDate.getTime()) : new Date();
  
  // If current is still invalid for some reason, reset to real now
  if (!isValidDate(current)) current = new Date();

  // Normalize to NOON to ensure we catch the Tithi of the day
  current = resetToNoon(current);

  // Safety limit: look ahead 45 days max
  for (let i = 0; i < 45; i++) {
    try {
      const tithi = calculateTithi(current);
      if (tithi.isEkadashi) {
        return current;
      }
    } catch (e) {
      // If calculation fails for a specific day, ignore and move to next
    }

    // Advance 1 day safely
    // Add 24 hours
    current.setTime(current.getTime() + (24 * 60 * 60 * 1000));
    
    // Break if date becomes invalid
    if (!isValidDate(current)) {
      break;
    }
  }
  
  // Fallback: Return the original start date (or today) if nothing found
  const safeFallback = isValidDate(startDate) ? startDate : new Date();
  return safeFallback;
};

// Calculate all Ekadashis for a given year
export const calculateYearlyEkadashis = (year: number): EkadashiEvent[] => {
  const events: EkadashiEvent[] = [];
  const start = new Date(year, 0, 1); // Jan 1
  const end = new Date(year, 11, 31); // Dec 31
  
  // Clone to iterate
  let current = new Date(start.getTime());
  
  // Set to Noon to avoid edge cases with Tithi changing at night for this general list
  current = resetToNoon(current);

  while (current <= end) {
    try {
      const tithi = calculateTithi(current);
      if (tithi.isEkadashi) {
        const info = getEkadashiInfo(current, tithi.tithiIndex);
        events.push({
          date: new Date(current.getTime()),
          info
        });
        
        // Skip ahead ~10 days to avoid duplicate detection for the same event
        // (Ekadashi comes every ~14-15 days)
        current.setDate(current.getDate() + 10);
      } else {
        // Advance 1 day
        current.setDate(current.getDate() + 1);
      }
    } catch (e) {
      // Safety skip
      current.setDate(current.getDate() + 1);
    }
  }
  
  return events;
};

export const getSunTimes = (inputDate: Date, location: GeoLocation) => {
  // Validate Date
  if (!isValidDate(inputDate)) {
    return { sunrise: null, sunset: null };
  }
  
  // Validate Location
  if (!location || 
      typeof location.latitude !== 'number' || 
      typeof location.longitude !== 'number' || 
      isNaN(location.latitude) || 
      isNaN(location.longitude)) {
     return { sunrise: null, sunset: null };
  }

  const date = new Date(inputDate.getTime());

  try {
    const lib = Astronomy as any;
    if (!lib) return { sunrise: null, sunset: null };

    const Observer = lib.Observer || (lib.default && lib.default.Observer);
    const SearchRiseSet = lib.SearchRiseSet || (lib.default && lib.default.SearchRiseSet);

    if (typeof Observer !== 'function' || typeof SearchRiseSet !== 'function') {
       return { sunrise: null, sunset: null };
    }

    // 0 elevation is geometric horizon
    const observer = new Observer(location.latitude, location.longitude, 0);
    
    // Use string literals 'Sun' instead of Enums
    const sunriseEvent = SearchRiseSet('Sun', observer, +1, date, 1);
    const sunsetEvent = SearchRiseSet('Sun', observer, -1, date, 1);

    // STRICT CHECK: Ensure the resulting dates are valid
    const sunrise = sunriseEvent && isValidDate(sunriseEvent.date) ? sunriseEvent.date : null;
    const sunset = sunsetEvent && isValidDate(sunsetEvent.date) ? sunsetEvent.date : null;

    return {
      sunrise,
      sunset
    };
  } catch (e) {
    console.error("Sun time calculation failed:", e);
    return { sunrise: null, sunset: null };
  }
};
