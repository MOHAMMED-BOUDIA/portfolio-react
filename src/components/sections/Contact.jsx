import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewport } from '../../utils/animations';

const ContactCard = ({ icon: Icon, label, value, href, accent }) => {
  const accentClasses = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]',
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]',
  };

  const CardContent = () => (
    <motion.div 
      variants={fadeInUp}
      className='group relative flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/60 shadow-xl'
    >
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${accentClasses[accent]}`}>
        <Icon size={22} />
      </div>
      <div className='flex flex-col'>
        <span className='text-xs font-bold uppercase tracking-widest text-slate-500'>{label}</span>
        <span className='text-sm font-semibold text-white md:text-base'>{value}</span>
      </div>
    </motion.div>
  );

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel='noopener noreferrer' className='block'>
      <CardContent />
    </a>
  ) : (
    <CardContent />
  );
};

const Contact = () => {
  return (
    <section id='contact' className='section-padding relative overflow-hidden'>
      {/* Decorative environment blurs */}
      <div className='absolute right-[-5%] top-[10%] -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]' />
      <div className='absolute left-[-5%] bottom-[10%] -z-10 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[120px]' />

      <div className='container-shell'>
        <div className="mb-14">
          <SectionTitle
            eyebrow='Get in touch'
            title='Let’s Build Something Valuable'
            subtitle='I am open to freelance collaborations, full-time opportunities, and technical discussions. Let’s connect!'
          />
        </div>

        <motion.div
          className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
        >
          {/* Left Column: Info & Socials */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <ContactCard 
                icon={Mail} 
                label='Email' 
                value={PERSONAL_INFO.email} 
                href={`mailto:${PERSONAL_INFO.email}`}
                accent='cyan'
              />
              <ContactCard 
                icon={Phone} 
                label='Phone' 
                value={PERSONAL_INFO.phone} 
                href={`tel:${PERSONAL_INFO.phone}`}
                accent='indigo'
              />
              <ContactCard 
                icon={MapPin} 
                label='Location' 
                value={PERSONAL_INFO.location} 
                accent='emerald'
              />
            </div>

            <motion.div variants={fadeInUp} className='rounded-3xl border border-slate-800 bg-slate-900/20 p-8'>
              <div className='mb-6 flex items-center gap-3'>
                <div className='h-8 w-1 rounded-full bg-cyan-500' />
                <h4 className='text-lg font-bold text-white uppercase tracking-tight'>Connect with me</h4>
              </div>
              <p className='mb-6 text-sm leading-relaxed text-slate-400'>
                Follow my work on social platforms or reach out directly for professional inquiries.
              </p>
              <SocialLinks className='justify-start gap-4' />
            </motion.div>
          </div>

          {/* Right Column: Premium Form */}
          <motion.div 
            variants={fadeInUp} 
            className='relative rounded-[2.5rem] border border-slate-800 bg-slate-900/40 p-1 shadow-2xl backdrop-blur-sm'
          >
            <div className='rounded-[2.4rem] bg-slate-900/40 p-8 md:p-10'>
              {/* Form Header */}
              <div className='mb-8 flex items-center justify-between'>
                <div>
                  <h3 className='text-2xl font-bold text-white'>Send a Message</h3>
                  <p className='mt-1 text-sm text-slate-400'>I'll get back to you within 24 hours.</p>
                </div>
                <div className='hidden h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 sm:flex'>
                  <Sparkles size={24} />
                </div>
              </div>

              <form className='space-y-5'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <label className='ml-1 text-xs font-bold uppercase tracking-widest text-slate-500'>Name</label>
                    <input
                      type='text'
                      name='name'
                      required
                      className='w-full rounded-2xl border border-slate-800 bg-slate-950/50 px-5 py-4 text-sm text-white placeholder:text-slate-600 transition-all duration-300 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30'
                      placeholder='Your name'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label className='ml-1 text-xs font-bold uppercase tracking-widest text-slate-500'>Email</label>
                    <input
                      type='email'
                      name='email'
                      required
                      className='w-full rounded-2xl border border-slate-800 bg-slate-950/50 px-5 py-4 text-sm text-white placeholder:text-slate-600 transition-all duration-300 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30'
                      placeholder='hello@example.com'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='ml-1 text-xs font-bold uppercase tracking-widest text-slate-500'>Message</label>
                  <textarea
                    name='message'
                    required
                    rows={5}
                    className='w-full resize-none rounded-2xl border border-slate-800 bg-slate-950/50 px-5 py-4 text-sm text-white placeholder:text-slate-600 transition-all duration-300 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30'
                    placeholder='How can I help you today?'
                  />
                </div>

                <div className='pt-2'>
                  <Button 
                    type='submit' 
                    className='group relative w-full overflow-hidden !rounded-2xl !py-4 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]' 
                    icon={<Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                  >
                    Confirm & Send
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
