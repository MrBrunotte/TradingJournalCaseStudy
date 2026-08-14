const steps = [
  {
    title: "Trading Data",
    description: "CSV imports from external trading sources",
  },
  {
    title: "Import & Normalization",
    description: "Source detection, adapters and common trade model",
  },
  {
    title: "Repositories & Local Storage",
    description: "SQLite, repositories and storage providers",
  },
  {
    title: "Account Trades + Trading Decisions",
    description: "Financial and behavioral views of the same data",
  },
  {
    title: "Features & Analytics",
    description: "Dashboard, trades, analytics, playbooks and workflows",
  },
  {
    title: "Trade Reviews",
    description: "Decision-level evidence and behavioral context",
  },
  {
    title: "Session Reviews",
    description: "Session-level reflection and aggregated evidence",
  },
  {
    title: "Historical Evidence",
    description: "Patterns, prioritization and reusable review history",
  },
  {
    title: "Trading Coach",
    description: "Future focus based on reviewed history",
  },
];

export default function ArchitectureFlow() {
  return (
    <div className="mt-10">
      {/* Mobile */}
      <div className="lg:hidden">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <div key={step.title} className="relative flex gap-4">
              <div className="flex w-8 shrink-0 flex-col items-center">
                <div
                  className={
                    isLast
                      ? "flex h-8 w-8 items-center justify-center border border-yellow-500/50 bg-black text-[10px] font-black text-yellow-500"
                      : "flex h-8 w-8 items-center justify-center border border-neutral-700 bg-black text-[10px] font-black text-neutral-300"
                  }
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {!isLast && (
                  <div className="min-h-10 w-px flex-1 bg-neutral-700" />
                )}
              </div>

              <div className="pb-8 pt-1">
                <p
                  className={
                    isLast
                      ? "text-sm font-black text-yellow-500"
                      : "text-sm font-black text-white"
                  }
                >
                  {step.title}
                </p>

                <p className="mt-1 text-sm leading-6 text-neutral-300">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-5">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <article
              key={step.title}
              className={
                isLast
                  ? "border border-yellow-500/40 bg-neutral-950 p-6"
                  : "border border-neutral-800 bg-neutral-950 p-6"
              }
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-yellow-500">
                Layer {String(index + 1).padStart(2, "0")}
              </p>

              <h3
                className={
                  isLast
                    ? "mt-3 text-lg font-black text-yellow-500"
                    : "mt-3 text-lg font-black text-white"
                }
              >
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-300">
                {step.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
