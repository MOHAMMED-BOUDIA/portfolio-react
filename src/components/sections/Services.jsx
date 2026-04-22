import SectionTitle from '../ui/SectionTitle';
import { services } from '../../data/services';
import { 
  Code2, 
  Terminal, 
  Zap, 
  Layers, 
  Smartphone, 
  Globe, 
  Cpu, 
  ShieldCheck,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewport } from '../../utils/animations';

const iconMap = {
  Code2,
  Terminal,
  Zap,
  Layers,
  Smartphone,
  Globe,
  Cpu,
  ShieldCheck,
};

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.iconName] || Code2;
  
  const accentColors = {
    cyan: 'from-cyan-500/20 to-cyan-500/0 border-cyan-500/20 text-cyan-400 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10',
    indigo: 'from-indigo-500/20 to-indigo-500/0 border-indigo-500/20 text-indigo-400 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10',
    blue: 'from-blue-500/20 to-blue-500/0 border-blue-500/20 text-blue-400 group-hover:border-blue-500/50 group-hover:bg-blue-500/10',
    amber: 'from-amber-500/20 to-amber-500/0 border-amber-500/20 text-amber-400 group-hover:border-amber-500/50 group-hover:bg-amber-500/10',
    emerald: 'from-emerald-500/20 to-emerald-500/0 border-emerald-500/20 text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10'
  };

  const accentColor = accentColors[service.accent] || accentColors.cyan;

  return (
    <motion.div 
      variants={fadeInUp}
      className="group relative h-full flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-1 transition-all duration-500 hover:border-slate-700 hover:bg-slate-900/60 shadow-2xl"
    >
      {/* Dynamic Background Glow */}
      <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br transition-opacity duration-500 opacity-5 group-hover:opacity-10 ${accentColor}`} />
      
      <div className="flex flex-col h-full p-6 md:p-8">
        {/* Icon Container */}
        <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border bg-slate-950/50 transition-all duration-500 ${accentColor} shadow-inner`}>
          <Icon size={28} />
        </div>

        {/* Content */}
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
          {service.title}
        </h3>
        
        <p className="mb-6 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
          {service.description}
        </p>

        {/* Feature List */}
        <div className="mt-auto space-y-3">
          <div className="h-px w-full bg-gradient-to-r from-slate-800 to-transparent" />
          <ul className="grid grid-cols-1 gap-2 pt-2">
            {service.features?.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-500 group-hover:text-slate-300">
                <CheckCircle2 size={14} className={accentColor.split(' ')[2]} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Hover Action Indicator */}
        <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 cursor-pointer">
          <span className={accentColor.split(' ')[2]}>Learn more</span>
          <ArrowRight size={14} className={accentColor.split(' ')[2]} />
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id='services' className='section-padding relative overflow-hidden bg-slate-950/20'>
      {/* Decorative background elements */}
      <div className='absolute left-[-10%] top-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]' />
      <div className='absolute bottom-[-10%] right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]' />

      <div className='container-shell'>
        <div className="mb-16">
          <SectionTitle
            eyebrow='expertise'
            title='What I Deliver'
            subtitle='Engineered for efficiency, scalability, and impact. Specialized web solutions designed to solve complex technical challenges.'
          />
        </div>

        <motion.div
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
          
          {/* Join Call to Action Card (Optional/Visual Balance) */}
          <motion.div 
            variants={fadeInUp}
            className="group relative h-full flex flex-col justify-center items-center overflow-hidden rounded-3xl border-2 border-dashed border-slate-800 bg-transparent p-8 text-center transition-all duration-500 hover:border-cyan-500/30 sm:col-span-1 lg:col-span-1"
          >
            <div className="mb-4 rounded-full bg-slate-900 p-4 text-slate-500 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all duration-500">
              <Zap size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Have a unique project?</h3>
            <p className="mb-6 text-sm text-slate-400">Let's discuss how I can help bring your vision to life with custom engineering.</p>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-transform hover:scale-105 active:scale-95">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
