const steps = [
  "Reviewed Decisions",
  "Suggested Session Draft",
  "My Reflection",
  "Session Review Evidence",
  "Coach",
];

export default function SessionReviewFlow({ content }) {
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
      <div className="mt-7 lg:hidden">
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
                  <div className="min-h-8 w-px flex-1 bg-neutral-700" />
                )}
              </div>

              <div className="pb-7 pt-1">
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

      {/* Desktop */}
      <div className="mt-8 hidden lg:flex lg:items-center lg:gap-3">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <div key={step} className="contents">
              <div
                className={
                  isLast
                    ? "flex min-h-16 flex-1 items-center justify-center border border-yellow-500/40 bg-neutral-950 px-4 text-center"
                    : "flex min-h-16 flex-1 items-center justify-center border border-neutral-800 bg-neutral-950 px-4 text-center"
                }
              >
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

              {!isLast && (
                <div className="shrink-0 text-xl font-bold text-yellow-500">
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
