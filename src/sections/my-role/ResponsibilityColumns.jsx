export default function ResponsibilityColumns({ content }) {
  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-2">
      <article className="border border-neutral-800 bg-neutral-950 p-6 sm:p-7">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
          {content.ownership.label}
        </p>

        <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
          {content.ownership.title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
          {content.ownership.description}
        </p>

        <div className="mt-6 space-y-3">
          {content.ownership.items.map((item) => (
            <div key={item} className="flex gap-3">
              <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-yellow-500" />

              <p className="text-sm leading-6 text-neutral-300">{item}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="border border-yellow-500/30 bg-neutral-950 p-6 sm:p-7">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
          {content.ai.label}
        </p>

        <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
          {content.ai.title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
          {content.ai.description}
        </p>

        <div className="mt-6 space-y-3">
          {content.ai.items.map((item) => (
            <div key={item} className="flex gap-3">
              <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-yellow-500" />

              <p className="text-sm leading-6 text-neutral-300">{item}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
