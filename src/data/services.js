import { 
  Code2, 
  Terminal, 
  Zap, 
  Layers, 
  Smartphone, 
  Globe, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: 'Layout',
    iconName: 'Code2',
    description:
      'Crafting responsive, accessible, and high-performance interfaces with modern React architecture and design systems.',
    features: ['React & Next.js', 'Tailwind CSS', 'Framer Motion'],
    accent: 'cyan'
  },
  {
    id: 2,
    title: 'Backend Development',
    icon: 'Server',
    iconName: 'Terminal',
    description:
      'Designing maintainable server-side applications with secure authentication, business logic, and robust data handling.',
    features: ['Node.js & Express', 'PostgreSQL / MongoDB', 'Clean Architecture'],
    accent: 'indigo'
  },
  {
    id: 3,
    title: 'Full Stack Solutions',
    icon: 'Cpu',
    iconName: 'Cpu',
    description:
      'Delivering complete web products from idea to deployment with consistent quality across frontend and backend layers.',
    features: ['End-to-end Development', 'Cloud Deployment', 'System Design'],
    accent: 'blue'
  },
  {
    id: 4,
    title: 'API Engineering',
    icon: 'Zap',
    iconName: 'Zap',
    description:
      'Designing and integrating high-performance REST & GraphQL APIs with resilient request handling and clear service boundaries.',
    features: ['Scalable Design', 'Security First', 'Documentation'],
    accent: 'amber'
  },
  {
    id: 5,
    title: 'UI/UX Implementation',
    icon: 'Smartphone',
    iconName: 'Smartphone',
    description:
      'Converting pixel-perfect designs into fluid, device-optimized interfaces that provide consistent usability across all screens.',
    features: ['Mobile-First', 'Interactive Prototypes', 'User-Centric'],
    accent: 'emerald'
  }
];
