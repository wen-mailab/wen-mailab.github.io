export interface Course {
  id: string;
  title: string;
  semester: string;
  about: string;
}

export const courses: Course[] = [
  {
    id: "c1",
    title: "Radar and Satellite Meteorology - MET4450/GEO6938",
    semester: "Spring 2026",
    about:
      "Teach the principles of radar and satellite meteorology and real-world spatial data processing with MATLAB.",
  },
  {
    id: "c2",
    title: "Selected Topics in Geography: AI Application in Geosciences - GEO4938",
    semester: "Fall 2026",
    about:
      "Teach methods for applying AI in geosciences using real-world datasets.",
  },
  {
    id: "c3",
    title: "Machine Learning in Meteorology - GEO4938/GEO6938",
    semester: "Fall 2026",
    about:
      "Teach the principles, techniques, and applications of machine learning for meteorology such as predictions, personalized recommendations and retrieval, non-linear features, and deep learning."
  },
];
