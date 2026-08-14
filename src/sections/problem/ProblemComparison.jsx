export default function ProblemComparison({ left, right }) {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-2">
      <article className="flex h-full flex-col border border-yellow-500/30 bg-neutral-950 p-6 sm:p-7">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
          {left.label}
        </p>

        <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
          {left.title}
        </h3>

        {left.description && (
          <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {left.description}
          </p>
        )}

        <div className="mt-6 border-t border-neutral-800 pt-4">
          <ul className="space-y-3 text-sm leading-6 text-neutral-300 sm:text-base">
            {left.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-yellow-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article className="flex h-full flex-col border border-yellow-500/30 bg-neutral-950 p-6 sm:p-7">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
          {right.label}
        </p>

        <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
          {right.title}
        </h3>

        {right.description && (
          <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {right.description}
          </p>
        )}

        <div className="mt-6 border-t border-neutral-800 pt-4">
          <ul className="space-y-3 text-sm leading-6 text-neutral-300 sm:text-base">
            {right.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-yellow-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
