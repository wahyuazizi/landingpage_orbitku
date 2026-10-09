export type Creator = {
  id: string;
  initials: string;
  name: string;
  specialty: string;
  color: string;
  title: string;
  live: boolean;
  schedule: string;
};

// Fictional preview data. No real YouTube connection or live-status claim.
export const creators: Creator[] = [
  { id: 'hoshi', initials: 'HM', name: 'Hoshi Miu', specialty: 'Illustrator & virtual creator', color: 'pink', title: 'Drawing & ngobrol santai', live: true, schedule: 'Sedang live' },
  { id: 'raka', initials: 'RK', name: 'Raka', specialty: 'Gaming & cerita sehari-hari', color: 'blue', title: 'Cerita di balik karya', live: false, schedule: 'Besok, 19.00 WIB' },
  { id: 'nara', initials: 'N', name: 'Nara', specialty: 'Musik & virtual creator', color: 'lilac', title: 'Sesi akustik di akhir hari', live: false, schedule: 'Jumat, 20.00 WIB' },
];
