export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  link?: string;
}

export const newsItems: NewsItem[] = [
    {
        id: "0",
        title: "Lab Welcomes New Undergrads Through GeoGator Summer Research Program",
        description:
        "The Meteorology and AI Lab is excited to welcome new undergraduate students through the GeoGator Summer Research Program, which provides hands-on research experiences to University of Florida students.",
        date: "2026-05-01",
        link: "https://geog.ufl.edu/geogator-summer-research-program/",
    },
    {
        id: "1",
        title: "Jesse Kisembe Honored with NASA Finesst Award",
        description:
        "Ph.D. candidate in Geography, Jesse Kisembe, was awarded the NASA FINESST Award for his research proposal on examining dry spell events in the Horn of Africa—periods of little or no rain during the rainy season that increasingly threaten communities dependent on rain-fed agriculture.",
        date: "2025-06-20",
        link: "https://geog.ufl.edu/2025/06/20/kisembe/",
    },
];
