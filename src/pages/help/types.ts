export interface HelpQuestion {
  q: string;
  a: string;
}

export interface HelpSectionType {
  title: string;
  questions: HelpQuestion[];
}