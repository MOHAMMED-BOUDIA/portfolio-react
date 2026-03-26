import { twMerge } from 'tailwind-merge';

const Card = ({ children, className = '' }) => {
  return (
    <article
      className={twMerge(
        'group overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-xl shadow-slate-950/40 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50',
        className
      )}
    >
      {children}
    </article>
  );
};

export default Card;
