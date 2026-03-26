const SectionTitle = ({ title, subtitle, centered = true, eyebrow }) => {
  return (
    <header className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {eyebrow ? (
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80'>
          {eyebrow}
        </p>
      ) : null}
      <h2 className='inline-block text-3xl font-extrabold tracking-tight text-white md:text-4xl'>
        {title}
        <span className='mt-3 block h-1 w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500' />
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed text-slate-300 md:text-lg ${
            centered ? 'mx-auto max-w-2xl' : 'max-w-3xl'
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
};

export default SectionTitle;
