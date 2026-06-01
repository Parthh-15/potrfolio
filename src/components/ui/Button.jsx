import { cn } from '../../lib/utils';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer text-center';

  const variants = {
    primary:
      'bg-primary-600 text-white border border-primary-600 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 active:scale-[0.98]',
    secondary:
      'bg-white text-slate-800 border border-slate-200 hover:border-primary-400 hover:bg-slate-50 active:scale-[0.98]',
    ghost:
      'text-slate-650 hover:text-primary-600 hover:bg-primary-50 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs sm:text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-sm sm:text-base',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
