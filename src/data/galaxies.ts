export type ObservationType = "optical-ifu" | "hst-jwst";

export interface Galaxy {
  id: string;
  name: string;
  image: string;
  /** Internal sort field only — never render on the page. */
  stellarMassLog10: number | null;
  /** Internal sort field only — never render on the page. */
  distanceMpc: number | null;
  observations?: ObservationType[];
}

export const observationLegend = [
  {
    id: "optical-ifu" as const,
    label: "Optical IFU (full sample coverage in progress)",
    icon: "/images/observations/optical-ifu.png",
  },
  {
    id: "hst-jwst" as const,
    label: "HST + JWST imaging",
    icon: "/images/observations/hst-jwst.png",
  },
] as const;

export const galaxies: Galaxy[] = [
  { id: "39627639383655805", name: "39627639383655805", image: "/images/galaxies/39627639383655805.png", stellarMassLog10: 8.2, distanceMpc: 15 },
  { id: "39627664935355046", name: "39627664935355046", image: "/images/galaxies/39627664935355046.png", stellarMassLog10: 8.1, distanceMpc: 58 },
  { id: "39627860884849501", name: "39627860884849501", image: "/images/galaxies/39627860884849501.png", stellarMassLog10: 8.1, distanceMpc: 27 },
  { id: "39627905885538609", name: "39627905885538609", image: "/images/galaxies/39627905885538609.png", stellarMassLog10: 8.1, distanceMpc: 20 },
  { id: "39627653044506356", name: "39627653044506356", image: "/images/galaxies/39627653044506356.png", stellarMassLog10: 8.0, distanceMpc: 33 },
  { id: "39627766970194508", name: "39627766970194508", image: "/images/galaxies/39627766970194508.png", stellarMassLog10: 8.0, distanceMpc: 24 },
  { id: "39627899812187631", name: "39627899812187631", image: "/images/galaxies/39627899812187631.png", stellarMassLog10: 8.0, distanceMpc: 26 },
  { id: "39632981047904497", name: "39632981047904497", image: "/images/galaxies/39632981047904497.png", stellarMassLog10: 8.0, distanceMpc: 14 },
  { id: "39627609876729538", name: "39627609876729538", image: "/images/galaxies/39627609876729538.png", stellarMassLog10: 7.9, distanceMpc: 23 },
  { id: "39627757658834718", name: "39627757658834718", image: "/images/galaxies/39627757658834718.png", stellarMassLog10: 7.9, distanceMpc: 29 },
  { id: "39627769058951385", name: "39627769058951385", image: "/images/galaxies/39627769058951385.png", stellarMassLog10: 7.9, distanceMpc: 23 },
  { id: "39627805767503299", name: "39627805767503299", image: "/images/galaxies/39627805767503299.png", stellarMassLog10: 7.9, distanceMpc: 15 },
  { id: "39627862696793741", name: "39627862696793741", image: "/images/galaxies/39627862696793741.png", stellarMassLog10: 7.9, distanceMpc: 18 },
  { id: "39627894116324358", name: "39627894116324358", image: "/images/galaxies/39627894116324358.png", stellarMassLog10: 7.9, distanceMpc: 13 },
  { id: "39628112417261210", name: "39628112417261210", image: "/images/galaxies/39628112417261210.png", stellarMassLog10: 7.9, distanceMpc: 20 },
  { id: "39627392192349778", name: "39627392192349778", image: "/images/galaxies/39627392192349778.png", stellarMassLog10: 7.8, distanceMpc: 59 },
  { id: "39627809169087690", name: "39627809169087690", image: "/images/galaxies/39627809169087690.png", stellarMassLog10: 7.8, distanceMpc: 8 },
  { id: "39633474558103093", name: "39633474558103093", image: "/images/galaxies/39633474558103093.png", stellarMassLog10: 7.8, distanceMpc: 10 },
  { id: "39627763912544293", name: "39627763912544293", image: "/images/galaxies/39627763912544293.png", stellarMassLog10: 7.7, distanceMpc: 17 },
  { id: "39627847874121223", name: "39627847874121223", image: "/images/galaxies/39627847874121223.png", stellarMassLog10: 7.7, distanceMpc: 18 },
  { id: "39627380708344530", name: "39627380708344530", image: "/images/galaxies/39627380708344530.png", stellarMassLog10: 7.6, distanceMpc: 28 },
  { id: "39627681217648564", name: "39627681217648564", image: "/images/galaxies/39627681217648564.png", stellarMassLog10: 7.6, distanceMpc: 23 },
  { id: "39627690365425284", name: "39627690365425284", image: "/images/galaxies/39627690365425284.png", stellarMassLog10: 7.6, distanceMpc: 35 },
  { id: "39627703174825445", name: "39627703174825445", image: "/images/galaxies/39627703174825445.png", stellarMassLog10: 7.6, distanceMpc: 15 },
  { id: "39633384812579984", name: "39633384812579984", image: "/images/galaxies/39633384812579984.png", stellarMassLog10: 7.6, distanceMpc: 14 },
  { id: "39627627618636133", name: "39627627618636133", image: "/images/galaxies/39627627618636133.png", stellarMassLog10: 7.5, distanceMpc: 11 },
  { id: "39627732925025274", name: "39627732925025274", image: "/images/galaxies/39627732925025274.png", stellarMassLog10: 7.5, distanceMpc: 10 },
  { id: "39627784355578822", name: "39627784355578822", image: "/images/galaxies/39627784355578822.png", stellarMassLog10: 7.5, distanceMpc: 19 },
  { id: "39628534695595474", name: "39628534695595474", image: "/images/galaxies/39628534695595474.png", stellarMassLog10: 7.5, distanceMpc: 12 },
  { id: "39627685319676194", name: "39627685319676194", image: "/images/galaxies/39627685319676194.png", stellarMassLog10: 7.4, distanceMpc: 24 },
  { id: "39632990975819890", name: "39632990975819890", image: "/images/galaxies/39632990975819890.png", stellarMassLog10: 7.4, distanceMpc: 11 },
  { id: "39633270970780320", name: "39633270970780320", image: "/images/galaxies/39633270970780320.png", stellarMassLog10: 7.4, distanceMpc: 24 },
  { id: "39627604667404890", name: "39627604667404890", image: "/images/galaxies/39627604667404890.png", stellarMassLog10: 7.3, distanceMpc: 16 },
  { id: "39627714453312595", name: "39627714453312595", image: "/images/galaxies/39627714453312595.png", stellarMassLog10: 7.3, distanceMpc: 30 },
  { id: "39627815217268271", name: "39627815217268271", image: "/images/galaxies/39627815217268271.png", stellarMassLog10: 7.3, distanceMpc: 14 },
  { id: "39627637408138942", name: "39627637408138942", image: "/images/galaxies/39627637408138942.png", stellarMassLog10: 7.2, distanceMpc: 21 },
  { id: "39627709785048356", name: "39627709785048356", image: "/images/galaxies/39627709785048356.png", stellarMassLog10: 7.2, distanceMpc: 21 },
  { id: "39627731121475031", name: "39627731121475031", image: "/images/galaxies/39627731121475031.png", stellarMassLog10: 7.2, distanceMpc: 17 },
  { id: "39627751598068708", name: "39627751598068708", image: "/images/galaxies/39627751598068708.png", stellarMassLog10: 7.2, distanceMpc: 26 },
  { id: "39627790391187481", name: "39627790391187481", image: "/images/galaxies/39627790391187481.png", stellarMassLog10: 7.2, distanceMpc: 20 },
  { id: "39627896041509242", name: "39627896041509242", image: "/images/galaxies/39627896041509242.png", stellarMassLog10: 7.2, distanceMpc: 21 },
  { id: "39628507122240431", name: "39628507122240431", image: "/images/galaxies/39628507122240431.png", stellarMassLog10: 7.2, distanceMpc: 9 },
  { id: "39627769595826961", name: "39627769595826961", image: "/images/galaxies/39627769595826961.png", stellarMassLog10: 7.1, distanceMpc: 23 },
  { id: "39627657431747723", name: "39627657431747723", image: "/images/galaxies/39627657431747723.png", stellarMassLog10: 7.0, distanceMpc: 16 },
  { id: "39627933521808441", name: "39627933521808441", image: "/images/galaxies/39627933521808441.png", stellarMassLog10: 7.0, distanceMpc: 22 },
  { id: "39632956062433527", name: "39632956062433527", image: "/images/galaxies/39632956062433527.png", stellarMassLog10: 7.0, distanceMpc: 14 },
  { id: "39627549860430197", name: "39627549860430197", image: "/images/galaxies/39627549860430197.png", stellarMassLog10: 6.9, distanceMpc: 12 },
  { id: "39627631666140350", name: "39627631666140350", image: "/images/galaxies/39627631666140350.png", stellarMassLog10: 6.9, distanceMpc: 10 },
  { id: "39627897656319102", name: "39627897656319102", image: "/images/galaxies/39627897656319102.png", stellarMassLog10: 6.9, distanceMpc: 21 },
  { id: "39633015718021500", name: "39633015718021500", image: "/images/galaxies/39633015718021500.png", stellarMassLog10: 6.9, distanceMpc: 9 },
  { id: "39633304248386852", name: "39633304248386852", image: "/images/galaxies/39633304248386852.png", stellarMassLog10: 6.9, distanceMpc: 18 },
  { id: "39627666902485913", name: "39627666902485913", image: "/images/galaxies/39627666902485913.png", stellarMassLog10: 6.8, distanceMpc: 12 },
  { id: "39627842111146055", name: "39627842111146055", image: "/images/galaxies/39627842111146055.png", stellarMassLog10: 6.8, distanceMpc: 14 },
  { id: "39627986969822921", name: "39627986969822921", image: "/images/galaxies/39627986969822921.png", stellarMassLog10: 6.8, distanceMpc: 15 },
  { id: "39628524612485381", name: "39628524612485381", image: "/images/galaxies/39628524612485381.png", stellarMassLog10: 6.8, distanceMpc: 10 },
  { id: "39627996058879884", name: "39627996058879884", image: "/images/galaxies/39627996058879884.png", stellarMassLog10: 6.7, distanceMpc: 20 },
  { id: "39627777950881432", name: "39627777950881432", image: "/images/galaxies/39627777950881432.png", stellarMassLog10: 6.6, distanceMpc: 17 },
  { id: "39627838525020094", name: "39627838525020094", image: "/images/galaxies/39627838525020094.png", stellarMassLog10: 6.5, distanceMpc: 17 },
  { id: "39628464742993735", name: "39628464742993735", image: "/images/galaxies/39628464742993735.png", stellarMassLog10: 6.0, distanceMpc: 11 },
];

