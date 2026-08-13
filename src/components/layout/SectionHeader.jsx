export default function SectionHeader({
  label,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {label && (
        <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-500">
          {label}
        </p>
      )}

      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-neutral-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
