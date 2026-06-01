export default function Badge({ children, color, className = '' }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-200 ${className}`}
      style={{
        backgroundColor: color ? `${color}10` : undefined,
        color: color || undefined,
        borderColor: color ? `${color}25` : undefined,
      }}
    >
      {children}
    </span>
  );
}
