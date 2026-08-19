export interface Project {
  /** URL-safe identifier used for the detail route (/project/:slug). */
  slug: string
  title: string
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
  brand: 'Kshitija Kumbharkar',
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

export const projects: Project[] = [
  {
    slug: 'daily-brief',
    title: 'The Daily Brief — Multi-Model GenAI News Summarization',
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
    slug: 'houston-adas',
    title: 'Houston — ADAS Simulation Platform',
    context: 'Porsche Engineering (PEUS) · Product Strategy & Roadmap · 2025–2026',
    description:
      'Drove 0→1 development of an internal ADAS simulation platform, scaling adoption from 10 to 50+ vehicles over a 12-month build.',
    overview:
      'Houston is an internal ADAS (Advanced Driver-Assistance Systems) simulation platform I drove from concept to adoption as a Product Intern at Porsche Engineering. I translated engineering and stakeholder requirements into a prioritized product roadmap and shepherded a 12-month build.',
    highlights: [
      'Led 0→1 development, translating engineering and stakeholder requirements into a prioritized roadmap.',
      'Scaled adoption from 10 to 50+ vehicles over a 12-month build.',
      'Managed A2D2 coverage KPIs across two program phases and built automation to improve engineering workflows.',
    ],
    tools: ['Product Roadmapping', 'Requirements', 'KPI Development', 'Stakeholder Management', 'Jira', 'Confluence'],
    image: '/img/proj_houston.png',
  },
  {
    slug: 'houston-cc',
    title: 'Houston_CC — Geospatial ADAS Fleet Coverage',
    context: 'Porsche Engineering (PEUS) · Geospatial Analytics · 2025–2026',
    description:
      'A geospatial module tracking 50,000+ km of ADAS fleet coverage, cutting processing time from 4–5 hours to ~10 minutes.',
    overview:
      'Houston_CC is a geospatial module within the Houston platform that tracks and visualizes ADAS fleet coverage across tens of thousands of kilometers, turning raw drive data into actionable coverage insights.',
    highlights: [
      'Built and launched a geospatial module tracking 50,000+ km of ADAS fleet coverage.',
      'Developed analytics for night-driving and lane-change calculations.',
      'Reduced processing time from 4–5 hours to ~10 minutes.',
    ],
    tools: ['Geospatial Systems', 'Python', 'Data Analytics', 'Automation'],
    image: '/img/proj_houstoncc.png',
  },
  {
    slug: 'ev-wiring-harness',
    title: 'EV Wiring Harness Design',
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
    slug: 'usc-housing-app',
    title: 'USC Housing Mobile Application',
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
  {
    slug: 'bluetooth-speaker',
    title: 'Bluetooth Speaker — AI-Powered Bathroom Audio',
    context: 'B.Tech Capstone · Product Design · VIT Pune',
    description:
      'A compact, hands-free Bluetooth speaker for the bathroom, combining enclosure design with a voice-controlled, AI-driven experience.',
    overview:
      'My undergraduate capstone: a compact, hands-free Bluetooth speaker designed for the bathroom, combining consumer-electronics enclosure design with a voice-controlled, AI-driven music experience.',
    highlights: [
      'Designed a compact enclosure around an audio PCB with USB-A, micro-USB, and 3.5 mm interfaces, aligning ports to PCB datums via tolerance stack-up analysis.',
      'Developed retention bosses, mounting features, and enclosure interfaces in SolidWorks for prototype builds.',
      'Conceptualized a hands-free experience combining voice control and AI-driven music personalization.',
    ],
    tools: ['SolidWorks', 'Tolerance Stack-up', 'Enclosure Design', 'Prototyping'],
    image: '/img/proj_speaker.png',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
