export type ProjectCategory = 'Product' | 'Design'

export interface Project {
  /** URL-safe identifier used for the detail route (/project/:slug). */
  slug: string
  title: string
  category: ProjectCategory
  /** Short context line: org / course · timeframe. */
  context: string
  /** One-line summary shown on the project card. */
  description: string
  /** Longer overview shown on the detail page. */
  overview: string
  /** Detailed accomplishment bullets shown on the detail page. */
  highlights: string[]
  /** Tools / skills shown as chips on the detail page. */
  tools: string[]
  /** Path to the project image, served from /public. */
  image: string
}

export const profile = {
  name: 'Kshitija Kumbharkar',
  brand: 'kshitijakumbharkar.com',
  role: 'Product Manager & Product Design Engineer',
  intro1:
    'Hi, I’m Kshitija Kumbharkar, an M.S. Engineering Management candidate at USC Viterbi with a mechanical and product design engineering background. I turn complex engineering and stakeholder requirements into products people actually use.',
  intro2:
    'I’ve led 0→1 platform development at Porsche Engineering, wiring-harness and systems integration at Mercedes-Benz R&D, and shipped GenAI applications — working across hardware, software, and product strategy.',
  location: 'Los Angeles, CA',
  email: 'kumbhark@usc.edu',
  phone: '+1 (213) 245-5814',
  linkedin: 'https://www.linkedin.com/in/kshitija-kumbharkar',
  linkedinLabel: 'linkedin.com/in/kshitija-kumbharkar',
  resumeUrl: '/Kshitija_Kumbharkar_Resume.pdf',
}

export type NavLink =
  | { label: string; kind: 'home' }
  | { label: string; kind: 'scroll'; target: string }
  | { label: string; kind: 'route'; to: string }

export const navLinks: NavLink[] = [
  { label: 'Home', kind: 'home' },
  { label: 'About Me', kind: 'route', to: '/about' },
  { label: 'My Projects', kind: 'scroll', target: 'projects' },
  { label: 'Contact', kind: 'route', to: '/contact' },
]

export interface TimelineItem {
  role: string
  org: string
  meta: string
  period: string
}

export const experience: TimelineItem[] = [
  {
    role: 'Product Intern — Product Strategy & Platform Roadmap',
    org: 'Porsche Engineering Services (PEUS)',
    meta: 'Carson, CA',
    period: 'Jun 2025 – May 2026',
  },
  {
    role: 'Product Design Engineer — Systems Integration & PLM',
    org: 'Mercedes-Benz Research & Development India',
    meta: 'Pune, India',
    period: 'Sep 2022 – Jul 2024',
  },
  {
    role: 'Design Intern — Operations & Stakeholder Management',
    org: 'Dassault Systèmes',
    meta: 'Pune, India',
    period: 'Jan 2021 – May 2021',
  },
  {
    role: 'Supply Chain Intern — Process Automation & Workflow Design',
    org: 'Cummins',
    meta: 'Pune, India',
    period: 'Jun 2019 – Sep 2019',
  },
]

export const education: TimelineItem[] = [
  {
    role: 'M.S. Engineering Management',
    org: 'University of Southern California — USC Viterbi',
    meta: 'GPA 3.85',
    period: 'May 2026',
  },
  {
    role: 'B.Tech Mechanical Engineering',
    org: 'Vishwakarma Institute of Technology, Pune',
    meta: 'GPA 8.98/10',
    period: 'Jul 2022',
  },
]

export const projectCategories: ProjectCategory[] = ['Product', 'Design']

export const projects: Project[] = [
  // ---------- Product ----------
  {
    slug: 'houston-adas',
    title: 'Houston — ADAS Simulation Platform',
    category: 'Product',
    context: 'Porsche Engineering (PEUS) · Product Strategy & Roadmap · 2025–2026',
    description:
      'Led 0→1 development of an internal ADAS simulation platform — including its geospatial coverage module — scaling adoption from 10 to 50+ vehicles.',
    overview:
      'Houston is an internal ADAS (Advanced Driver-Assistance Systems) simulation platform I drove from concept to adoption as a Product Intern at Porsche Engineering. Alongside the core platform I built Houston_CC, its geospatial coverage module. I translated engineering and stakeholder requirements into a prioritized roadmap and shepherded a 12-month build.',
    highlights: [
      'Led 0→1 development, translating engineering and stakeholder requirements into a prioritized roadmap; scaled adoption from 10 to 50+ vehicles over a 12-month build.',
      'Built Houston_CC, a geospatial module tracking 50,000+ km of ADAS fleet coverage with night-driving and lane-change analytics.',
      'Cut coverage processing time from 4–5 hours to ~10 minutes and managed A2D2 coverage KPIs across two program phases.',
    ],
    tools: ['Product Roadmapping', 'Requirements', 'Geospatial Systems', 'Python', 'KPI Development', 'Jira', 'Confluence'],
    image: '/img/proj_houston.png',
  },
  {
    slug: 'daily-brief',
    title: 'The Daily Brief — Multi-Model GenAI News Summarization',
    category: 'Product',
    context: 'USC ISE 547 · Generative AI · Apr 2026 · Team of 2',
    description:
      'A 0→1 GenAI app that summarizes the day’s news across four LLMs, with a rigorous evaluation framework comparing model quality.',
    overview:
      'The Daily Brief is a generative-AI application that condenses the day’s news from many sources into concise, readable briefs. I co-led a two-person team to take the product from 0→1 — designing the pipeline, deploying it, and rigorously evaluating summary quality across multiple large language models.',
    highlights: [
      'Built and deployed a 0→1 GenAI app using four LLMs, Flask, and Hugging Face Spaces across 120 source articles.',
      'Designed an evaluation framework combining ROUGE-1, BERTScore, and human evaluation across five reviewers to compare model performance.',
      'Found GPT-3.5 led automated ROUGE-1 by ~8%, while BART scored ~12% higher in human evaluation — exposing a gap between automated and perceived quality.',
    ],
    tools: ['Python', 'Flask', 'LLMs / GenAI', 'Hugging Face Spaces', 'ROUGE-1', 'BERTScore'],
    image: '/img/proj_dailybrief.png',
  },
  {
    slug: 'calorie-capture',
    title: 'CalorieCapture — AI Fitness Tracking App',
    category: 'Product',
    context: 'Product Strategy · AI / Mobile · Concept',
    description:
      'A product concept for effortless fitness tracking: one-tap AI meal-photo calorie estimation, guided workout tutorials, and gamified habits.',
    overview:
      'CalorieCapture is a mobile fitness product concept I defined end-to-end — from customer insights to a phased roadmap. Its core idea is removing friction from tracking: snap a photo of a meal for an instant AI calorie estimate, follow guided gym-machine video tutorials, and build habits through gamification.',
    highlights: [
      'Defined the product vision, feature set, and success metrics (targets: 90% daily logging, 75% 3-month retention, 95% AI accuracy).',
      'Designed one-tap AI meal-photo calorie estimation and guided gym-machine tutorials as the hero features.',
      'Built a phased roadmap with acceptance criteria spanning MVP through gamified habit-building.',
    ],
    tools: ['Product Management', 'Product Strategy', 'Roadmapping', 'AI / Computer Vision', 'UX', 'KPIs'],
    image: '/img/proj_calorie.png',
  },
  {
    slug: 'usc-housing-app',
    title: 'USC Housing Mobile Application',
    category: 'Product',
    context: 'USC ISE 515 · Engineering Project Management Capstone · Spring 2025',
    description:
      'Authored the end-to-end plan for a multi-phase USC housing app rollout and secured faculty Board of Directors approval.',
    overview:
      'A project-management capstone in which I authored the end-to-end plan for a multi-phase USC housing mobile-app rollout — from charter through risk framework — and secured faculty Board of Directors approval.',
    highlights: [
      'Developed the full project plan: charter, WBS, milestones, dependencies, resource allocation, and budget.',
      'Built a risk-management framework using probability-impact analysis, change management, and scope controls.',
      'Secured faculty Board of Directors approval and structured execution around defined milestones and dependencies.',
    ],
    tools: ['Project Planning', 'WBS', 'Risk Analysis', 'Budgeting', 'Change Management'],
    image: '/img/proj_housing.png',
  },

  // ---------- Design ----------
  {
    slug: 'fsae-suspension',
    title: 'FSAE Race Car Suspension & Steering',
    category: 'Design',
    context: 'Dassault Systèmes Internship · 3DEXPERIENCE · Vehicle Dynamics',
    description:
      'Designed a complete double-wishbone suspension and rack-and-pinion steering system for a Formula Student race car on the 3DEXPERIENCE platform.',
    overview:
      'During my internship at Dassault Systèmes, I designed a full double-wishbone suspension and rack-and-pinion steering system for a Formula Student (FSAE) race car per 2022 rules, using the 3DEXPERIENCE platform. I iterated the geometry in Catia Dymola, selected shock absorbers, computed spring stiffness, and modeled the complete CAD assembly — work that also produced a published research paper.',
    highlights: [
      'Designed double-wishbone suspension + rack-and-pinion steering to FSAE 2022 rules, fully modeled in CATIA / 3DEXPERIENCE.',
      'Optimized geometry: 82 mm front / 145 mm rear roll centre, 200 lbs/in springs, 1.60 / 1.67 motion ratios, 62% Ackermann, 2.9 m turning radius.',
      'Validated hand calculations against Catia Dymola behavior models across design iterations.',
    ],
    tools: ['CATIA', '3DEXPERIENCE', 'Catia Dymola', 'Vehicle Dynamics', 'Suspension Design', 'Modelica'],
    image: '/img/proj_fsae.png',
  },
  {
    slug: 'ev-wiring-harness',
    title: 'EV Wiring Harness Design',
    category: 'Design',
    context: 'Mercedes-Benz R&D India · Systems Integration & PLM · 2022–2024',
    description:
      'Led wiring-harness design for an EV supplier program across the full product lifecycle, improving design-data accuracy by 20%.',
    overview:
      'As a Product Design Engineer at Mercedes-Benz R&D, I led wiring-harness design for an EV supplier program across the full product lifecycle, translating engineering requirements into release-ready designs.',
    highlights: [
      'Led wiring-harness design for an EV supplier program across the product lifecycle using UG-NX, PREEVISION, and EPDM.',
      'Improved UG-NX design-data accuracy by 20% by refining specifications with engineering and supply-chain teams.',
      'Supported PPAP risk assessments and ISO workflow development, contributing to 30% lower operating costs and ~2% S-Class cost savings.',
    ],
    tools: ['UG-NX', 'PREEVISION', 'EPDM', 'PLM', 'Wiring Harness Design', 'PPAP'],
    image: '/img/proj_harness.png',
  },
  {
    slug: 'kaplan-turbine',
    title: 'Kaplan Turbine Design & CFD',
    category: 'Design',
    context: 'Mechanical Engineering Project · SolidWorks + CFD',
    description:
      'Designed a low-head Kaplan hydro turbine (~1 MW target) with full CAD modeling, CFD flow simulation, and structural analysis.',
    overview:
      'A final-year mechanical engineering project designing a low-head Kaplan turbine for hydropower (5 m head, 25 m³/s, ~1 MW target). I sized the runner and components from first principles, modeled the casing, runner, and draft tube in SolidWorks, and ran CFD and static-structural analysis.',
    highlights: [
      'Designed a 4-blade runner (Ø2.34 m, hub Ø0.94 m) at 161.7 rpm, specific speed 710.',
      'Modeled casing, runner, and draft tube in SolidWorks and simulated flow with CFD.',
      'Computed axial force of 26,560 N (resultant 26,262 N) and completed static-structural analysis.',
    ],
    tools: ['SolidWorks', 'CFD', 'FEA / Structural', 'Turbomachinery', 'Hydraulic Machines'],
    image: '/img/proj_kaplan.png',
  },
  {
    slug: 'two-hand-safety',
    title: 'Two-Hand Safety System — Engine Assembly Line',
    category: 'Design',
    context: 'Cummins Internship · Manufacturing & Process Safety',
    description:
      'Implemented a two-hand safety control on the NHNT engine assembly line and designed automated line solutions with inventory controls.',
    overview:
      'As a process / supply-chain intern at Cummins, I implemented a two-hand safety mechanism on the NHNT engine assembly line — requiring both operator hands on separated buttons before the machine actuates, protecting operators from injury. I also designed automated assembly-line solutions and min-max inventory controls to improve line efficiency.',
    highlights: [
      'Implemented two-hand safety controls on the NHNT engine assembly line to protect operators during machine actuation.',
      'Designed automated assembly-line solutions and introduced min-max inventory controls, improving operational efficiency by 25%.',
      'Adjusted replenishment parameters across facilities, reducing stockouts/overstock by 20% and holding costs by 10%.',
    ],
    tools: ['Manufacturing Process', 'Assembly Automation', 'Poka-Yoke / Safety', 'Min-Max Inventory', 'Process Improvement'],
    image: '/img/proj_cummins.png',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
