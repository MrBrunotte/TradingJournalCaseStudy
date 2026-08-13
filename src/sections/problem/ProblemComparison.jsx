export default function ProblemComparison({ left, right }) {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-2">
      <article className="border border-neutral-900 bg-neutral-950 p-6 sm:p-7">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500">
          {left.label}
        </p>

        <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
          {left.title}
        </h3>

        <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-400 sm:text-base">
          {left.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-neutral-700" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="border border-neutral-800 bg-neutral-950 p-6 sm:p-7">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
          {right.label}
        </p>

        <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
          {right.title}
        </h3>

        <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-300 sm:text-base">
          {right.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-yellow-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
