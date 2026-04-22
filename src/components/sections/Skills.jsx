import SectionTitle from '../ui/SectionTitle';
import { skills, skillStats } from '../../data/skills';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewport } from '../../utils/animations';
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

const iconMap = {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaJs,
  FaGitAlt,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiPostman,
  SiVite,
  SiTestinglibrary,
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
};

const SkillCard = ({ skill }) => {
  const Icon = iconMap[skill.icon] || Code2;
  
  return (
    <motion.div
      variants={fadeInUp}
      className='group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/60 shadow-lg'
    >
      <div className='flex items-start justify-between mb-4'>
        <div className={`rounded-xl bg-slate-950/50 p-2.5 ${skill.color} border border-white/5 shadow-inner`}>
          <Icon size={20} />
        </div>
        <span className='rounded-full bg-slate-950/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-white/5'>
          {skill.level}
        </span>
      </div>
      
      <h4 className='mb-2 text-base font-bold text-white group-hover:text-cyan-400 transition-colors'>
        {skill.name}
      </h4>
      <p className='text-xs leading-relaxed text-slate-400'>
        {skill.desc}
      </p>

      {/* Subtle background glow on hover */}
      <div className='absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 opacity-0 blur-2xl transition-all duration-500 group-hover:from-cyan-500/5 group-hover:via-transparent group-hover:to-indigo-500/5 group-hover:opacity-100' />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id='skills' className='section-padding relative overflow-hidden'>
      {/* Decorative environment blur */}
      <div className='absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]' />

      <div className='container-shell'>
        <SectionTitle
          eyebrow='Technical Stack'
          title='Technical Skills'
          subtitle='A detailed overview of my core competencies, professional tools, and specialized technical expertise.'
        />

        <div className='space-y-16'>
          {skills.map((category) => (
            <div key={category.category}>
              <div className='mb-8 flex items-center gap-4'>
                <div className={`h-8 w-1 rounded-full ${
                  category.accent === 'cyan' ? 'bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]' :
                  category.accent === 'indigo' ? 'bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.5)]' :
                  'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                }`} />
                <h3 className='text-2xl font-black tracking-tight text-white uppercase'>
                  {category.category}
                </h3>
              </div>

              <motion.div
                className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'
                variants={staggerContainer}
                initial='hidden'
                whileInView='visible'
                viewport={viewport}
              >
                {category.items.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Skills;
