export interface SurveyDesignPrinciple {
  id: string;
  label: string;
  paragraphs: string[];
}

export const surveyDesignPrinciples: SurveyDesignPrinciple[] = [
  {
    id: "representative-population",
    label: "A representative dwarf-galaxy population",
    paragraphs: [
      "MISTY targets nearby dwarf galaxies selected to span the diversity of the low-mass, low-metallicity population. The survey includes systems with a broad range of star-formation activity, gas-phase metallicity, and large-scale environment, from isolated field dwarfs to satellites of massive hosts and interacting dwarf–dwarf systems.",
      "Each of these properties is expected to drive major variations in the low-metallicity baryon cycle. Star-formation activity sets the ionizing-photon budget; metallicity regulates cooling, chemistry, and shielding; and environment influences gas supply and dynamical history. Sampling this parameter space allows MISTY to determine which physical processes are widespread among dwarf galaxies and which depend on particular conditions.",
      "Because the MISTY targets are drawn from a statistically defined nearby population, the resolved measurements will also provide a physical calibration set for interpreting the far larger dwarf-galaxy samples expected from DESI, Rubin, and Euclid in the local Universe.",
    ],
  },
  {
    id: "cloud-scale-mapping",
    label: "Cloud-scale mapping of entire galaxies",
    paragraphs: [
      "MISTY targets galaxies within 30\u00a0Mpc, where seeing-limited ground-based optical integral-field spectroscopy can resolve physical scales smaller than approximately 150\u00a0pc, comparable to the turbulence injection scale from supernovae, and sufficient to isolate individual star-forming complexes. At these distances, near-infrared adaptive optics observations trace scales of 20\u00a0pc. Space-based imaging reaches scales of ≤10\u00a0pc, sufficient to isolate individual star clusters and resolve their surrounding nebulae. At the same time, the survey is designed to cover each galaxy in its entirety. Full-galaxy maps allow MISTY to link the physics of star formation and feedback on cloud scales to their consequences on galaxy-wide scales.",
    ],
  },
  {
    id: "multi-wavelength-view",
    label: "A multi-wavelength view of the baryon cycle",
    paragraphs: [
      "The baryon cycle couples young stars to multiphase gas and dust, each of which requires different observational tracers. HST and JWST imaging identify young star clusters from their deeply embedded phases, observed in the infrared, to their exposed phases, observed at ultraviolet and optical wavelengths. HST + JWST narrowband Hα and Paα imaging maps ionized nebulae, while JWST imaging of the 3.3\u00a0μm PAH feature traces photodissociation regions associated with neutral gas.",
      "Optical integral-field spectroscopy maps ionized gas across entire galaxies. Its medium-spectral-resolution mode, with wide wavelength coverage, provides nebular diagnostics of gas temperature, density, ionization state, and chemical abundances, including direct abundance measurements from faint auroral lines. Its high-spectral-resolution mode resolves ionized-gas motions at approximately 10\u00a0km\u00a0s⁻¹, enabling measurements of turbulence, expanding structures, and outflows.",
    ],
  },
];
