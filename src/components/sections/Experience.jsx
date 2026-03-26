import SectionTitle from '../ui/SectionTitle';
import { education } from '../../data/education';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer, viewport } from '../../utils/animations';

const Experience = () => {
  return (
    <section id='education' className='relative overflow-hidden py-24 md:py-32'>
      {/* Subtle Background Elements */}
      <div className='absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]' />

      <div className='container-shell relative z-10'>
        <SectionTitle
          eyebrow='Journey'
          title='Academic Foundation'
          subtitle='A detailed look at my education and professional training as a full-stack developer.'
        />

        <div className='mx-auto mt-20 max-w-3xl'>
          {/* Education Content */}
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='space-y-12'
          >
            <div className='mb-12 flex items-center gap-4'>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400'>
                <GraduationCap size={24} />
              </div>
              <h2 className='text-3xl font-black tracking-tight text-white'>Education</h2>
            </div>

            <div className='space-y-10 border-l-2 border-slate-800/50 ml-6 pl-10'>
              {education.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className='group relative flex flex-col items-start gap-1 pb-4'
                >
                  {/* Timeline Dot */}
                  <div className='absolute -left-[49px] top-2 h-4 w-4 rounded-full border-2 border-slate-900 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-transform group-hover:scale-125' />
                  
                  <div className='flex w-full flex-col'>
                    <h3 className='text-2xl font-bold text-white transition-colors group-hover:text-cyan-400'>
                      {item.degree}
                    </h3>
                  </div>

                  <div className='mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold tracking-wide'>
                    <span className='flex items-center gap-2 text-indigo-300'>
                      <MapPin size={16} className='opacity-70' />
                      {item.institution}
                    </span>
                    <span className='flex items-center gap-2 text-slate-400'>
                      <Calendar size={16} className='opacity-70' />
                      {item.date}
                    </span>
                  </div>

                  {item.description && (
                    <p className='mt-4 text-lg leading-relaxed text-slate-400'>
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
