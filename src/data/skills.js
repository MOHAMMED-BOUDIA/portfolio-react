import { 
  Code2, 
  Terminal, 
  Database, 
  Wrench, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Cloud, 
  Cpu, 
  Layers, 
  Smartphone, 
  Layout 
} from 'lucide-react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGitAlt 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiExpress, 
  SiTypescript, 
  SiPostman, 
  SiVite, 
  SiTestinglibrary 
} from 'react-icons/si';

export const skills = [
  {
    category: 'Frontend Development',
    accent: 'cyan',
    items: [
      {
        name: 'React.js',
        icon: 'FaReact',
        level: 'Expert',
        desc: 'Advanced hooks, context API, and high-performance reusable components.',
        color: 'text-cyan-400'
      },
      {
        name: 'JavaScript',
        icon: 'FaJs',
        level: 'Expert',
        desc: 'Modern ES6+ syntax, asynchronous programming, and core engine logic.',
        color: 'text-yellow-400'
      },
      {
        name: 'Tailwind CSS',
        icon: 'SiTailwindcss',
        level: 'Expert',
        desc: 'Utility-first styling, complex responsive layouts, and design systems.',
        color: 'text-sky-400'
      },
      {
        name: 'TypeScript',
        icon: 'SiTypescript',
        level: 'Advanced',
        desc: 'Type-safe architecture, interfaces, and scalable codebase management.',
        color: 'text-blue-500'
      },
      {
        name: 'HTML5 / CSS3',
        icon: 'FaHtml5',
        level: 'Expert',
        desc: 'Semantic marking, advanced animations, and cross-browser layouts.',
        color: 'text-orange-500'
      },
      {
        name: 'Responsive Design',
        icon: 'Smartphone',
        level: 'Expert',
        desc: 'Mobile-first strategies and fluid UI across all device resolutions.',
        color: 'text-emerald-400'
      }
    ]
  },
  {
    category: 'Backend Development',
    accent: 'indigo',
    items: [
      {
        name: 'Node.js',
        icon: 'FaNodeJs',
        level: 'Expert',
        desc: 'Event-driven architecture and high-concurrency server-side logic.',
        color: 'text-emerald-500'
      },
      {
        name: 'Express.js',
        icon: 'SiExpress',
        level: 'Expert',
        desc: 'Robust routing, middleware design, and scalable RESTful services.',
        color: 'text-slate-100'
      },
      {
        name: 'Databases',
        icon: 'Database',
        level: 'Advanced',
        desc: 'NoSQL (MongoDB) and Relational (MySQL) modeling and optimization.',
        color: 'text-blue-400'
      },
      {
        name: 'Python',
        icon: 'FaPython',
        level: 'Intermediate',
        desc: 'Data processing, automation scripts, and backend integration.',
        color: 'text-blue-500'
      },
      {
        name: 'Java',
        icon: 'FaJava',
        level: 'Intermediate',
        desc: 'OOP principles, robust enterprise logic, and system architecture.',
        color: 'text-red-500'
      },
      {
        name: 'REST APIs',
        icon: 'Zap',
        level: 'Expert',
        desc: 'Secure endpoint design, authentication, and efficient data flow.',
        color: 'text-amber-400'
      }
    ]
  },
  {
    category: 'Tools & Utilities',
    accent: 'emerald',
    items: [
      {
        name: 'Git & GitHub',
        icon: 'FaGitAlt',
        level: 'Expert',
        desc: 'Version control, collaborative workflows, and CI/CD integration.',
        color: 'text-orange-600'
      },
      {
        name: 'Dev Tools',
        icon: 'Wrench',
        level: 'Expert',
        desc: 'Vite, Webpack, and browser debugging for peak productivity.',
        color: 'text-cyan-500'
      },
      {
        name: 'Testing & QA',
        icon: 'SiTestinglibrary',
        level: 'Advanced',
        desc: 'Unit testing, integration tests, and ensuring code reliability.',
        color: 'text-rose-500'
      },
      {
        name: 'Postman',
        icon: 'SiPostman',
        level: 'Advanced',
        desc: 'Comprehensive API testing, documentation, and mock servers.',
        color: 'text-orange-400'
      },
      {
        name: 'Cloud & Deploy',
        icon: 'Cloud',
        level: 'Advanced',
        desc: 'Vercel, Netlify, and basic AWS infrastructure management.',
        color: 'text-sky-500'
      },
      {
        name: 'System Architecture',
        icon: 'Layers',
        level: 'Advanced',
        desc: 'Designing modular systems for scalability and maintainability.',
        color: 'text-purple-400'
      }
    ]
  }
];

export const skillStats = [
  { label: 'Technologies Mastered', value: '15+', color: 'text-cyan-400' },
  { label: 'Years of Experience', value: '5+', color: 'text-indigo-400' },
  { label: 'Projects Completed', value: '50+', color: 'text-emerald-400' },
  { label: 'Client Satisfaction', value: '100%', color: 'text-amber-400' }
];
