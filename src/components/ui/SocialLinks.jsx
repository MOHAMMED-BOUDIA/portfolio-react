import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks';
import { twMerge } from 'tailwind-merge';

const SocialLinks = ({ className = '' }) => {
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <FaGithub className='h-5 w-5' />;
      case 'linkedin':
        return <FaLinkedin className='h-5 w-5' />;
      case 'twitter':
        return <FaTwitter className='h-5 w-5' />;
      case 'facebook':
        return <FaFacebook className='h-5 w-5' />;
      case 'whatsapp':
        return <FaWhatsapp className='h-5 w-5' />;
      case 'email':
        return <FaEnvelope className='h-5 w-5' />;

      default: return null;
    }
  };

  return (
    <div className={twMerge('flex items-center gap-3', className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg border border-slate-800 bg-slate-900/80 p-2.5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
          aria-label={`Visit ${link.name}`}
        >
          {getIcon(link.name)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
