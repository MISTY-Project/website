export interface Publication {
  title: string;
  authors: string;
  year: number;
  journal?: string;
  doi?: string;
  url?: string;
  status?: string;
}

export const publications: Publication[] = [];
