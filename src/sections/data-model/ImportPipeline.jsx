export default function ImportPipeline({ content }) {
  return (
    <div className="mt-10 border-t border-neutral-800 pt-8">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
        {content.label}
      </p>

      <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
        {content.title}
      </h3>

      <p className="mt-4 max-w-4xl text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
        {content.description}
      </p>

      {/* Mobile */}
      <div className="mt-7 lg:hidden">
        <div className="grid gap-3 sm:grid-cols-2">
          {content.sources.map((source) => (
            <article
              key={source.name}
              className="border border-yellow-500/30 bg-black p-4"
            >
              <p className="text-xs font-black uppercase tracking-[0.14em] text-yellow-500">
                {source.label}
              </p>

              <p className="mt-2 text-sm font-black text-white">
                {source.name}
              </p>

              <p className="mt-2 text-xs leading-5 text-neutral-300">
                {source.description}
              </p>
            </article>
          ))}
        </div>

        <div className="my-5 text-center text-xl font-bold text-yellow-500">
          ↓
        </div>

        <div>
          {content.steps.map((step, index) => {
            const isLast = index === content.steps.length - 1;

            return (
              <div key={step.title} className="relative flex gap-4">
                <div className="flex w-8 shrink-0 flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center border border-yellow-500/40 bg-black text-[10px] font-black text-yellow-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {!isLast && (
                    <div className="min-h-7 w-px flex-1 bg-yellow-500/30" />
                  )}
                </div>

                <article className="mb-4 flex-1 border border-yellow-500/30 bg-black p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-yellow-500">
                    {content.stepLabel} {index + 1}
                  </p>

                  <h4 className="mt-2 text-sm font-black text-white">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-neutral-300">
                    {step.description}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop */}
      <div className="mt-7 hidden gap-5 lg:grid lg:grid-cols-[1fr_auto_1.35fr] lg:items-center">
        <div className="grid gap-3">
          {content.sources.map((source) => (
            <article
              key={source.name}
              className="border border-yellow-500/30 bg-black p-4"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-yellow-500">
                {source.label}
              </p>

              <p className="mt-2 text-sm font-black text-white">
                {source.name}
              </p>

              <p className="mt-2 text-xs leading-5 text-neutral-300">
                {source.description}
              </p>
            </article>
          ))}
        </div>

        <div className="text-2xl font-bold text-yellow-500">→</div>

        <div className="grid grid-cols-4 gap-3">
          {content.steps.map((step, index) => (
            <article
              key={step.title}
              className="border border-yellow-500/30 bg-black p-4"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-yellow-500">
                {content.stepLabel} {index + 1}
              </p>

              <h4 className="mt-2 text-sm font-black leading-5 text-white">
                {step.title}
              </h4>

              <p className="mt-2 text-xs leading-5 text-neutral-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 max-w-5xl border-l-2 border-yellow-500 pl-5 sm:pl-6">
        <p className="text-sm font-bold leading-6 text-white sm:text-base sm:leading-7">
          {content.closing}
        </p>
      </div>
    </div>
  );
}
