const reviewedDecisionTags = [
  "Grades",
  "Plan Compliance",
  "Mistakes",
  "Context",
];

const reflectionTags = [
  "Session Grade",
  "What Went Well",
  "Repeated Mistakes",
  "Next Focus",
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

      {/* Wider wrapper so the first card can actually grow */}
      <div className="mx-auto mt-10 w-full max-w-6xl">
        {/* Reviewed Decisions */}
        <div className="mx-auto w-full max-w-5xl border border-yellow-500/30 bg-neutral-950 p-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {content.reviewedDecisions.label}
            </p>

            <h3 className="mx-auto mt-3 max-w-4xl text-xl font-black text-white sm:text-2xl">
              {content.reviewedDecisions.title}
            </h3>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
              {content.reviewedDecisions.description}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {reviewedDecisionTags.map((tag) => (
              <span
                key={tag}
                className="border border-neutral-700 bg-black px-3 py-1.5 text-xs font-bold text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center py-3 text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* Suggested Session Draft */}
        <div className="mx-auto max-w-xl border border-yellow-500/30 bg-neutral-950 p-6 text-center">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.suggestedDraft.label}
          </p>

          <h3 className="mt-3 text-lg font-black text-white">
            {content.suggestedDraft.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            {content.suggestedDraft.description}
          </p>
        </div>

        <div className="flex justify-center py-3 text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* My Reflection */}
        <div className="mx-auto max-w-2xl border border-yellow-500/40 bg-neutral-950 p-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {content.reflection.label}
            </p>

            <h3 className="mt-3 text-xl font-black text-white">
              {content.reflection.title}
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-neutral-300">
              {content.reflection.description}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {reflectionTags.map((tag) => (
              <span
                key={tag}
                className="border border-neutral-700 bg-black px-3 py-1.5 text-xs font-bold text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center py-3 text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* Session Review Evidence */}
        <div className="mx-auto max-w-xl border border-yellow-500/30 bg-neutral-950 p-6 text-center">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.sessionEvidence.label}
          </p>

          <h3 className="mt-3 text-lg font-black text-white">
            {content.sessionEvidence.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            {content.sessionEvidence.description}
          </p>
        </div>

        <div className="flex justify-center py-3 text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* Coach */}
        <div className="mx-auto max-w-xl border border-yellow-500/40 bg-neutral-950 p-6 text-center">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.coach.label}
          </p>

          <h3 className="mt-3 text-lg font-black text-white">
            {content.coach.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            {content.coach.description}
          </p>
        </div>
      </div>
    </div>
  );
}
