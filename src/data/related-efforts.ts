export interface RelatedEffort {
  fullName: string;
  acronym?: string;
  linkLabel: string;
  href: string;
  description: string;
}

export const relatedEfforts: RelatedEffort[] = [
  {
    fullName: "COS Legacy Archive Spectroscopic SurveY",
    acronym: "CLASSY",
    linkLabel: "Website",
    href: "https://www.danielleaberg.com/classy",
    description:
      "A Treasury survey of high-resolution rest-frame far-ultraviolet spectroscopy for 45 low-redshift (z &lt; 0.2) star-forming galaxies.",
  },
  {
    fullName: "Deep near-UV observations of Entrained gas in Turbulent galaxies",
    acronym: "DUVET",
    linkLabel: "Website",
    href: "https://www.deannefisher.com/duvet",
    description:
      "A KCWI survey of 30 starbursting disk galaxies at z &lt; 0.03, with stellar masses of approximately 10<sup>9</sup>–10<sup>11</sup>&nbsp;M<sub>☉</sub> and star-formation rates 5–15 times above the star-forming main sequence.",
  },
  {
    fullName: "DESI dwarf-galaxy catalog",
    linkLabel: "Catalog",
    href: "https://virajvman.github.io/desidwarfs_webapp/index.html",
    description:
      "A catalog of approximately 500,000 spectroscopically confirmed DESI dwarf galaxies at z ≤ 0.2, with stellar masses below 10<sup>9</sup>&nbsp;M<sub>☉</sub>.",
  },
  {
    fullName: "Dwarf Galaxy Integral-field Survey",
    acronym: "DGIS",
    linkLabel: "Website",
    href: "https://www.dgisteam.com/",
    description:
      "A ground-based integral-field survey using MUSE and WiFeS observations of 65 dwarf galaxies within 11&nbsp;Mpc, spanning stellar masses of 10<sup>6</sup>–10<sup>9</sup>&nbsp;M<sub>☉</sub>.",
  },
  {
    fullName:
      "DWarf galaxies Archival Local survey for Interstellar medium investigatioN",
    acronym: "DWALIN",
    linkLabel: "Reference",
    href: "https://ui.adsabs.harvard.edu/abs/2023A%26A...670A..92M/abstract",
    description:
      "An archival MUSE integral-field sample of 40 galaxies within 200&nbsp;Mpc, most with stellar masses below 2 × 10<sup>9</sup>&nbsp;M<sub>☉</sub>.",
  },
  {
    fullName: "Feedback in Emerging extrAgalactic Star clusTers",
    acronym: "FEAST",
    linkLabel: "Website",
    href: "https://feast-survey.github.io/",
    description:
      "A JWST imaging and spectroscopy program targeting nearby galaxies from the 11&nbsp;Mpc volume, including NGC 628, M83, M51, NGC 4449, and the NGC 4490/NGC 4485 system. FEAST combines extensive multi-wavelength coverage, including HST, MUSE, ALMA, NIRCam, MIRI, and multiplexed NIRSpec spectroscopy.",
  },
  {
    fullName:
      "Feedback in Low-metallicity Environments from Emerging sTar clusters",
    acronym: "FLEET",
    linkLabel: "Reference",
    href: "https://www.stsci.edu/jwst-program-info/program/?program=9734&pi=1",
    description:
      "A JWST program targeting nine vigorously star-forming dwarf galaxies at distances of 3–8&nbsp;Mpc and metallicities of 10–40% solar. FLEET uses NIRCam and MIRI imaging, complemented by HST observations, to study emerging young star clusters and their associated H II regions and photodissociation regions at 1–5&nbsp;pc resolution.",
  },
  {
    fullName: "Legacy ExtraGalactic UV Survey",
    acronym: "LEGUS",
    linkLabel: "Website",
    href: "https://legus.stsci.edu/legus_survey.html",
    description:
      "An HST Treasury Program that imaged 50 galaxies within 12&nbsp;Mpc in multiple bands with WFC3 and ACS. The proximity of the sample enables resolved studies of stars, star clusters, and stellar associations.",
  },
  {
    fullName:
      "Local Irregulars That Trace Luminosity Extremes, The H I Nearby Galaxy Survey",
    acronym: "LITTLE THINGS",
    linkLabel: "Reference",
    href: "https://ui.adsabs.harvard.edu/abs/2012AJ....144..134H/abstract",
    description:
      "A multi-wavelength survey centered on VLA H I observations of 37 dwarf irregular and four blue compact dwarf galaxies within 10.3&nbsp;Mpc. The sample includes GALEX ultraviolet, ground-based UBV and Hα imaging, with additional near-infrared and Spitzer mid-infrared data available for many galaxies.",
  },
  {
    fullName: "Metals in Star-forming Galaxies with KCWI",
    linkLabel: "Reference",
    href: "https://iopscience.iop.org/article/10.3847/1538-4357/ad5ff8",
    description:
      "A KCWI integral-field sample of 46 low-redshift (z &lt; 0.06) star-forming galaxies spanning stellar masses of 10<sup>8</sup>–10<sup>10</sup>&nbsp;M<sub>☉</sub>.",
  },
  {
    fullName: "Physics at High Angular resolution in Nearby GalaxieS",
    acronym: "PHANGS",
    linkLabel: "Website",
    href: "https://sites.google.com/view/phangs/home",
    description:
      "A multi-wavelength program of high-resolution observations of nearby galaxies with ALMA, Hubble, JWST, and the VLT. The sample includes 74 galaxies observed with ALMA, including 38 with HST imaging and 19 with VLT/MUSE observations; targets are generally within approximately 20&nbsp;Mpc and have stellar masses above 10<sup>9</sup>&nbsp;M<sub>☉</sub>.",
  },
  {
    fullName:
      "Quasars to Understand Environments around, and STar formation in, Dwarfs",
    acronym: "QUEST",
    linkLabel: "Website",
    href: "https://questdwarfs.github.io/",
    description:
      "A survey of more than 60 low-redshift dwarf galaxies with background far-ultraviolet sightlines projected within approximately one virial radius. QUEST connects circumgalactic gas with star-formation histories using HST far-ultraviolet absorption spectroscopy and supporting ground-based and multi-wavelength observations; the galaxies have stellar masses of M<sub>⋆</sub> ≤ 10<sup>9</sup>&nbsp;M<sub>☉</sub>.",
  },
  {
    fullName: "The Study of Hα from Dwarf Emissions",
    acronym: "SHαDE",
    linkLabel: "Reference",
    href: "https://ui.adsabs.harvard.edu/abs/2020MNRAS.498.5885B/abstract",
    description:
      "A high-spectral-resolution (R = 13,500) Hα integral-field survey using FLAMES on the ESO Very Large Telescope. SHαDE includes 69 dwarf galaxies with stellar masses of 10<sup>6</sup> &lt; M<sub>⋆</sub> &lt; 10<sup>9</sup>&nbsp;M<sub>☉</sub>.",
  },
  {
    fullName: "STARBIRDS",
    linkLabel: "Reference",
    href: "https://ui.adsabs.harvard.edu/abs/2015ApJS..218...29M/abstract",
    description:
      "A multi-wavelength program combining new and archival GALEX, Hubble, and Spitzer observations of 20 nearby starburst and post-starburst dwarf galaxies.",
  },
  {
    fullName: "Survey of H I in Extremely Low-mass Dwarfs",
    acronym: "SHIELD",
    linkLabel: "Reference",
    href: "https://iopscience.iop.org/article/10.1088/2041-8205/739/1/L22",
    description:
      "A multi-configuration Expanded Very Large Array study of the neutral-gas content and dynamics of 82 low-mass galaxies selected from ALFALFA, with H I masses of 10<sup>6</sup>–10<sup>7</sup>&nbsp;M<sub>☉</sub>. The survey also includes far-ultraviolet data and narrowband Hα imaging.",
  },
];
