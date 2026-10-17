/**
 * PORTFOLIO CONTENT — EDIT TEXT HERE
 *
 * Change the quoted text below without editing the page layout.
 * Keep property names, commas and brackets intact. Add/remove array items
 * to update stats, projects, skills or career milestones.
 * Contact links are built from email, phoneNumber and linkedinUrl.
 * The headline has three lines; the third keeps its existing highlight.
 */
export const portfolio = {
  // Browser title and link-preview descriptions
  seo: {
    title: "Aymen Danoun, Ph.D. — Structural & Computational Mechanics Engineer",
    description: "Aerospace FEA, composite structures and AI-accelerated simulation. Airbus programs, FE-LSTM, CSMA Thesis Award.",
    socialTitle: "Aymen Danoun, Ph.D. — Structural & Computational Mechanics",
    socialDescription: "Lighter structures, reliable analyses, faster simulations.",
  },
  // Navigation labels (section destinations stay in the layout)
  navigation: {
    brand: "A.DANOUN_",
    about: "01 About",
    work: "02 Work",
    skills: "03 Skills",
    contact: "04 Contact",
  },
  // Opening headlines and introduction
  hero: {
    eyebrow: "Ph.D. · Mechanical & Aerospace Engineer",
    headline: ["Lighter structures.", "Reliable analyses.", "Faster simulations."],
    introduction: "I'm Aymen Danoun — a structural & computational mechanics engineer combining aerospace FEA on Airbus programs with AI-accelerated physics modeling.",
    workButton: "View case studies",
    contactButton: "Get in touch",
    location: "📍 France · Open to relocation: UAE · Saudi Arabia · Qatar",
    imageDescription: "FEA stress contour of an aircraft fuselage section with door frame",
  },
  // About section and career milestones
  about: {
    label: "01 / ABOUT",
    headline: "Industrial rigor meets research depth.",
    industryParagraph: "For three years at Accenture, I delivered structural engineering for Airbus aircraft programs in Toulouse — FEA of fuselage sections, composite sizing, GFEM integration and the Torquebox door-frame concept for future A320 programs.",
    researchBeforeAward: "Before that, my Ph.D. at I2M Bordeaux developed hybrid AI–physics methods for nonlinear multiscale simulation. The resulting FE-LSTM approach earned the ",
    award: "CSMA PhD Thesis Award 2022",
    researchAfterAward: " (selected among 28 theses) and an ECCOMAS award nomination.",
    milestones: [
      ["2023–2026", "Aerospace Engineer — Accenture for Airbus"],
      ["2019–2022", "Ph.D. Mechanical Engineering — I2M Bordeaux"],
      ["2016–2019", "M.Eng. Applied Maths & Mechanics — ENSEIRB-MATMECA"],
      ["2023", "CSMA PhD Thesis Award laureate"],
    ],
  },
  // Project section headings; individual case studies follow below
  work: {
    label: "02 / CASE STUDIES",
    headline: "Problem → method → validated result.",
    problemLabel: "PROBLEM",
    methodLabel: "METHOD",
    resultLabel: "RESULT",
    confidentialityNote: "* Industrial work shown at a non-confidential level of detail.",
  },
  skillsLabel: "03 / TOOLKIT",
  // Contact details — used everywhere on the page
  contact: {
    label: "04 / CONTACT",
    headline: "Let's build lighter, smarter structures.",
    description: "Open to structural, FEA/CAE and computational mechanics roles in the Gulf region.",
    email: "aymendanoun.pro@gmail.com",
    phoneNumber: "+33769787130",
    phoneDisplay: "+33 7 69 78 71 30",
    linkedinUrl: "https://linkedin.com/in/aymen-danoun",
    linkedinLabel: "LinkedIn",
    copyright: "© 2026 Aymen Danoun, Ph.D.",
  },
};

// KEY STATS — v is the value; l is its description
export const stats = [
  { v: "10%", l: "mass reduction — A320 door-frame" },
  { v: "99%", l: "compute time cut with FE-LSTM" },
  { v: "3 yrs", l: "Airbus structural programs" },
  { v: "1/28", l: "CSMA PhD Thesis Award laureate" },
];

// CASE STUDIES — descriptions and software tags
export const projects = [
  {
    tag: "Aerospace structures · Airbus",
    title: "Torquebox door-frame concept for A320 fuselage",
    problem: "Design a new composite door-frame concept for the A320 nose fuselage and section S14A while meeting multiple composite sizing criteria.",
    method: "GFEM integration, model condensation and stress analysis in HyperMesh / MSC Nastran; iterative sizing and mass optimization.",
    result: "≈10% overall mass reduction on the door-frame, supporting future A320 programs.",
    tools: ["HyperMesh", "MSC Nastran", "GFEM", "Composites"],
  },
  {
    tag: "Computational mechanics · PhD",
    title: "FE-LSTM: deep learning inside nonlinear FEA",
    problem: "Nonlinear multiscale simulations of heterogeneous and architected materials require HPC and days of compute.",
    method: "Hybrid physics–AI approach: LSTM networks trained on micro-scale responses embedded as constitutive models in the FE framework.",
    result: "Up to 99% computational time reduction — HPC-class simulations running on a standard desktop.",
    tools: ["Python", "TensorFlow", "Keras", "Simcoon", "Fedoo"],
  },
  {
    tag: "CAE automation",
    title: "Parametric FEA workflow in Altair HyperWorks",
    problem: "Manual model generation for repeated fuselage analyses was slow and error-prone.",
    method: "Scripted, parametric pipeline that generates CAE models, applies loads and standardizes post-processing.",
    result: "Repeatable, faster aerospace analyses with consistent model quality across sections.",
    tools: ["HyperWorks", "Python", "Tcl"],
  },
  {
    tag: "Materials & process",
    title: "Anodization modeling for structural performance",
    problem: "Quantify how surface anodization affects aeronautical structural behaviour.",
    method: "Process modeling and FE investigation of the anodized layer's effect on structural response.",
    result: "Engineering insight on applying anodization to improve aeronautical structures.",
    tools: ["Abaqus", "ANSYS", "Python"],
  },
];

// SKILLS — h is the group heading; s is its list of skills
export const skills = [
  { h: "FEA / CAE", s: ["Altair HyperMesh", "HyperWorks", "MSC Nastran", "Abaqus", "ANSYS", "Gmsh", "Simcoon", "Fedoo", "Microgen"] },
  { h: "Structural analysis", s: ["Composite structures", "GFEM", "Model condensation", "Stress analysis", "Nonlinear mechanics", "Multiscale modeling", "Design optimization"] },
  { h: "AI for engineering", s: ["TensorFlow", "Keras", "scikit-learn", "Surrogate modeling", "Physics-based ML", "Simulation acceleration"] },
  { h: "Code & languages", s: ["Python", "C++", "MATLAB", "Pandas", "English", "French", "Arabic"] },
];

