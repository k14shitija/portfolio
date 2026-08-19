export interface Project {
  title: string
  description: string
  /** Path to the project image, served from /public. */
  image: string
  link: string
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

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'My Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const projects: Project[] = [
  {
    title: 'The Daily Brief — Multi-Model GenAI News Summarization',
    description:
      'Led a 2-person team to build and deploy a 0→1 GenAI app using four LLMs, Flask, and Hugging Face Spaces, with a ROUGE / BERTScore + human evaluation framework across 120 articles.',
    image: '/img/proj_dailybrief.png',
    link: '#',
  },
  {
    title: 'Houston — ADAS Simulation Platform',
    description:
      'Drove 0→1 development of an internal ADAS simulation platform at Porsche Engineering, turning stakeholder requirements into a prioritized roadmap and scaling adoption from 10 to 50+ vehicles.',
    image: '/img/proj_houston.png',
    link: '#',
  },
  {
    title: 'Houston_CC — Geospatial ADAS Fleet Coverage',
    description:
      'Built a geospatial module tracking 50,000+ km of ADAS fleet coverage with night-driving and lane-change analytics, cutting processing time from 4–5 hours to ~10 minutes.',
    image: '/img/proj_houstoncc.png',
    link: '#',
  },
  {
    title: 'EV Wiring Harness Design',
    description:
      'Led wiring-harness design for an EV supplier program across the product lifecycle in UG-NX, PREEVISION, and EPDM at Mercedes-Benz R&D, improving design-data accuracy by 20%.',
    image: '/img/proj_harness.png',
    link: '#',
  },
  {
    title: 'USC Housing Mobile Application',
    description:
      'Developed the end-to-end project plan — charter, WBS, milestones, budget, and a probability-impact risk framework — and secured faculty board approval for a multi-phase rollout.',
    image: '/img/proj_housing.png',
    link: '#',
  },
  {
    title: 'Bluetooth Speaker — AI-Powered Bathroom Audio',
    description:
      'Designed a compact consumer-electronics enclosure around an audio PCB in SolidWorks with tolerance stack-up analysis, conceptualizing a hands-free, voice-controlled speaker.',
    image: '/img/proj_speaker.png',
    link: '#',
  },
]
