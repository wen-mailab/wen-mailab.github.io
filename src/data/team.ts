import headshot0 from "@/assets/headshots/live/yixin_wen.jpg";
import headshot1 from "@/assets/headshots/live/jesse_kisembe.jpg";
import headshot2 from "@/assets/headshots/live/weikang_qian.jpg";
import headshot3 from "@/assets/headshots/live/ronald_odongo.jpeg";
import headshot4 from "@/assets/headshots/live/aidan_winney.jpeg";
import headshot5 from "@/assets/headshots/live/yuting_dai.jpg";
import headshot6 from "@/assets/headshots/live/tan_dao.jpeg";
import headshot7 from "@/assets/headshots/live/olivia_zhang.jpg";
import headshot8 from "@/assets/headshots/live/tomas_bayona.jpeg";
import headshot9 from "@/assets/headshots/live/lorenzo_pulmano.jpg";
import headshot10 from "@/assets/headshots/live/jacob_hines.jpg";



export type MemberStatus = "Principal Investigator" | "PhD Student" | "M.S. Student" | "Undergraduate" | "Alumni" | "Collaborator";

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

// Restored from the public MAILab website snapshot on 2026-10-02.
// PI email updated to the current Stony Brook address on 2026-10-06.
export const team: TeamMember[] = [
  {
    "id": "yixinwen",
    "name": "Yixin \"Berry\" Wen, Ph.D.",
    "status": "Principal Investigator",
    "email": "yixin.wen@stonybrook.edu",
    "about": "My motivation to pursue more accurate remote sensing precipitation retrievals at global scale is powered by the massive precipitation observations and the advanced machine learning (ML) technologies. During my 10-year work on the advanced weather radar at NOAA and on various satellite missions (e.g. AIRS, GPM, MODIS) at NASA, I have been involved in development and evaluation of weather radar and satellite precipitation retrieval algorithms.",
    "headshot": headshot0
  },
  {
    "id": "jessekisembe",
    "name": "Jesse Kisembe",
    "status": "PhD Student",
    "about": "My research focuses on climate variability and change, with a particular emphasis on the wet seasons in Eastern Africa. I am currently investigating the intraseasonal characteristics of these seasons, analyzing recent trends, current variability, and future projections. Additionally, I am exploring how these changes may affect agropastoral communities in the region.",
    "headshot": headshot1,
    "awards": [
      "NASA Future Investigators in NASA Earth and Space Science and Technology (FINESST)",
      "David L. Niddrie Graduate Student Excellence Award (2023), Department of Geography, University of Florida"
    ]
  },
  {
    "id": "weikangqian",
    "name": "Weikang Qian",
    "status": "PhD Student",
    "about": "My research focuses on understanding hydrometeorological extreme events, including but not limited to severe convective storms (SCS), extreme precipitation, and droughts. Approaches such as ML, AI, and causal inference are utilized to investigate how these approaches can add value to the field. Currently, I’m interested in the relationship between the near-storm environments and SCS for better SCS detection and warning.",
    "headshot": headshot2,
    "awards": [
      "The Seventh Round of IPCC Scholarship Awards (2023-2025). The IPCC Scholarship Programme"
    ]
  },
  {
    "id": "ronaldodongo",
    "name": "Ronald Odongo",
    "status": "PhD Student",
    "about": "My research focuses on atmospheric processes and climate variability, with a particular emphasis on mesoscale circulations such as lake and sea breezes in tropical and subtropical regions, including areas like Florida. I am currently investigating the dynamics of boundary-layer interactions during these circulations, examining their diurnal variability, recent trends, and potential responses to climate change. Additionally, I am exploring how enhanced forecasting of these phenomena can improve disaster preparedness, agricultural productivity, and water resource management in vulnerable coastal and inland communities, particularly in regions where these systems significantly impact livelihoods and ecosystems.",
    "headshot": headshot3
  },
  {
    "id": "aidanwinney",
    "name": "Aidan Winney",
    "status": "M.S. Student",
    "about": "I am a Graduate Computer Science Student at the University of Florida, where I also obtained my Bachelor's degree in Computer Science with a certificate in Geography Artificial Intelligence And Big Data.",
    "headshot": headshot4,
    "awards": [
      "2024-2025 AI Scholar Cohort"
    ]
  },
  {
    "id": "yutingdai",
    "name": "Yuting Dai",
    "status": "M.S. Student",
    "about": "My work is focused on increasing accessibility of high-resolution weather models. I am currently applying remote sensing data to analyze effects of severe weather events on local agriculture. ",
    "headshot": headshot5
  },
  {
    "id": "tandao",
    "name": "Tan Dao",
    "status": "Collaborator",
    "about": "My research focuses on validation of observation platforms to each other as well as model outputs. I am interested in how these observations perform in high-impact events such as tropical cyclones. Currently I am utilizing the Dual Precipitation Radar (DPR) onboard NASA’s GPM core satellite as a calibration platform to compare the RaXPol mobile to the WSR-88D ground weather radars during Hurricane Ian in 2022.  ",
    "headshot": headshot6,
    "awards": [
      "2024-2025 CLAS Scholars Cohort"
    ]
  },
  {
    "id": "oliviazhang",
    "name": "Olivia Zhang",
    "status": "Undergraduate",
    "about": "Having lived in various coastal cities, I am passionate about community resilience to climate change. I study data science and geography with a minor in geospatial AI at the University of Florida. My research focuses on applying interpretable machine learning techniques to improve estimates of rainfall rate and cloud microphysics. ",
    "headshot": headshot7,
    "awards": [
      "John R. and Fawn T. Dunkle Geography Award (2025), University of Florida"
    ]
  },
  {
    "id": "tomasbayona",
    "name": "Tomas Bayona",
    "status": "Alumni",
    "about": "My research focuses on the urgent need for community-wide evaluation of artificial intelligence weather prediction (AIWP) models. I am particularly interested in the verification of traditional variables such as 2-meter temperature and precipitation during extreme weather events.",
    "headshot": headshot8
  },
  {
    "id": "lorenzopulmano",
    "name": "Lorenzo Pulmano",
    "status": "Undergraduate",
    "about": "My work involves tropical cyclone and hurricane satellite meteorology research. Currently, I am working on wavelet diffusion models for use in hurricane satellite imagery analysis. My previous research is concerned with eyewall replacement cycle (ERC) prediction and subsequent hurricane intensity forecasting.",
    "headshot": headshot9,
    "awards": [
      "Regeneron STS Scholar 2024"
    ],
    "paperIds": [],
    "conferenceIds": []
  },
  {
    "id": "jacobhines",
    "name": "Jacob Hines",
    "status": "Undergraduate",
    "about": "I am an undergraduate student pursuing a degree in General Atmospheric Sciences and a minor in Physics at the University of Florida. I am currently conducting research on increasing the resolution of satellite precipitation data using wavelet diffusion.",
    "headshot": headshot10
  }
];
