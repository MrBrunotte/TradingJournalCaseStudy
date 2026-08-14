export default function SectionHeader({
  label,
  title,
  description,
  centered = false,
  className = "",
}) {
  return (
    <div
      className={[
        "max-w-4xl",
        centered ? "mx-auto" : "",
        "mb-6 md:mb-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label && (
        <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-500">
          {label}
        </p>
      )}

      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-neutral-200 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
