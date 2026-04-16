export interface ConferencePresentation {
  id: string;
  title: string;
  authors: string[];
  conferenceName: string;
  location: string;
  year: number;
  doi?: string;
}

export const conferencesPresentations: ConferencePresentation[] = [
  {
    id: "c1",
    title: "Synergy study of space-borne and ground-based radar observations aided by AI/ML",
    authors: ["Wen, Y."],
    conferenceName: "NASA Goddard GESTAR seminar",
    location: "Greenbelt, Maryland",
    year: 2024
  },
  {
    id: "c2",
    title: "Cloud Computation: Ground validation of NASA GPM products in the cloud",
    authors: ["Wen, Y."],
    conferenceName: "NASA Goddard Earth Sciences Data and Information Services Center (GES DISC) User Working Group Annual F2F meeting",
    location: "Greenbelt, Maryland",
    year: 2023
  },
  {
    id: "c3",
    title: "Satellite Archaeology",
    authors: ["Wen, Y."],
    conferenceName: "Aucilla Research Institute Conference",
    location: "Monticello, Florida",
    year: 2023
  },
  {
    id: "c4",
    title: "Understanding the Causalities between Multiple Environmental Variables and Droughts in Amazon Basin",
    authors: ["Qian, W.", "Wen, Y.", "Farahmand, A.", "Kisembe, J."],
    conferenceName: "EGU - Copernicus Meetings",
    location: "Vienna, Austria",
    year: 2024,
    doi: "EGU24-12984"
  },
  {
    id: "c5",
    title: "Intercomparison of ground-based RaXPol mobile radar and WSR-88D operational radar with the GPM spaceborne radar during Hurricane Ian",
    authors: ["Dao, T.", "Wen, Y.", "Li, Z.", "Qian, W.", "Tzeng, M-D.", "Yu, T.Y.", "Bodine, D."],
    conferenceName: "AGU Fall Meeting",
    location: "San Francisco, California",
    year: 2023
  },
  {
    id: "c6",
    title: "Improving Early-warning Tornado Forecast Based on Environmental Variables Using Symbolic Deep Learning",
    authors: ["Qian, W.", "Wen, Y.", "Gao, S.", "Li, Z.", "Kisembe, J.", "Jing, H."],
    conferenceName: "AGU Fall Meeting",
    location: "San Francisco, California",
    year: 2023
  },
  {
    id: "c7",
    title: "MATLAB for Cloud Computing",
    authors: ["Kempler, L.", "Wen, Y."],
    conferenceName: "AGU Fall Meeting",
    location: "San Francisco, California",
    year: 2023
  },
  {
    id: "c8",
    title: "Explainable AI models for precipitation retrievals: a case study based on atmospheric sounding systems",
    authors: ["Li, Z.", "Wen, Y.", "Schreier, M.", "Behrangi, A.", "Hong, Y.", "Lambrigtsen, B."],
    conferenceName: "AGU Fall Meeting",
    location: "New Orleans, Louisiana",
    year: 2021,
    doi: "H25R-1229"
  },
  {
    id: "c9",
    title: "Evaluation of GPM DPR Surface Precipitation Type Identification, Using Ground-Based Polarimetric WSR-88D Radar and mPING Crowdsourcing Observations",
    authors: ["Griffin, E.", "Wen, Y.", "Schuur, T.", "Ryzhkov, A.", "Krause, J.", "Hong, Y."],
    conferenceName: "AGU Fall Meeting",
    location: "Online",
    year: 2020
  },
  {
    id: "c10",
    title: "The use of AIRS and polarimetric radar to monitor severe local storms: creating synergy between hyperspectral sounders and ground radars",
    authors: ["Wen, Y.", "Krause, J.", "Kahn, B.", "Huang, T."],
    conferenceName: "NASA Sounder Science Team Meeting",
    location: "Hyattsville, Maryland",
    year: 2019
  },
  {
    id: "c11",
    title: "Advancing flash flooding early warning using proxy of phased array radar measurements",
    authors: ["Wen, Y.", "Schurr, T.", "Vergara, H.V.", "Kuster, C.", "Kudzo, J."],
    conferenceName: "International Radar Meteorology Conference",
    location: "Nara, Japan",
    year: 2019
  },
  {
    id: "c12",
    title: "Effect of Precipitation Sampling Error on Flash Flood Monitoring and Prediction: Anticipating Rapid-Update Weather Radars",
    authors: ["Wen, Y.", "Schurr, T.", "Kuster, C.", "Vergara, H.V."],
    conferenceName: "AMS Annual Meeting",
    location: "Phoenix, Arizona",
    year: 2019
  },
  {
    id: "c13",
    title: "Advancing flash flooding early warning using rapid-scan polarimetric radar observations",
    authors: ["Wen, Y.", "Shuur, T.J.", "Kuster, C.", "Vegara, H."],
    conferenceName: "Conference",
    location: "Seoul, Korea",
    year: 2018
  },
  {
    id: "c14",
    title: "How well the early 2017 California Atmospheric River precipitation events were captured by satellite products and ground-based radars?",
    authors: ["Wen, Y.", "Behrangi, A.", "Chen, H.", "Lambrigtsen, B."],
    conferenceName: "AGU Fall Meeting",
    location: "New Orleans, Louisiana",
    year: 2017
  },
  {
    id: "c15",
    title: "Advancing drought monitoring and prediction using A-train data",
    authors: ["Wen, Y.", "Behrangi, A.", "Licata, S.", "Granger, S.", "Tadesse, T.", "Sun, Y."],
    conferenceName: "International A-Train Symposium",
    location: "Pasadena, California",
    year: 2017
  },
  {
    id: "c16",
    title: "Evaluation and Uncertainty Estimation of Radar and Satellite Precipitation Products over Western United States",
    authors: ["Wen, Y.", "Behrangi, A.", "Lambrigtsen, B.", "Kirstetter, P.-E."],
    conferenceName: "AGU Fall Meeting",
    location: "San Francisco, California",
    year: 2016
  },
  {
    id: "c17",
    title: "Evaluation of MRMS snowfall products using SNOTEL measurements in west mountainous region",
    authors: ["Wen, Y.", "Kirstetter, P.E.", "Gourley, J.J.", "Behrangi, A.", "Flamig, Z.", "Hong, Y."],
    conferenceName: "AGU Fall Meeting",
    location: "San Francisco, California",
    year: 2015
  },
  {
    id: "c18",
    title: "The Latest Progress in the VPR-Identification and Enhancement (VPR-IE) Approach: Incorporate Climatological and Real-time VPR Information from Spaceborne Precipitation Radar to the NOAA MRMS system",
    authors: ["Wen, Y.", "Hong, Y.", "Kirstetter, P.E.", "Gourley, J.J.", "Zhang, J."],
    conferenceName: "AGU Fall Meeting",
    location: "San Francisco, California",
    year: 2014
  },
  {
    id: "c19",
    title: "Systematical evaluation of VPR-Identification and Enhancement (VPR-IE) approach for different precipitation types",
    authors: ["Wen, Y.", "Hong, Y.", "Kirstetter, P.E.", "Gourley, J.J.", "Zhang, J."],
    conferenceName: "SPIE Remote Sensing of the Atmosphere, Clouds, and Precipitation V",
    location: "Beijing, China",
    year: 2014
  },
  {
    id: "c20",
    title: "How Spaceborne Radar can enhance ground radar network for improved understanding of precipitation rates and types over mountainous regions",
    authors: ["Wen, Y.", "Hong, Y.", "Kirstetter, P.E.", "Gourley, J.J.", "Zhang, J."],
    conferenceName: "Conference",
    location: "San Diego, California",
    year: 2014
  },
  {
    id: "c21",
    title: "Deriving a NMQ Snow Quality Index: Attempts to establish consistent and robust snowfall references for benchmarking spaceborne snowfall products",
    authors: ["Wen, Y.", "Hong, Y.", "Kirstetter, P.E.", "Gourley, J.J.", "Zhang, J.", "Zhang, G."],
    conferenceName: "AGU Fall Meeting",
    location: "San Francisco, California",
    year: 2013
  },
  {
    id: "c22",
    title: "Systematical Evaluation of VPR-Identification and Enhancement (VPR-IE) Approach: Incorporate Space-borne Radar into Ground Radar Network",
    authors: ["Wen, Y.", "Hong, Y.", "Cao, Q.", "Gourley, J.J.", "Zhang, J.", "Kirstetter, P.E."],
    conferenceName: "AMS Radar Conference",
    location: "Breckenridge, Colorado",
    year: 2013
  },
  {
    id: "c23",
    title: "Spaceborne and Ground-based Global and Regional Precipitation Estimation: Multi-sensor Synergy",
    authors: ["Wen, Y.", "Hong, Y.", "Cao, Q.", "Gourley, J.J.", "Zhang, J.", "Kirstetter, P.E."],
    conferenceName: "CYWater Summer Meeting",
    location: "Beijing, China",
    year: 2013
  },
  {
    id: "c24",
    title: "Capture extreme precipitation events in Mountainous Region: Incorporate space-borne radar into ground radar network using VPR-IE method",
    authors: ["Wen, Y.", "Hong, Y.", "Cao, Q.", "Zhang, G.", "Gourley, J.J.", "Zhang, J.", "Kirstetter, P.E.", "Flamig, Z.", "Xue, X."],
    conferenceName: "Second China-U.S. Symposium on Meteorology",
    location: "Qingdao, Shandong Province, China",
    year: 2013
  },
  {
    id: "c25",
    title: "VPR-IE: Combining climatological VPR information from TRMM Precipitation Radar with NEXRAD-based rainfall estimates",
    authors: ["Wen, Y.", "Hong, Y.", "Cao, Q.", "Gourley, J.J.", "Zhang, J.", "Kirstetter, P."],
    conferenceName: "AGU Fall Meeting",
    location: "San Francisco, California",
    year: 2012
  },
  {
    id: "c26",
    title: "Improving precipitation estimation in mountainous west region of United States by incorporating space-borne radar measurements into National Mosaic QPE system",
    authors: ["Wen, Y.", "Hong, Y.", "Cao, Q.", "Zhang, J.", "Gourley, J.J.", "Zhang, G.", "Howard, K."],
    conferenceName: "NASA PMM",
    location: "Denver, Colorado",
    year: 2011
  },
  {
    id: "c27",
    title: "Incorporating NASA space-borne precipitation products into National Mosaic QPE operational system for improved precipitation measurements",
    authors: ["Wen, Y.", "Kirstetter, P.E.", "Hong, Y.", "Zhang, J.", "Gourley, J.J.", "Zhang, G."],
    conferenceName: "35th Conference on Radar Meteorology",
    location: "Pittsburgh, Pennsylvania",
    year: 2011
  },
  {
    id: "c28",
    title: "Incorporating NASA space-borne precipitation research products into National Mosaic QPE operational system for improved precipitation measurements",
    authors: ["Wen, Y.", "Hong, Y.", "Zhang, G.", "Zhang, J.", "Gourley, J.J."],
    conferenceName: "IEEE Radar Conference",
    location: "Kansas City, Missouri",
    year: 2011
  },
  {
    id: "c29",
    title: "Incorporating NASA spaceborne precipitation products into National Mosaic QPE operational system for improved precipitation measurements",
    authors: ["Wen, Y.", "Hong, Y.", "Kirstetter, P.E.", "Zhang, J.", "Gourley, J.J.", "Zhang, G.", "Howard, K."],
    conferenceName: "International Symposium on Earth-Science Challenges (ISEC)",
    location: "Norman, Oklahoma",
    year: 2011
  },
  {
    id: "c30",
    title: "The Coupled routing and excess storage (CREST) distributed hydrologic model sensitivity to rainfall spatiotemporal resolution",
    authors: ["Wen, Y.", "Hong, Y.", "Gourley, J.J.", "Flamig, Z.", "Xue, X.", "Chen, S."],
    conferenceName: "19th International Conference on GeoInformatics",
    location: "Shanghai, China",
    year: 2011
  },
  {
    id: "c31",
    title: "Creating Synergy between Ground- and Space-based Precipitation Measurements",
    authors: ["Wen, Y.", "Hong, Y.", "Zhang, J.", "Zhang, G.", "Gourley, J.J.", "Chen, S."],
    conferenceName: "National Radio Science Meeting",
    location: "Boulder, Colorado",
    year: 2011
  },
  {
    id: "c32",
    title: "Cross Validation of Space-borne Radar and Ground Dual-polarization Radar",
    authors: ["Wen, Y.", "Hong, Y.", "Gourley, J.J.", "Zhang, G.", "Schuur, T.J.", "Flamig, Z.", "Morris, K.R.", "Cao, Q."],
    conferenceName: "AGU Fall Meeting",
    location: "San Francisco, California",
    year: 2010
  },
  {
    id: "c33",
    title: "Creating Synergy between ground and space-based precipitation measurements",
    authors: ["Gourley, J.", "Hong, Y.", "Petersen, W.", "Howard, K.W.", "Flamig, Z.L.", "Wen, Y."],
    conferenceName: "AGU Fall Meeting",
    location: "San Francisco, California",
    year: 2010
  },
  {
    id: "c34",
    title: "Cross Validation of Space-borne Radar and Ground Dual-polarization Radar",
    authors: ["Wen, Y.", "Hong, Y.", "Schuur, T.J.", "Zhang, G.", "Gourley, J.J."],
    conferenceName: "National Radio Science Meeting",
    location: "Boulder, Colorado",
    year: 2010
  },
  {
    id: "c35",
    title: "Cross Validation of TRMM Space Radar with Ground Polarimetric Radar",
    authors: ["Hong, Y.", "Wen, Y.", "Flamig, Z.", "Zhang, G.", "Shaun, T.", "Gourley, J."],
    conferenceName: "First Symposium on Radar and Modeling Studies of the Atmosphere",
    location: "Kyoto, Japan",
    year: 2009
  }
];