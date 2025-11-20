
export interface EkadashiInfo {
  name: string;
  scientific_benefit: string;
  spiritual_benefit: string;
  story: string;
  foods_allowed: string[];
  foods_avoided: string[];
}

export interface GeoLocation {
  latitude: number;
  longitude: number;
}

export interface TithiData {
  tithiIndex: number; // 1-30
  isEkadashi: boolean;
  fraction: number; // 0-1 progress through current tithi
  paksha: 'Shukla' | 'Krishna';
}

export interface EkadashiEvent {
  date: Date;
  info: EkadashiInfo;
}

export interface SadhanaState {
  currentTithi: TithiData | null;
  nextEkadashiDate: Date | null;
  nextEkadashiInfo: EkadashiInfo | null;
  yearlyEkadashis: EkadashiEvent[];
  sunrise: Date | null;
  sunset: Date | null;
  paranaStart: Date | null;
  paranaEnd: Date | null;
  loading: boolean;
  error: string | null;
}

export enum AutophagyStage {
  FED = 'Fed State',
  DIGESTION = 'Digestion',
  FAT_BURNING = 'Fat Burning',
  AUTOPHAGY = 'Autophagy',
}