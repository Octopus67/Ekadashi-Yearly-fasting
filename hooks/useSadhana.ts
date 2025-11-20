
import { useState, useEffect } from 'react';
import { GeoLocation, SadhanaState } from '../types';
import { calculateTithi, findNextEkadashi, getSunTimes, calculateYearlyEkadashis } from '../utils/astronomyUtils';
import { getEkadashiInfo } from '../data/ekadashiContent';

export const useSadhana = () => {
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [state, setState] = useState<SadhanaState>({
    currentTithi: null,
    nextEkadashiDate: null,
    nextEkadashiInfo: null,
    yearlyEkadashis: [],
    sunrise: null,
    sunset: null,
    paranaStart: null,
    paranaEnd: null,
    loading: true,
    error: null
  });

  const detectLocation = () => {
    setState(s => ({ ...s, loading: true, error: null }));
    
    if (!navigator.geolocation) {
      setState(s => ({ ...s, loading: false, error: "Geolocation not supported" }));
      return;
    }

    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (err) => {
          console.warn("Geolocation error:", err);
          setState(s => ({ ...s, loading: false, error: "Location access denied. Using default (Greenwich)." }));
          // Default to Greenwich (0,0) just to show something working
          setLocation({ latitude: 51.48, longitude: 0 }); 
        },
        { timeout: 10000, enableHighAccuracy: false } // 10s timeout
      );
    } catch (e) {
       console.error("Geolocation fatal error", e);
       setLocation({ latitude: 51.48, longitude: 0 });
    }
  };

  const updateLocation = (lat: number, lng: number) => {
    setState(s => ({ ...s, loading: true, error: null }));
    setLocation({ latitude: lat, longitude: lng });
  };

  // 1. Get User Location on mount
  useEffect(() => {
    detectLocation();
  }, []);

  // 2. Calculate Astronomy Data when location changes
  useEffect(() => {
    if (!location) return;
    
    const now = new Date();
    
    try {
      // Current Tithi
      const currentTithi = calculateTithi(now);
      
      // Sun Times
      const { sunrise, sunset } = getSunTimes(now, location);

      // Next Ekadashi Logic
      // If today is Ekadashi, we want the NEXT one for the "Upcoming" variable, 
      // but we want the CURRENT one for Parana calculations.
      let searchStartDate = new Date(now.getTime());
      
      if (currentTithi.isEkadashi) {
        // Move to tomorrow to start searching for the NEXT event
        searchStartDate.setDate(searchStartDate.getDate() + 1);
      }
      
      const nextDate = findNextEkadashi(searchStartDate);
      
      // Get Content Information for next Ekadashi using full date object
      const info = getEkadashiInfo(nextDate, currentTithi.tithiIndex); 

      // --- PARANA LOGIC ---
      // If today is Ekadashi, Parana is Tomorrow.
      // If today is NOT Ekadashi, Parana is Day After nextEkadashiDate.
      let fastingDateForParana = currentTithi.isEkadashi 
          ? new Date(now.getTime()) // Use today
          : new Date(nextDate.getTime());       // Use upcoming

      // Parana is the next day
      const paranaDay = new Date(fastingDateForParana.getTime());
      paranaDay.setDate(paranaDay.getDate() + 1);
      
      // Calculate Sun Times for Parana Day
      const { sunrise: paranaSunrise, sunset: paranaSunset } = getSunTimes(paranaDay, location);

      // Calculate Parana Window
      // Start: Sunrise
      // End: Roughly first 1/3rd of daylight hours (Traditional auspicious window if Dwadashi end is unknown)
      let safeParanaEnd = null;
      if (paranaSunrise && paranaSunset && !isNaN(paranaSunrise.getTime()) && !isNaN(paranaSunset.getTime())) {
        const dayDuration = paranaSunset.getTime() - paranaSunrise.getTime();
        safeParanaEnd = new Date(paranaSunrise.getTime() + (dayDuration / 3));
      }

      // Calculate Yearly List
      // Ensure we only calculate for the current year of the user
      const currentYear = now.getFullYear();
      const yearlyList = calculateYearlyEkadashis(currentYear);

      // Safeguard to ensure we don't put invalid dates in state
      const safeSunrise = (sunrise && !isNaN(sunrise.getTime())) ? sunrise : null;
      const safeSunset = (sunset && !isNaN(sunset.getTime())) ? sunset : null;
      const safeParanaStart = (paranaSunrise && !isNaN(paranaSunrise.getTime())) ? paranaSunrise : null;
      const safeNextDate = (nextDate && !isNaN(nextDate.getTime())) ? nextDate : null;

      setState({
        currentTithi,
        nextEkadashiDate: safeNextDate,
        nextEkadashiInfo: info,
        yearlyEkadashis: yearlyList,
        sunrise: safeSunrise,
        sunset: safeSunset,
        paranaStart: safeParanaStart,
        paranaEnd: safeParanaEnd,
        loading: false,
        error: null
      });

    } catch (e) {
      console.error("Fatal calculation error in hook:", e);
      setState(s => ({ ...s, loading: false, error: "Calculation failed" }));
    }

  }, [location]);

  return { ...state, location, updateLocation, detectLocation };
};
