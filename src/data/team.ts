

export type MemberStatus = "Principal Investigator" | "PhD Student" | "M.S. Student" | "Undergraduate" | "Collaborator" | "Alumni";

export interface TeamMember {
  id: string;
  name: string;
  status: MemberStatus;
  email?: string;
  about: string;
  headshot?: string;
  awards?: string[];
  /** Paper IDs from papers.ts — publications are auto-linked */
  paperIds?: string[];
  /** Conference presentation IDs from conferences.ts — presentations are auto-linked */
  conferenceIds?: string[];
}

export const team: TeamMember[] = [
  {
    id: "yixinwen",
    name: "Dr. Yixin \"Berry\" Wen",
    status: "Principal Investigator",
    email: "yixin.wen@ufl.edu",
    about:
      "My motivation to pursue more accurate remote sensing precipitation retrievals at global scale is powered by the massive precipitation observations and the advanced machine learning (ML) technologies. During my 10-year work on the advanced weather radar at NOAA and on various satellite missions (e.g. AIRS, GPM, MODIS) at NASA, I have been involved in development and evaluation of weather radar and satellite precipitation retrieval algorithms.",
    headshot: "/mai-lab/assets/headshots/yixin_wen.jpg",
    awards: [
      "NSF 25-530 Collaborative Research: CAIG: Reliable Uncertainty-Aware Generative Downscaling for Geoscience Data (PI, $353,178, 10/1/2025 – 9/30/2028)",
      "NASA NNH23ZDA001N-EEJ: A.47 Earth Action: Community Action for Equity and Environmental Justice, Building Co-Design and Co-Learning Digital Twins against Floods on Tribal Lands in support of Indigenous Communities (Co-I, $750,374, 10/01/2024-9/31/2027, with University of Oklahoma)",
      "NASA Jet Propulsion Laboratory, California Institute of Technology A19-0075-001, Analysis of the performance of the Atmospheric Infrared Sounder (AIRS) retrieval system (PI, $140,000, 08/01/2018-09/31/2021)",
      "University of Oklahoma Cooperative Institute for Mesoscale Meteorological Studies (CIMMS) Director’s Directed Research Fund, Understanding satellite-derived cloud properties using polarimetric classification of hydrometeor types from WSR-88D radars. (PI, $20,000)",
      "NASA Oklahoma EPSCoR Research Initiation Grant, Development of a joint ground polarimetric radar and satellite database. (PI, $27,000, 06/01/2019-06/01/2021)"
    ],
    // paperIds: ["p1", "p2", "p3", "p4"],
    // conferenceIds: ["c1", "c2"],
  },
  {
    id: "jessekisembe",
    name: "Jesse Kisembe",
    status: "PhD Student",
    about:
      "My research focuses on climate variability and change, with a particular emphasis on the wet seasons in Eastern Africa. I am currently investigating the intraseasonal characteristics of these seasons, analyzing recent trends, current variability, and future projections. Additionally, I am exploring how these changes may affect agropastoral communities in the region.",
    headshot: "/mai-lab/assets/headshots/jesse_kisembe.jpg",
    awards: ["NASA Future Investigators in NASA Earth and Space Science and Technology (FINESST)", 
      "David L. Niddrie Graduate Student Excellence Award (2023), Department of Geography, University of Florida"],
    // paperIds: ["p1", "p2", "p3"],
    // conferenceIds: ["c1", "c2", "c4"],
  },
  {
    id: "weikangqian",
    name: "Weikang Qian",
    status: "PhD Student",
    about:
      "My research focuses on understanding hydrometeorological extreme events, including but not limited to severe convective storms (SCS), extreme precipitation, and droughts. Approaches such as ML, AI, and causal inference are utilized to investigate how these approaches can add value to the field. Currently, I’m interested in the relationship between the near-storm environments and SCS for better SCS detection and warning.",
    headshot: "/mai-lab/assets/headshots/weikang_qian.jpg",
    awards: ["The Seventh Round of IPCC Scholarship Awards (2023-2025). The IPCC Scholarship Programme"],
    // paperIds: ["p1", "p2", "p3"],
    // conferenceIds: ["c2", "c3", "c4"],
  },
  {
    id: "ronaldodongo",
    name: "Ronald Odongo",
    status: "PhD Student",
    about:
      "My research focuses on atmospheric processes and climate variability, with a particular emphasis on mesoscale circulations such as lake and sea breezes in tropical and subtropical regions, including areas like Florida. I am currently investigating the dynamics of boundary-layer interactions during these circulations, examining their diurnal variability, recent trends, and potential responses to climate change. Additionally, I am exploring how enhanced forecasting of these phenomena can improve disaster preparedness, agricultural productivity, and water resource management in vulnerable coastal and inland communities, particularly in regions where these systems significantly impact livelihoods and ecosystems.",
    headshot: "/mai-lab/assets/headshots/ronald_odongo.jpeg",
    // paperIds: ["p5", "p6", "p7"],
  },
  {
    id: "aidanwinney",
    name: "Aidan Winney",
    status: "M.S. Student",
    about:
      "I am a Graduate Computer Science Student at the University of Florida, where I also obtained my Bachelor's degree in Computer Science with a certificate in Geography Artificial Intelligence And Big Data.",
    headshot: "/mai-lab/assets/headshots/aidan_winney.jpeg",
    awards: ["2024-2025 AI Scholar Cohort"],
    // paperIds: [],
    // conferenceIds: [],
  },
  {
    id: "tandao",
    name: "Tan Dao",
    status: "Collaborator",
    about:
      "My research focuses on validation of observation platforms to each other as well as model outputs. I am interested in how these observations perform in high-impact events such as tropical cyclones. Currently I am utilizing the Dual Precipitation Radar (DPR) onboard NASA’s GPM core satellite as a calibration platform to compare the RaXPol mobile to the WSR-88D ground weather radars during Hurricane Ian in 2022.  ",
    headshot: "/mai-lab/assets/headshots/tan_dao.jpeg",
    // conferenceIds: ["c5", "c6"],
    awards: ["2024-2025 CLAS Scholars Cohort"],
  },
  {
    id: "oliviazhang",
    name: "Olivia Zhang",
    status: "Undergraduate",
    about:
      "Having lived in various coastal cities, I am passionate about community resilience to climate change. I study data science and geography with a minor in geospatial AI at the University of Florida. My research focuses on applying interpretable machine learning techniques to improve estimates of rainfall rate and cloud microphysics. ",
    headshot: "/mai-lab/assets/headshots/olivia_zhang.jpg",
    awards: ["John R. and Fawn T. Dunkle Geography Award (2025), University of Florida"],
    // paperIds: ["p8"],
    // conferenceIds: ["c7"],
  },
  {
    id: "tomasbayona",
    name: "Tomas Bayona",
    status: "Alumni",
    about:
      "My research focuses on the urgent need for community-wide evaluation of artificial intelligence weather prediction (AIWP) models. I am particularly interested in the verification of traditional variables such as 2-meter temperature and precipitation during extreme weather events.",
    headshot: "/mai-lab/assets/headshots/tomas_bayona.jpeg",
    // conferenceIds: ["c8"],
  },
  {
    id: "lorenzopulmano",
    name: "Lorenzo Pulmano",
    status: "Undergraduate",
    about:
      "My work involves tropical cyclone and hurricane satellite meteorology research. Currently, I am working on wavelet diffusion models for use in hurricane satellite imagery analysis. My previous research is concerned with eyewall replacement cycle (ERC) prediction and subsequent hurricane intensity forecasting.",
    headshot: "/mai-lab/assets/headshots/lorenzo_pulmano.jpg",
    awards: ["Regeneron STS Scholar 2024"],
    paperIds: [],
    conferenceIds: [],
  },
  // {
  //   id: "",
  //   name: "",
  //   status: "",
  //   about:
  //     "",
  //   headshot: "/mai-lab/assets/headshots/.jpg",
  //   paperIds: [],
  //   conferenceIds: [],
  // },
];
