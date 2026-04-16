import { Research } from "@/components/sections/Research";

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  pages?: string;
  year: number;
  doi: string;
}

export const papers: Paper[] = [
  {
    id: "p1",
    title: "ReSearch: A Multi-Stage Machine Learning Framework for Earth Science Data Discovery",
    authors: ["Sun, Y.", "Wen, Y.", "Yang, H."],
    journal: "arXiv preprint",
    year: 2026,
    doi: "10.48550/arXiv.2601.14176"
  },
  {
    id: "p2",
    title: "AI Agent for Hydrologic Modeling: Definition, Development, and Application",
    authors: ["Yan, S.", "Chen, M.", "Li, Z.", "Wen, Y.", "et al."],
    journal: "Geophysical Research Letters",
    year: 2026,
    doi: "10.13140/RG.2.2.34824.48643"
  },
  {
    id: "p3",
    title: "AQUAH: Automatic Quantification and Unified Agent in Hydrology",
    authors: ["Yan, S.", "Chen, M.", "Zhu, S.", "Wen, Y.", "et al."],
    journal: "arXiv preprint",
    year: 2026,
    doi: "10.48550/arXiv.2508.02936"
  },
  {
    id: "p4",
    title: "Contrasting Changes in Rainy Season Length, Rainfall Frequency, and Intensity across Eastern Africa",
    authors: ["Kisembe, J.", "Wen, Y.", "Wainwright, C.", "Odongo, R.", "Qian, W."],
    journal: "Journal of Hydrometeorology",
    year: 2026,
    doi: "10.1175/JHM-D-25-0080.1"
  },
  {
    id: "p5",
    title: "Accelerating Earth Science to Action",
    authors: ["Liu, Z.", "Wen, Y."],
    journal: "Bulletin of the American Meteorological Society",
    pages: "E2043-E2051",
    year: 2025,
    doi: "10.1175/BAMS-D-24-0226.1"
  },
  {
    id: "p6",
    title: "The First 18 Months of JGR: MLC",
    authors: ["Camporeale, E.", "Marino, R.", "Rundle, J.B.", "Folini, D.", "Chen, Y.", "Lucas, D.D.", "Li, X.", "Berger, T.E.", "Fox, G.C.", "Wen, Y.", "Shen, C.", "Wentzcovitch, R.M.", "Fox, G.C."],
    journal: "Journal of Geophysical Research: Machine Learning and Computation",
    year: 2025,
    doi: "10.1029/2024JH000369"
  },
  {
    id: "p7",
    title: "Runoff evolution responses to climate change: A case study in the headwater area of Yellow River, China",
    authors: ["Mei, J.", "Yong, B.", "Lyu, Y.", "Qi, W.", "Wen, Y.", "Wang, G.", "Zhang, J."],
    journal: "Journal of Environmental Management",
    pages: "125512",
    year: 2025,
    doi: "10.1016/J.JENVMAN.2025.125512"
  },
  {
    id: "p8",
    title: "A deep-learning workflow for CORONA-based historical land use classifications",
    authors: ["Liu, W.", "Li, S.", "Fan, D.", "Wen, Y.", "Madson, A.", "Mitchell, J."],
    journal: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing",
    pages: "16066-16080",
    year: 2025,
    doi: "10.1109/JSTARS.2025.3582789"
  },
  {
    id: "p9",
    title: "Evaluation of near-surface specific humidity and air temperature from Atmospheric Infrared Sounder (AIRS) over oceans",
    authors: ["Qian, W.", "Wen, Y.", "Gao, S.", "Li, Z.", "Kisembe, J.", "Jing, H."],
    journal: "Earth and Space Science",
    year: 2025,
    doi: "10.1029/2024EA003856"
  },
  {
    id: "p10",
    title: "Assessing Model Trade-Offs in Agricultural Remote Sensing: A Review of Machine Learning and Deep Learning Approaches Using Almond Crop Mapping",
    authors: ["Rahaman, M.", "Southworth, J.", "Wen, Y.", "Keellings, D."],
    journal: "Remote Sensing",
    year: 2025,
    doi: "10.3390/rs17152670"
  },
  {
    id: "p11",
    title: "Evaluation of IMERG climate trends over land in the TRMM and GPM eras",
    authors: ["Zhu, S.", "Li, Z.", "Chen, M.", "Wen, Y.", "Liu, Z.", "Huffman, G.J.", "Tsoodle, T.E.", "Ferraro, S.C.", "Wang, Y.", "Hong, Y."],
    journal: "Environmental Research Letters",
    year: 2025,
    doi: "10.1088/1748-9326/AD984E"
  },
  {
    id: "p12",
    title: "Detecting the Vertical Structure of Extreme Precipitation in the Headwater Area of Yellow River Using the Dual‐Frequency Precipitation Radar Onboard the Global Precipitation Measurement Mission",
    authors: ["Song, J.", "Qi, W.", "Lyu, Y.", "Zhang, H.", "Song, Y.", "Shi, T.", "Wen, Y.", "Yong, B."],
    journal: "International Journal of Climatology",
    pages: "5918-5933",
    year: 2024,
    doi: "10.1002/JOC.8675"
  },
  {
    id: "p13",
    title: "Accurate and Interpretable Radar Quantitative Precipitation Estimation with Symbolic Regression",
    authors: ["Zhang, O.", "Grissom, B.", "Pulido, J.", "Munoz-Ordaz, K.", "He, J.", "Cham, M.", "Jing, H.", "Qian, W.", "Wen, Y.", "Wang, J."],
    journal: "IEEE International Conference on Big Data (BigData)",
    pages: "2254-2263",
    year: 2024,
    doi: "10.1109/BIGDATA62323.2024.10825069"
  },
  {
    id: "p14",
    title: "How has the latest IMERG V07 improved the precipitation estimates and hydrologic utility over CONUS against IMERG V06?",
    authors: ["Zhu, S.", "Li, Z.", "Chen, M.", "Wen, Y.", "Gao, S.", "Zhang, J.", "Wang, J.", "Nan, Y.", "Ferraro, S.C.", "Tsoodle, T.E.", "Hong, Y."],
    journal: "Journal of Hydrology",
    pages: "132257",
    year: 2024,
    doi: "10.1016/J.JHYDROL.2024.132257"
  },
  {
    id: "p15",
    title: "Future Heavy Rainfall and Flood Risks for Native Americans under Climate and Demographic Changes: A Case Study in Oklahoma",
    authors: ["Li, Z.", "Tsoodle, T.", "Chen, M.", "Gao, S.", "Zhang, J.", "Wen, Y.", "Yang, T.", "King, F.N.", "Hong, Y."],
    journal: "Weather, Climate, and Society",
    pages: "143-154",
    year: 2024,
    doi: "10.1175/WCAS-D-23-0005.1"
  },
  {
    id: "p16",
    title: "Changes in Convective Precipitation Reflectivity over the CONUS Revealed by High-Resolution Radar Observations from 2015 to 2021",
    authors: ["Jing, H.", "Li, Z.", "Wen, Y.", "Gao, S.", "Wang, Y.", "Qian, W.", "Kisembe, J."],
    journal: "Atmosphere",
    pages: "627",
    year: 2024,
    doi: "10.3390/ATMOS15060627"
  },
  {
    id: "p17",
    title: "Assessing the Impacts of Falling Ice Radiative Effects on the Seasonal Variation of Land Surface Properties",
    authors: ["Kisembe, J.", "Li, J.-L.F.", "Wen, Y.", "Lee, W.-L.", "Qian, W.", "Li, Z.", "Jiang, J.H."],
    journal: "Journal of Geophysical Research: Atmospheres",
    year: 2024,
    doi: "10.1029/2024JD040991"
  },
  {
    id: "p18",
    title: "We Need a Better Way to Share Earth Observations",
    authors: ["Liu, Z.", "Wen, Y.", "Mantas, V.", "Meyer, D."],
    journal: "Eos Transactions American Geophysical Union",
    year: 2023,
    doi: "10.1029/2023EO230190"
  },
  {
    id: "p19",
    title: "Joint Collaboration on Comparing NOAA's Ground-Based Weather Radar and NASA–JAXA's Spaceborne Radar",
    authors: ["Li, Z.", "Wen, Y.", "Liao, L.", "Wolff, D.", "Meneghini, R.", "Schuur, T.J."],
    journal: "Bulletin of the American Meteorological Society",
    pages: "E1435-E1451",
    year: 2023,
    doi: "10.1175/BAMS-D-22-0127.1"
  },
  {
    id: "p20",
    title: "Ground‐Validation and Error Attribution of Near‐Surface Air Temperature From AIRS in North America",
    authors: ["Gao, S.", "Wen, Y.", "Fishbein, E.", "Lambrigtsen, B.", "Zhang, J.", "Van Dang, H.", "Galli, C."],
    journal: "Earth and Space Science",
    year: 2023,
    doi: "10.1029/2022EA002658"
  },
  {
    id: "p21",
    title: "Future U.S. Operational Weather Radar: Opportunities and Challenges for Its Next Generation",
    authors: ["Weber, M.", "Hondl, K.", "Yussouf, N.", "Jung, Y.", "Stratman, D.R.", "Putnam, B.", "Wang, X.", "Schuur, T.J.", "Kuster, C.M.", "Wen, Y.", "Sun, J.", "Keeler, J.", "Ying, Z.", "Cho, J.", "Kurdzo, J.", "Torres, S.M.", "Curtis, C.D.", "Schvartzman Cohenca, D.", "Boettcher, J.", "Mirkovic, D."],
    journal: "Bulletin of the American Meteorological Society",
    pages: "99-102",
    year: 2023,
    doi: "10.1175/BAMS-D-20-0067.A"
  },
  {
    id: "p22",
    title: "A decadal review of the CREST model family: Developments, applications, and outlook",
    authors: ["Li, Z.", "Xue, X.", "Clark, R.", "Vergara Arrieta, H.", "Gourley, J.", "Tang, G.", "Shen, X.", "Kan, G.", "Zhang, K.", "Wang, J.", "Chen, M.", "Gao, S.", "Zhang, J.", "Yang, T.", "Wen, Y.", "Kirstetter, P.E.", "Hong, Y."],
    journal: "Journal of Hydrology X",
    pages: "100159",
    year: 2023,
    doi: "10.1016/J.HYDROA.2023.100159"
  },
  {
    id: "p23",
    title: "Introducing Flashiness‐Intensity‐Duration‐Frequency (F‐IDF): A New Metric to Quantify Flash Flood Intensity",
    authors: ["Li, Z.", "Gao, S.", "Chen, M.", "Zhang, J.", "Gourley, J.J.", "Wen, Y.", "Yang, T.", "Hong, Y."],
    journal: "Geophysical Research Letters",
    year: 2023,
    doi: "10.1029/2023GL104992"
  },
  {
    id: "p24",
    title: "Cross-Examining Precipitation Products by Rain Gauge, Remote Sensing, and WRF Simulations over a South American Region across the Pacific Coast and Andes",
    authors: ["Chen, M.", "Huang, Y.", "Li, Z.", "Larico, A.J.", "Xue, M.", "Hong, Y.", "Hu, X.", "Novoa, H.M.", "Martin, E.R.", "McPherson, R.A.", "Zhang, J.", "Gao, S.", "Wen, Y.", "Perez, A.V.", "Morales, I.Y."],
    journal: "Atmosphere",
    pages: "1666",
    year: 2022,
    doi: "10.3390/ATMOS13101666"
  },
  {
    id: "p25",
    title: "Data Fusion of AIRS and CrIMSS Near Surface Air Temperature",
    authors: ["Kalmus, P.", "Nguyen, H.", "Roman, J.", "Wang, T.", "Yue, Q.", "Wen, Y.", "Hobbs, J.", "Braverman, A."],
    journal: "Earth and Space Science",
    year: 2022,
    doi: "10.1029/2022EA002282"
  },
  {
    id: "p26",
    title: "Can re-infiltration process be ignored for flood inundation mapping and prediction during extreme storms? A case study in Texas Gulf Coast region",
    authors: ["Li, Z.", "Chen, M.", "Gao, S.", "Wen, Y.", "Gourley, J.J.", "Yang, T.", "Kolar, R.L.", "Hong, Y."],
    journal: "Environmental Modelling and Software",
    pages: "105450",
    year: 2022,
    doi: "10.1016/J.ENVSOFT.2022.105450"
  },
  {
    id: "p27",
    title: "Evaluation of GPM IMERG and its Constellations in Extreme Events over the Conterminous United States",
    authors: ["Li, Z.", "Tang, G.", "Kirstetter, P.E.", "Gao, S.", "Li, J.-L.", "Wen, Y.", "Hong, Y."],
    journal: "Journal of Hydrology",
    pages: "127357",
    year: 2022,
    doi: "10.1016/J.JHYDROL.2021.127357"
  },
  {
    id: "p28",
    title: "CREST-iMAP v1.0: A fully coupled hydrologic-hydraulic modeling framework dedicated to flood inundation mapping and prediction",
    authors: ["Li, Z.", "Chen, M.", "Gao, S.", "Luo, X.", "Gourley, J.J.", "Kirstetter, P.E.", "Yang, T.", "Kolar, R.L.", "McGovern, A.", "Wen, Y.", "Rao, B.", "Yami, T.", "Hong, Y."],
    journal: "Environmental Modelling and Software",
    pages: "105051",
    year: 2021,
    doi: "10.1016/J.ENVSOFT.2021.105051"
  },
  {
    id: "p29",
    title: "Towards the Next Generation Operational Meteorological Radar",
    authors: ["Weber, M.", "Hondl, K.", "Yussouf, N.", "Jung, Y.", "Stratman, D.R.", "Putnam, B.", "Wang, X.", "Schuur, T.J.", "Cooley, K.", "Kuster, C.M.", "Istok, M.", "Wen, Y.", "Zhang, G.", "Palmer, R.D.", "Sun, J.", "Keeler, J.", "Ying, Z.", "Cho, J.", "Kurdzo, J.", "Mirkovic, D."],
    journal: "Bulletin of the American Meteorological Society",
    pages: "E1357-E1383",
    year: 2021,
    doi: "10.1175/BAMS-D-20-0067.1"
  },
  {
    id: "p30",
    title: "Effect of Precipitation Sampling Error on Flash Flood Monitoring and Prediction: Anticipating Operational Rapid-Update Polarimetric Weather Radars",
    authors: ["Wen, Y.", "Schuur, T.J.", "Vergara Arrieta, H.", "Kuster, C.M."],
    journal: "Journal of Hydrometeorology",
    year: 2021,
    doi: "10.1175/JHM-D-19-0286.1"
  },
  {
    id: "p31",
    title: "Two-decades of GPM IMERG early and final run products intercomparison: Similarity and difference in climatology, rates, and extremes",
    authors: ["Li, Z.", "Tang, G.", "Hong, Z.", "Chen, M.", "Gao, S.", "Kirstetter, P.E.", "Gourley, J.J.", "Wen, Y.", "Yami, T.", "Nabih, S.", "Hong, Y."],
    journal: "Journal of Hydrology",
    pages: "125975",
    year: 2021,
    doi: "10.1016/J.JHYDROL.2021.125975"
  },
  {
    id: "p32",
    title: "Advancing Satellite Precipitation Retrievals with Data Driven Approaches: Is black box model explainable?",
    authors: ["Li, Z.", "Wen, Y.", "Schreier, M.", "Behrangi, A.", "Hong, Y.", "Lambrigtsen, B."],
    journal: "Earth and Space Science",
    year: 2021,
    doi: "10.1029/2020EA001423"
  },
  {
    id: "p33",
    title: "Machine Learning with Feature Importance Analysis for Tornado Prediction from Environmental Sounding Data",
    authors: ["Coffer, B.", "Kubacki, M.", "Wen, Y.", "Zhang, T.", "Barajas, C.A.", "Gobbert, M.K."],
    journal: "PAMM",
    year: 2021,
    doi: "10.1002/PAMM.202000112"
  },
  {
    id: "p34",
    title: "Cross-Examination of Similarity, Difference and Deficiency of Gauge, Radar and Satellite Precipitation Measuring Uncertainties for Extreme Events Using Conventional Metrics and Multiplicative Triple Collocation",
    authors: ["Li, Z.", "Chen, M.", "Gao, S.", "Hong, Z.", "Tang, G.", "Wen, Y.", "Gourley, J.J.", "Hong, Y."],
    journal: "Remote Sensing",
    pages: "1258",
    year: 2020,
    doi: "10.3390/RS12081258"
  },
  {
    id: "p35",
    title: "How well were the early 2017 California Atmospheric River precipitation events captured by satellite products and ground‐based radars?",
    authors: ["Wen, Y.", "Behrangi, A.", "Chen, H.", "Lambrigtsen, B."],
    journal: "Quarterly Journal of the Royal Meteorological Society",
    pages: "344-359",
    year: 2018,
    doi: "10.1002/QJ.3253"
  },
  {
    id: "p36",
    title: "All-Weather Tropospheric 3-D Wind From Microwave Sounders",
    authors: ["Lambrigtsen, B.", "Dang, H.V.", "Turk, F.J.", "Hristova-Veleva, S.M.", "Su, H.", "Wen, Y."],
    journal: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing",
    pages: "1949-1956",
    year: 2018,
    doi: "10.1109/JSTARS.2018.2814540"
  },
  {
    id: "p37",
    title: "Radar-derived quantitative precipitation estimation in complex terrain over the eastern Tibetan Plateau",
    authors: ["Gou, Y.", "Ma, Y.", "Chen, H.", "Wen, Y."],
    journal: "Atmospheric Research",
    pages: "286-297",
    year: 2018,
    doi: "10.1016/J.ATMOSRES.2017.12.017"
  },
  {
    id: "p38",
    title: "Validating Enhanced Resolution of Microwave Sounder Imagery Through Fusion with Infrared Sensors Data",
    authors: ["Yanovsky, I.", "Wen, Y.", "Behrangi, A.", "Schreier, M.", "Lambrigtsen, B."],
    journal: "IEEE Specialist Meeting on Microwave Radiometry and Remote Sensing of the Environment (MicroRad)",
    pages: "1-5",
    year: 2018,
    doi: "10.1109/MICRORAD.2018.8430703"
  },
  {
    id: "p39",
    title: "On the Spatial and Temporal Sampling Errors of Remotely Sensed Precipitation Products",
    authors: ["Behrangi, A.", "Wen, Y."],
    journal: "Remote Sensing",
    pages: "1127",
    year: 2017,
    doi: "10.3390/RS9111127"
  },
  {
    id: "p40",
    title: "Cross-evaluation of reflectivity from the space-borne precipitation radar and multi-type ground-based weather radar network in China",
    authors: ["Zhong, L.", "Yang, R.", "Wen, Y.", "Chen, L.", "Gou, Y.", "Li, R.", "Zhou, Q.", "Hong, Y."],
    journal: "Atmospheric Research",
    pages: "200-210",
    year: 2017,
    doi: "10.1016/J.ATMOSRES.2017.06.016"
  },
  {
    id: "p41",
    title: "Enhanced Resolution of Microwave Sounder Imagery through Fusion with Infrared Sensor Data",
    authors: ["Yanovsky, I.", "Behrangi, A.", "Wen, Y.", "Schreier, M.", "Dang, V.", "Lambrigtsen, B."],
    journal: "Remote Sensing",
    pages: "1097",
    year: 2017,
    doi: "10.3390/RS9111097"
  },
  {
    id: "p42",
    title: "Can Near-Real-Time Satellite Precipitation Products Capture Rainstorms and Guide Flood Warning for the 2016 Summer in South China?",
    authors: ["Tang, G.", "Zeng, Z.", "Ma, M.", "Liu, R.", "Wen, Y.", "Hong, Y."],
    journal: "IEEE Geoscience and Remote Sensing Letters",
    pages: "1208-1212",
    year: 2017,
    doi: "10.1109/LGRS.2017.2702137"
  },
  {
    id: "p43",
    title: "Combined Space and Ground Radars for Improving Quantitative Precipitation Estimations in the Eastern Downstream Region of the Tibetan Plateau. Part I: Variability in the Vertical Structure of Precipitation in ChuanYu Analyzed from Long-Term Spaceborne Observations by TRMM PR",
    authors: ["Zhong, L.", "Yang, R.", "Chen, L.", "Wen, Y.", "Li, R.", "Tang, G.", "Hong, Y."],
    journal: "Journal of Applied Meteorology and Climatology",
    pages: "2259-2274",
    year: 2017,
    doi: "10.1175/JAMC-D-16-0382.1"
  },
  {
    id: "p44",
    title: "Fusion of microwave and infrared data for enhancing its spatial resolution",
    authors: ["Yanovsky, I.", "Behrangi, A.", "Schreier, M.", "Dang, V.", "Wen, Y.", "Lambrigtsen, B."],
    journal: "IGARSS - IEEE International Geoscience and Remote Sensing Symposium",
    pages: "2625-2628",
    year: 2017,
    doi: "10.1109/IGARSS.2017.8127533"
  },
  {
    id: "p45",
    title: "Evaluation of MRMS snowfall products over the western United States",
    authors: ["Wen, Y.", "Kirstetter, P.E.", "Gourley, J.J.", "Hong, Y.", "Behrangi, A.", "Flamig, Z."],
    journal: "Journal of Hydrometeorology",
    pages: "1707-1713",
    year: 2017,
    doi: "10.1175/JHM-D-16-0266.1"
  },
  {
    id: "p46",
    title: "Similarities and differences between three coexisting spaceborne radars in global rainfall and snowfall estimation",
    authors: ["Tang, G.", "Wen, Y.", "Gao, J.", "Long, D.", "Ma, Y.", "Wan, W.", "Hong, Y."],
    journal: "Water Resources Research",
    pages: "3835-3853",
    year: 2017,
    doi: "10.1002/2016WR019961"
  },
  {
    id: "p47",
    title: "Evaluation and Uncertainty Estimation of the Latest Radar and Satellite Snowfall Products Using SNOTEL Measurements over Mountainous Regions in Western United States",
    authors: ["Wen, Y.", "Behrangi, A.", "Lambrigtsen, B.", "Kirstetter, P.E."],
    journal: "Remote Sensing",
    pages: "904",
    year: 2016,
    doi: "10.3390/RS8110904"
  },
  {
    id: "p48",
    title: "Evaluation of a Method to Enhance Real-Time, Ground Radar–Based Rainfall Estimates Using Climatological Profiles of Reflectivity from Space",
    authors: ["Wen, Y.", "Kirstetter, P.E.", "Hong, Y.", "Gourley, J.J.", "Cao, Q.", "Zhang, J.", "Flamig, Z.", "Xue, X."],
    journal: "Journal of Hydrometeorology",
    pages: "761-775",
    year: 2016,
    doi: "10.1175/JHM-D-15-0062.1"
  },
  {
    id: "p49",
    title: "Systematical evaluation of VPR-Identification and Enhancement (VPR-IE) approach for different precipitation types",
    authors: ["Wen, Y.", "Hong, Y.", "Kirstetter, P.E.", "Cao, Q.", "Gourley, J.J.", "Zhang, J.", "Xue, X."],
    journal: "SPIE Asia Pacific Remote Sensing Conference",
    pages: "92590C",
    year: 2014,
    doi: "10.1117/12.2069334"
  },
  {
    id: "p50",
    title: "Enhancing Quantitative Precipitation Estimation Over the Continental United States Using a Ground-Space Multi-Sensor Integration Approach",
    authors: ["Cao, Q.", "Wen, Y.", "Hong, Y.", "Gourley, J.J.", "Kirstetter, P.E."],
    journal: "IEEE Geoscience and Remote Sensing Letters",
    pages: "1305-1309",
    year: 2014,
    doi: "10.1109/LGRS.2013.2295768"
  },
  {
    id: "p51",
    title: "Incorporating NASA Spaceborne Radar Data into NOAA National Mosaic QPE System for Improved Precipitation Measurement: A Physically Based VPR Identification and Enhancement Method",
    authors: ["Wen, Y.", "Cao, Q.", "Kirstetter, P.E.", "Hong, Y.", "Gourley, J.J.", "Zhang, J.", "Zhang, G.", "Yong, B."],
    journal: "Journal of Hydrometeorology",
    pages: "1293-1307",
    year: 2013,
    doi: "10.1175/JHM-D-12-0106.1"
  },
  {
    id: "p52",
    title: "First evaluation of the climatological calibration algorithm in the real‐time TMPA precipitation estimates over two basins at high and low latitudes",
    authors: ["Yong, B.", "Ren, L.", "Hong, Y.", "Gourley, J.J.", "Tian, Y.", "Huffman, G.J.", "Chen, X.", "Wang, W.", "Wen, Y."],
    journal: "Water Resources Research",
    pages: "2461-2472",
    year: 2013,
    doi: "10.1002/WRCR.20246"
  },
  {
    id: "p53",
    title: "Empirical conversion of the vertical profile of reflectivity from Ku‐band to S‐band frequency",
    authors: ["Cao, Q.", "Hong, Y.", "Qi, Y.", "Wen, Y.", "Zhang, J.", "Gourley, J.J.", "Liao, L."],
    journal: "Journal of Geophysical Research: Atmospheres",
    pages: "1814-1825",
    year: 2013,
    doi: "10.1002/JGRD.50138"
  },
  {
    id: "p54",
    title: "Statistical and Physical Analysis of the Vertical Structure of Precipitation in the Mountainous West Region of the United States Using 11+ Years of Spaceborne Observations from TRMM Precipitation Radar",
    authors: ["Cao, Q.", "Hong, Y.", "Gourley, J.J.", "Qi, Y.", "Zhang, J.", "Wen, Y.", "Kirstetter, P.E."],
    journal: "Journal of Applied Meteorology and Climatology",
    pages: "408-424",
    year: 2013,
    doi: "10.1175/JAMC-D-12-095.1"
  },
  {
    id: "p55",
    title: "Cross Validation of Spaceborne Radar and Ground Polarimetric Radar Aided by Polarimetric Echo Classification of Hydrometeor Types",
    authors: ["Wen, Y.", "Hong, Y.", "Zhang, G.", "Schuur, T.J.", "Gourley, J.J.", "Flamig, Z.", "Morris, K.R.", "Cao, Q."],
    journal: "Journal of Applied Meteorology and Climatology",
    pages: "1389-1402",
    year: 2011,
    doi: "10.1175/2011JAMC2622.1"
  },
  {
    id: "p56",
    title: "Incorporating NASA space-borne precipitation research products into National Mosaic QPE operational system for improved precipitation measurements",
    authors: ["Wen, Y.", "Hong, Y.", "Zhang, G.", "Chen, S.", "Zhang, J.", "Gourley, J.J."],
    journal: "IEEE Radar Conference (RadarCon)",
    pages: "995-999",
    year: 2011,
    doi: "10.1109/radar.2011.5960685"
  }
];
