export default function BrandLogo({ compact = false, className = "" }) {
  const iconSize = compact ? "h-8 w-8" : "h-10 w-10";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${iconSize} shrink-0 text-red-500`}
        aria-hidden="true"
      >
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>

      <span className="hidden text-sm font-black uppercase tracking-[0.16em] text-white sm:block">
        Trading Journal
      </span>
    </div>
  );
}
