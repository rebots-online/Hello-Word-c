export enum LiturgicalSeason {
  ADVENT,
  CHRISTMASTIDE,
  EPIPHANY,
  LENT,
  TRIDUUM,
  EASTER,
  PENTECOST,
  ORDINARY
}

export interface BilingualText {
  latin: string;
  english: string;
  isRubric?: boolean;
}

export interface LiturgicalDay {
  date: string;
  season: LiturgicalSeason;
  celebration?: string;
  rank: number;
  color: string;
  commemorations: string[];
}

export interface VoiceNote {
  id: string;
  date: string;
  title: string;
  filePath: string;
  duration: number;
  transcription?: string;
}
