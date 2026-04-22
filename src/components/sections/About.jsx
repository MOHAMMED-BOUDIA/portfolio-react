import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../utils/constants';
import profileImage from '../../assets/images/profile.png';
import { fadeInUp, staggerContainer, viewport } from '../../utils/animations';

const About = () => {
  return (
    <section id='about' className='section-padding'>
      <div className='container-shell'>
        <SectionTitle
          eyebrow='About'
          title='Building End-to-End Products With Precision'
          subtitle='I combine frontend craft with backend engineering to deliver robust and business-focused web experiences.'
        />
        <motion.div
          className='grid grid-cols-1 items-center gap-12 md:grid-cols-[0.85fr_1fr] lg:gap-20'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
        >
          <motion.div className='relative mx-auto w-full max-w-[320px] md:mx-0 md:max-w-none' variants={fadeInUp}>
            <div className='aspect-[4/5] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl'>
              <img
                src={profileImage}
                alt='Mohammed Boudia working on full stack projects'
                className='h-full w-full object-cover object-top'
              />
            </div>
            <div className='pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] border border-cyan-500/10' />
          </motion.div>

          <motion.div className='space-y-5 text-slate-300' variants={fadeInUp}>
            <motion.h3 variants={fadeInUp} className='text-2xl font-bold text-white md:text-3xl'>
              I am {PERSONAL_INFO.name}, a {PERSONAL_INFO.title} based in {PERSONAL_INFO.location}.
            </motion.h3>
            <motion.p variants={fadeInUp} className='leading-relaxed'>
              My learning path started with frontend fundamentals and quickly expanded into API design,
              authentication flows, and database modeling. Today, I build full-stack applications with React,
              Node.js, Express, MongoDB, and MySQL, while staying pragmatic about architecture and product goals.
            </motion.p>
            <motion.p variants={fadeInUp} className='leading-relaxed'>
              I enjoy translating requirements into clear, maintainable systems. Whether collaborating with a team
              or shipping independently, I prioritize code quality, accessibility, and measurable impact.
            </motion.p>

            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
