const steps = [
  "Describe the problem",
  "Define expected behavior",
  "Review implementation approach",
  "Apply and test changes",
  "Identify unexpected behavior",
  "Trace the problem",
  "Refine requirements",
  "Refactor when needed",
];

export default function DevelopmentWorkflow({ content }) {
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

      {/* Mobile */}
      <div className="mt-7 sm:hidden">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <div key={step} className="relative flex gap-4">
              <div className="flex w-8 shrink-0 flex-col items-center">
                <div
                  className={
                    isLast
                      ? "flex h-8 w-8 items-center justify-center border border-yellow-500/50 bg-black text-[10px] font-black text-yellow-500"
                      : "flex h-8 w-8 items-center justify-center border border-neutral-700 bg-black text-[10px] font-black text-neutral-400"
                  }
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {!isLast && (
                  <div className="min-h-7 w-px flex-1 bg-neutral-700" />
                )}
              </div>

              <div className="pb-6 pt-1">
                <p
                  className={
                    isLast
                      ? "text-sm font-black text-yellow-500"
                      : "text-sm font-black text-white"
                  }
                >
                  {step}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tablet / Desktop */}
      <div className="mt-7 hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article
            key={step}
            className="border border-neutral-800 bg-neutral-950 p-5"
          >
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              Step {String(index + 1).padStart(2, "0")}
            </p>

            <p className="mt-3 text-sm font-black leading-6 text-white">
              {step}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
