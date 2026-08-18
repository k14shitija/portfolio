export interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  accent: string
}

export interface Skill {
  category: string
  items: string[]
}

export const profile = {
  name: 'Kashish Shitija',
  role: 'Software Engineer',
  tagline: 'I build thoughtful, performant web experiences.',
  intro:
    'Full-stack engineer focused on clean architecture, delightful interfaces, and shipping products that people love to use. I enjoy turning ambiguous ideas into polished, reliable software.',
  location: 'Remote · Worldwide',
  email: 'hello@example.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/k14shitija' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { label: 'Email', url: 'mailto:hello@example.com' },
  ],
}

export const stats = [
  { value: '5+', label: 'Years building' },
  { value: '30+', label: 'Projects shipped' },
  { value: '12', label: 'Open-source repos' },
]

export const projects: Project[] = [
  {
    title: 'Aurora Analytics',
    description:
      'A real-time analytics dashboard with streaming charts, custom query builder, and role-based access control.',
    tags: ['React', 'TypeScript', 'WebSockets', 'D3'],
    link: '#',
    accent: '#6366f1',
  },
  {
    title: 'Nimbus Deploy',
    description:
      'A zero-config deployment platform that previews every pull request in an isolated environment.',
    tags: ['Node.js', 'Docker', 'AWS', 'CI/CD'],
    link: '#',
    accent: '#ec4899',
  },
  {
    title: 'Pocket Ledger',
    description:
      'An offline-first personal finance app with end-to-end encryption and effortless budgeting insights.',
    tags: ['PWA', 'IndexedDB', 'Crypto', 'Charts'],
    link: '#',
    accent: '#14b8a6',
  },
  {
    title: 'Trailhead CMS',
    description:
      'A headless content platform with a block-based editor, versioning, and a typed content API.',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
    link: '#',
    accent: '#f59e0b',
  },
]

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Accessibility'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST & GraphQL'],
  },
  {
    category: 'Platform',
    items: ['Docker', 'AWS', 'CI/CD', 'Observability', 'Testing'],
  },
]
