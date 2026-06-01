import FadeUp from '../animations/FadeUp';

export default function SectionHeading({ label, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-16 ${alignment}`}>
      <FadeUp>
        {label && (
          <span className="font-accent inline-block text-sm font-medium text-primary-600 tracking-wide uppercase mb-3">
            {label}
          </span>
        )}
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
          {title}
        </h2>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.2}>
          <p className={`mt-4 text-text-secondary max-w-2xl text-lg leading-relaxed ${align === 'center' ? 'mx-auto' : 'mr-auto'}`}>
            {subtitle}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
