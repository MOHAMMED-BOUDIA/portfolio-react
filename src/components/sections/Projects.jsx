import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { projects } from '../../data/projects';
import Button from '../ui/Button';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewport } from '../../utils/animations';

const Projects = () => {
  return (
    <section id='projects' className='section-padding'>
      <div className='container-shell'>
        <SectionTitle
          eyebrow='Projects'
          title='Featured Work'
          subtitle='Selected projects demonstrating end-to-end development, API integration, and scalable frontend architecture.'
        />
        <motion.div
          className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card className='flex h-full flex-col'>
              <div className='relative aspect-video overflow-hidden'>
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <span className='absolute left-3 top-3 rounded-full border border-white/20 bg-slate-950/85 px-3 py-1 text-xs font-semibold text-cyan-200'>
                  {project.category}
                </span>
              </div>

              <div className='flex flex-1 flex-col p-6'>
                <h3 className='text-xl font-bold text-white'>{project.title}</h3>
                <p className='mt-3 text-sm leading-relaxed text-slate-300 md:text-base'>{project.description}</p>
                <ul className='mt-3 list-disc space-y-1 pl-4 text-sm text-slate-400'>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className='rounded-full border border-slate-700 bg-slate-800/70 px-2.5 py-1 text-xs text-slate-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='mt-6 flex flex-wrap gap-2'>
                  <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                    <Button variant='secondary' className='px-4 py-2 text-sm' icon={<FaGithub size={16} />}>
                      GitHub
                    </Button>
                  </a>

                  <a href={project.live} target='_blank' rel='noopener noreferrer'>
                    <Button className='px-4 py-2 text-sm' icon={<ExternalLink size={16} />}>
                      Live 
                    </Button>
                  </a>
                </div>
              </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
