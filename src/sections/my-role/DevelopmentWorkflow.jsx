const steps = [
  {
    title: "Describe the problem",
    description:
      "Start from a real workflow problem and define what is not working, missing or unnecessarily difficult in the application.",
  },
  {
    title: "Define expected behavior",
    description:
      "Specify what the feature should do, how the workflow should behave and which edge cases or constraints need to be handled.",
  },
  {
    title: "Review implementation approach",
    description:
      "Use ChatGPT to explore an implementation, then evaluate whether the proposed structure fits the existing application and requirements.",
  },
  {
    title: "Apply and test changes",
    description:
      "Implement the generated changes and verify the result against the intended workflow using the actual application and real data.",
  },
  {
    title: "Identify unexpected behavior",
    description:
      "Compare the result with the expected behavior and identify incorrect assumptions, regressions, usability problems or missing cases.",
  },
  {
    title: "Trace the problem",
    description:
      "Follow the affected data and feature dependencies to determine where the incorrect behavior originates and what else may be affected.",
  },
  {
    title: "Refine requirements",
    description:
      "Clarify the requirement when testing reveals that the original specification was incomplete or that the system needs different behavior.",
  },
  {
    title: "Refactor when needed",
    description:
      "Reduce complexity when features grow too large by extracting responsibilities incrementally while preserving existing behavior.",
  },
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
            <div key={step.title} className="relative flex gap-4">
              <div className="flex w-8 shrink-0 flex-col items-center">
                <div
                  className={
                    isLast
                      ? "flex h-8 w-8 items-center justify-center border border-yellow-500/50 bg-black text-[10px] font-black text-yellow-500"
                      : "flex h-8 w-8 items-center justify-center border border-yellow-500/30 bg-black text-[10px] font-black text-yellow-500"
                  }
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {!isLast && (
                  <div className="min-h-7 w-px flex-1 bg-yellow-500/30" />
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
                  {step.title}
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-300">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tablet / Desktop */}
      <div className="mt-7 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="border border-yellow-500/30 bg-neutral-950 p-5"
          >
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              Step {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="mt-3 text-sm font-black leading-6 text-white">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-300">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
