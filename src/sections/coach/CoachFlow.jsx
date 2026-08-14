export default function CoachFlow({ content }) {
  return (
    <div className="mt-10 border-t border-neutral-800 pt-8">
      <div className="max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
          {content.label}
        </p>

        <p className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
          {content.description}
        </p>
      </div>

      {/* Desktop */}
      <div className="mt-8 hidden items-stretch gap-3 lg:flex">
        {content.steps.map((step, index) => (
          <div key={step.title} className="contents">
            <article
              className={[
                "flex min-w-0 flex-1 flex-col justify-center border bg-neutral-950 px-4 py-5 text-center",
                index === content.steps.length - 1
                  ? "border-yellow-500/60"
                  : "border-neutral-800",
              ].join(" ")}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-yellow-500">
                {step.label}
              </p>

              <p
                className={[
                  "mt-2 text-sm font-black",
                  index === content.steps.length - 1
                    ? "text-yellow-500"
                    : "text-white",
                ].join(" ")}
              >
                {step.title}
              </p>
            </article>

            {index < content.steps.length - 1 && (
              <div className="flex shrink-0 items-center justify-center px-1 text-lg font-bold text-yellow-500">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="mt-8 space-y-0 lg:hidden">
        {content.steps.map((step, index) => (
          <div key={step.title}>
            <article
              className={[
                "border bg-neutral-950 p-5 text-center",
                index === content.steps.length - 1
                  ? "border-yellow-500/60"
                  : "border-neutral-800",
              ].join(" ")}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-yellow-500">
                {step.label}
              </p>

              <p
                className={[
                  "mt-2 text-sm font-black",
                  index === content.steps.length - 1
                    ? "text-yellow-500"
                    : "text-white",
                ].join(" ")}
              >
                {step.title}
              </p>
            </article>

            {index < content.steps.length - 1 && (
              <div className="py-2 text-center text-xl font-bold text-yellow-500">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
