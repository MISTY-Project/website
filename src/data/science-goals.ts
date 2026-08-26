export interface ScienceGoal {
  id: string;
  label: string;
  title: string;
  description: string;
}

export const scienceGoals: ScienceGoal[] = [
  {
    id: "goal-1",
    label: "Feedback before the first supernova",
    title: "How is star formation regulated before the first supernovae?",
    description:
      "The low efficiency with which galaxies convert molecular gas into stars suggests that feedback rapidly disrupts star-forming clouds. In near-solar-metallicity disks, the brief spatial overlap between young stars and their natal gas indicates that cloud dispersal is dominated by pre-supernova feedback. MISTY will test whether this rapid transition persists, or becomes even more pronounced, at low metallicity, where reduced dust shielding and harder radiation fields may change how young stars couple to and clear the surrounding interstellar medium. Combined HST and JWST photometry will trace young star clusters from deeply embedded to exposed phases and measure the timescales over which multiphase material disperses around them. Together with ground-based IFU observations, which measure gas temperatures, densities, metallicities, and expansion velocities down to approximately 10 km s⁻¹, these data will enable MISTY to quantify the relative contributions of thermal, radiation, and other pressure sources to cloud disruption.",
  },
  {
    id: "goal-2",
    label: "Supernova feedback in dwarf galaxies",
    title: "How does stellar feedback reshape dwarf galaxies after the onset of supernovae?",
    description:
      "When massive stars end their lives as supernovae, their explosions inject energy, momentum, and newly produced elements into the surrounding gas. This supernova feedback can stir the interstellar medium, disrupt star-forming regions, and drive metal-enriched gas out of dwarf galaxies or into their surrounding halos, thereby shaping the gas reservoir available for future generations of star formation. MISTY's high-spectral-resolution IFU observations trace ionized-gas motions down to 10 km s⁻¹, enabling the identification of expanding shells around individual H II regions, galaxy-scale outflows, and possible galactic fountains. Using multiple ionized-gas emission lines, MISTY will constrain outflow energetics, including ionized-gas mass, mass outflow rate, kinetic power, and mass-loading factor. Spanning galaxies with diverse star-formation rates, metallicities, and large-scale environments, MISTY will provide a census of supernova feedback across the low-mass, low-metallicity regime.",
  },
  {
    id: "goal-3",
    label: "Ionizing radiation leakage and impact",
    title: "How does ionizing radiation shape the baryon cycle?",
    description:
      "Ionizing radiation from massive stars can act as a long-range form of feedback. Photons that escape their natal H II regions may travel hundreds of parsecs through a porous interstellar medium, altering the thermal, chemical, and ionization state of gas far beyond the star-forming regions in which they were produced. Radiation that escapes galaxies altogether is also thought to have played a central role in cosmic reionization. MISTY's multi-scale mapping of entire dwarf galaxies on 10-100 pc scales will provide a population-wide view of these processes in the low-metallicity regime. HST and JWST imaging will identify thousands of young star clusters and constrain their ionizing-photon output, while narrowband Hα and Paα imaging will trace the ionizing radiation absorbed by the surrounding gas. Together, these measurements will constrain local ionizing escape fractions and test how they depend on cluster and gas properties. On larger scales, MISTY's deep IFU data cubes will map diffuse ionized gas, a tenuous plasma thought to be powered largely by escaping ionizing radiation, and trace how leaked radiation propagates through and affects the multiphase interstellar medium on galactic scales.",
  },
  {
    id: "goal-4",
    label: "The life cycle of metals",
    title: "How are metals mixed and recycled in low-mass galaxies?",
    description:
      "The chemical abundance patterns of galaxies preserve a record of their evolutionary histories: the production of elements in stars, their mixing through the interstellar medium, their ejection in outflows, and the accretion of pristine gas. Spatially resolving these abundance patterns has traditionally been challenging because direct, temperature-sensitive measurements require the detection of faint auroral emission lines across many spatial elements. A central goal of MISTY is to obtain the depth needed to detect these lines across large areas of each galaxy. MISTY's deep IFU data cubes span 3700–10,000 Å and cover entire dwarf galaxies, enabling measurements of auroral lines from multiple ionized-gas species. These observations will map oxygen, nitrogen, sulfur, and argon abundances on scales of approximately 100 pc. MISTY will reveal the spatial scales over which newly synthesized elements are redistributed through the ISM and test how inflows, outflows, and local mixing shape the chemical structure of low-mass galaxies.",
  },
  {
    id: "goal-5",
    label: "The evolution of PAHs",
    title: "How do PAHs form, evolve, and survive at low metallicity?",
    description:
      "Polycyclic aromatic hydrocarbons (PAHs) are small carbonaceous dust grains that are widespread in the interstellar medium of massive galaxies. They dominate photoelectric heating in neutral gas, and thus have a critical role in the balance of the cold and warm neutral medium phases. PAHs may also contribute to molecular-hydrogen formation on dust-grain surfaces, linking their abundance and properties to the gas from which new stars form. Yet their mass fraction sharply decreases with metallicity, even though PAH emission is still detected in some low-metallicity galaxies. MISTY will use narrowband JWST imaging of the 3.3 μm PAH feature to map the distribution of PAH emission across a representative population of nearby low-mass, low-metallicity galaxies. By comparing this emission with the locations and properties of young massive clusters and the surrounding interstellar medium, MISTY will investigate how PAHs form, evolve, and survive in low-metallicity environments. The 3.3 μm feature has so far been measured in only a handful of dwarf galaxies; MISTY will provide the first systematic view across a large, representative sample.",
  },
];
