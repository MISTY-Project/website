export interface ScienceGoal {
  id: string;
  label: string;
  title: string;
  description: string;
  measurements: string[];
}

export const scienceGoals: ScienceGoal[] = [
  {
    id: "goal-1",
    label: "Feedback before the first supernova",
    title: "How is star formation regulated by pre-supernova feedback?",
    description:
      "The low efficiency with which galaxies convert molecular gas into stars suggests that feedback rapidly disrupts star-forming clouds. In near-solar-metallicity disks, the brief spatial overlap between young stars and their natal gas indicates that cloud dispersal is dominated by pre-supernova feedback. Does this hold, or become more pronounced, at low metallicity, where dust shielding is weaker and radiation fields are harder?",
    measurements: [
      "Cluster ages and embedded-to-exposed timescales from HST + JWST photometry",
      "Gas temperature, density, and metallicity around young clusters from the IFU data",
      "Expansion velocities of H II regions (~10&nbsp;km&nbsp;s<sup>−1</sup> resolution)",
      "The relative contributions of thermal, radiation, and wind pressure to cloud disruption",
    ],
  },
  {
    id: "goal-2",
    label: "Supernova feedback in dwarf galaxies",
    title: "How does supernova feedback reshape dwarf galaxies?",
    description:
      "Supernovae stir the interstellar medium, disrupt star-forming regions, and can drive metal-enriched gas out of the shallow potentials of dwarf galaxies, shaping the gas reservoir available for future star formation. How much mass and metal content actually escapes, and how does that depend on star-formation rate, metallicity, and environment?",
    measurements: [
      "Expanding shells around individual H II regions (~10&nbsp;km&nbsp;s<sup>−1</sup> resolution)",
      "Galaxy-scale outflows and potential galactic fountains",
      "Outflow energetics: ionized-gas mass, mass-outflow rate, kinetic power, and mass-loading factor",
      "A feedback census spanning star-formation rate, metallicity, and large-scale environment",
    ],
  },
  {
    id: "goal-3",
    label: "Ionizing radiation leakage and impact",
    title: "How does ionizing radiation escape and shape the surrounding gas?",
    description:
      "Photons that leak from their natal H II regions travel hundreds of parsecs through a porous interstellar medium, altering the thermal, chemical, and ionization state of gas far from where they were produced. Radiation that escapes galaxies altogether is thought to have played a central role in cosmic reionization. What sets the escape fraction at low metallicity?",
    measurements: [
      "Ionizing-photon output of thousands of young clusters from HST + JWST imaging",
      "Ionizing photons absorbed by the surrounding gas from narrowband Hα and Paα imaging",
      "Local escape fractions as a function of cluster and gas properties",
      "Diffuse ionized gas across entire galaxies from deep IFU data cubes",
    ],
  },
  {
    id: "goal-4",
    label: "The life cycle of metals",
    title: "How are metals mixed and recycled in low-mass galaxies?",
    description:
      "Chemical abundance patterns record the production of elements in stars, their mixing through the interstellar medium, their ejection in outflows, and the accretion of pristine gas. Resolving these patterns has been limited by the faintness of the auroral lines needed for direct, temperature-sensitive abundances; MISTY’s depth makes those lines measurable across large areas of each galaxy.",
    measurements: [
      "Auroral lines from multiple ionized-gas species across 3500–10,000&nbsp;Å",
      "Oxygen, nitrogen, sulfur, and argon abundances on approximately 100–150&nbsp;pc scales",
      "The spatial scales over which newly synthesized elements are redistributed",
      "Signatures of inflow, outflow, and local mixing in the abundance field",
    ],
  },
  {
    id: "goal-5",
    label: "The evolution of PAHs",
    title: "How do PAHs form, evolve, and survive at low metallicity?",
    description:
      "Polycyclic aromatic hydrocarbons (PAHs) and other grains dominate photoelectric heating in neutral gas: far-ultraviolet photons eject electrons from their surfaces, and those electrons thermalize and heat the surrounding gas, setting the balance between the cold and warm neutral medium. PAHs may also contribute to molecular-hydrogen formation on grain surfaces. Their mass fraction falls sharply with metallicity, yet PAH emission is still detected in some metal-poor galaxies.",
    measurements: [
      "3.3&nbsp;μm PAH emission from narrowband JWST imaging—the first systematic sample, as the feature has so far been measured in only a handful of dwarf galaxies",
      "PAH emission relative to the locations and properties of young massive clusters and the structure of neutral and ionized gas",
    ],
  },
];
