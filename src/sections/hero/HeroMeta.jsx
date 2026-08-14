export default function HeroMeta({ items = [] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-300 sm:mt-5 sm:text-[11px]">
      {items.map((item, index) => (
        <span key={item} className="flex items-center">
          {item}

          {index < items.length - 1 && (
            <span className="ml-3 text-neutral-700">·</span>
          )}
        </span>
      ))}
    </div>
  );
}
