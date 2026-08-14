export default function AnalyticsMetrics({ content }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {content.groups.map((group) => (
        <article
          key={group.label}
          className="flex h-full flex-col border border-yellow-500/30 bg-neutral-950 p-5"
        >
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {group.label}
          </p>

          <h3 className="mt-3 text-lg font-black leading-6 text-white">
            {group.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            {group.description}
          </p>

          <div className="mt-6 border-t border-neutral-800 pt-4">
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border border-neutral-700 bg-black px-3 py-1.5 text-xs font-bold text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
