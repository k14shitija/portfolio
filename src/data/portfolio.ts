export interface Project {
  title: string
  /** Short label rendered on the placeholder thumbnail. */
  label: string
  /** Two-color gradient used for the placeholder thumbnail. */
  gradient: [string, string]
  link: string
}

export const profile = {
  name: 'Stephanie Tsang',
  brand: "Stephanie Tsang's Portfolio",
  role: 'Mechanical Engineer and Product Design Engineer',
  intro1:
    'Hi, I’m Stephanie Tsang, a fourth (final) year undergraduate Mechanical Engineering student at Carnegie Mellon University, passionate about designing and engineering solutions that merge functionality with innovation.',
  intro2:
    'My academic focus includes product design and mechanical systems, along with strong hands-on experience in CAD modeling, prototyping, and engineering analysis.',
  email: 'stsang@andrew.cmu.edu',
  phone: '+1 (718) 973-0112',
  resumeUrl: '#',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'My Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const projects: Project[] = [
  {
    title: 'Apple - Product Design Engineering Internship',
    label: 'Apple',
    gradient: ['#111111', '#333333'],
    link: '#',
  },
  {
    title: '2 Meter-Tall Working Model Crane',
    label: 'Model Crane',
    gradient: ['#c98a2b', '#8a5a12'],
    link: '#',
  },
  {
    title: 'Material-Efficient Acrylic Cup Holder',
    label: 'Cup Holder',
    gradient: ['#2e8b74', '#186a55'],
    link: '#',
  },
  {
    title: 'Transformable Structural Packaging for Collectibles',
    label: 'Packaging',
    gradient: ['#5b6bb5', '#33407e'],
    link: '#',
  },
  {
    title: 'Foldable Camping Chair',
    label: 'Camping Chair',
    gradient: ['#b5533f', '#7d3325'],
    link: '#',
  },
  {
    title: 'IoT Device for Predicting Elevator Breakdowns',
    label: 'IoT Device',
    gradient: ['#4a5568', '#2d3340'],
    link: '#',
  },
  {
    title: 'Transport Mobot for Delivering Mini Pallets to a 3-Floor Tower',
    label: 'Transport Mobot',
    gradient: ['#7a6cb0', '#4b3f80'],
    link: '#',
  },
]
