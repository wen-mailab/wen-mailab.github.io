export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name hint
}

export const researchAreas: ResearchArea[] = [
  {
    id: "remote-sensing",
    title: "Remote Sensing in Meteorology and Hydrology",
    description:
      "Radar and satellite remote sensing, retrieval, validation and application in Meteorology and Hydrology.",
    icon: "satellite",
  },
  {
    id: "radar-satellite",
    title: "Machine Learning and Deep Learning",
    description:
      "Applying machine learning and deep learning techniques for large-scale remote sensing applications.",
    icon: "radar",
  },
  {
    id: "validation",
    title: "Climate Analysis",
    description:
      "Long-term climate data analysis, extreme events and natural hazards.",
    icon: "planet",
  },
];
