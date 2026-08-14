const reviewItemKeys = ["execution", "plan", "rules", "mistakes", "notes"];

export default function ReviewFlow({ content }) {
  return (
    <div className="mt-10 border-t border-neutral-800 pt-8">
      <div className="max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
          {content.sectionLabel}
        </p>

        <h3 className="mt-3 text-xl font-black leading-7 text-white sm:text-2xl sm:leading-8">
          {content.label}
        </h3>

        <p className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
          {content.description}
        </p>
      </div>

      {/* Flow */}
      <div className="mx-auto mt-10 max-w-4xl">
        {/* Reviewed Decision */}
        <div className="mx-auto max-w-md border border-yellow-500/30 bg-neutral-950 p-6 text-center">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.tradeReviewLabel}
          </p>

          <h4 className="mt-3 text-xl font-black text-white">
            {content.tradeReview}
          </h4>
        </div>

        {/* Connector */}
        <div className="flex justify-center py-3 text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* Structured Review Data */}
        <div className="border border-yellow-500/30 bg-neutral-950 p-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {content.structuredReviewData}
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
              {content.structuredReviewDescription}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
            {reviewItemKeys.map((key) => (
              <div
                key={key}
                className="border border-neutral-700 bg-black px-3 py-4 text-center"
              >
                <p className="text-xs font-bold text-neutral-300">
                  {content[key]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center py-3 text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* Reviewed History */}
        <div className="mx-auto max-w-xl border border-yellow-500/30 bg-neutral-950 p-6 text-center">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.reviewedHistoryLabel}
          </p>

          <h4 className="mt-3 text-lg font-black text-white">
            {content.reviewedHistory}
          </h4>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            {content.reviewedHistoryDescription}
          </p>
        </div>

        {/* Connector */}
        <div className="flex justify-center py-3 text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* Historical Evidence */}
        <div className="mx-auto max-w-xl border border-yellow-500/30 bg-neutral-950 p-6 text-center">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.historicalEvidenceLabel}
          </p>

          <h4 className="mt-3 text-lg font-black text-white">
            {content.historicalEvidence}
          </h4>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            {content.historicalEvidenceDescription}
          </p>
        </div>

        {/* Connector */}
        <div className="flex justify-center py-3 text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* Coach */}
        <div className="mx-auto max-w-xl border border-yellow-500/40 bg-neutral-950 p-6 text-center">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.coachLabel}
          </p>

          <h4 className="mt-3 text-lg font-black text-white">
            {content.coach}
          </h4>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            {content.coachDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
