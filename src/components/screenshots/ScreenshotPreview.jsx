export default function ScreenshotPreview({
  src,
  alt,
  title,
  onClick,
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group block w-full text-left ${className}`}
      aria-label={`Open screenshot: ${title || alt}`}
    >
      <div className="relative overflow-hidden border border-neutral-800 bg-neutral-950">
        <img src={src} alt={alt} className="block h-auto w-full" />

        <div className="pointer-events-none absolute inset-0 border border-transparent transition group-hover:border-yellow-500/40" />

        <div className="pointer-events-none absolute right-3 top-3 border border-neutral-700 bg-black/80 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-neutral-300 opacity-0 transition group-hover:opacity-100">
          Expand
        </div>
      </div>
    </button>
  );
}
