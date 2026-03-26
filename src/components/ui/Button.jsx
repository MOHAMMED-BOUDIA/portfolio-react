import { twMerge } from 'tailwind-merge';

const Button = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  icon,
  type = 'button',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60';
  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-900/30 hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500',
    secondary:
      'border border-slate-700 bg-slate-900 text-slate-100 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800',
    outline:
      'border border-cyan-500/70 bg-transparent text-cyan-200 hover:-translate-y-0.5 hover:bg-cyan-500/10 hover:text-cyan-100',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(baseStyles, variants[variant], className)}
    >
      {icon ? <span aria-hidden='true'>{icon}</span> : null}
      {children}
    </button>
  );
};

export default Button;
