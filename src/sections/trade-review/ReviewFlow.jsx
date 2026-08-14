const reviewItemKeys = ["execution", "plan", "rules", "mistakes", "notes"];

export default function ReviewFlow({ content }) {
  return (
    <div className="mt-10 border-t border-neutral-800 pt-8">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
          {content.label}
        </p>

        <p className="mt-3 max-w-4xl text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
          {content.description}
        </p>
      </div>

      {/* Mobile */}
      <div className="mt-7 lg:hidden">
        <div className="border border-neutral-800 bg-neutral-950 px-4 py-4">
          <p className="text-sm font-black text-white">{content.tradeReview}</p>
        </div>

        <div className="my-3 text-center text-lg font-bold text-yellow-500">
          ↓
        </div>

        <div className="grid grid-cols-2 gap-2">
          {reviewItemKeys.map((key) => (
            <div
              key={key}
              className="border border-neutral-700 bg-black px-3 py-3"
            >
              <p className="text-xs font-bold text-neutral-300">
                {content[key]}
              </p>
            </div>
          ))}
        </div>

        <div className="my-3 text-center text-lg font-bold text-yellow-500">
          ↓
        </div>

        <div className="border border-neutral-800 bg-neutral-950 px-4 py-4">
          <p className="text-sm font-black text-white">
            {content.historicalEvidence}
          </p>
        </div>

        <div className="my-3 text-center text-lg font-bold text-yellow-500">
          ↓
        </div>

        <div className="border border-yellow-500/30 bg-neutral-950 px-4 py-4">
          <p className="text-sm font-black text-yellow-500">{content.coach}</p>
        </div>
      </div>

      {/* Desktop */}
      <div className="mt-7 hidden lg:grid lg:grid-cols-[220px_auto_1fr_auto_220px] lg:items-center lg:gap-5">
        <div className="border border-neutral-800 bg-neutral-950 px-5 py-5">
          <p className="text-sm font-black text-white">{content.tradeReview}</p>
        </div>

        <div className="text-xl font-bold text-yellow-500">→</div>

        <div className="grid grid-cols-5 gap-2">
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

        <div className="text-xl font-bold text-yellow-500">→</div>

        <div className="grid gap-2">
          <div className="border border-neutral-800 bg-neutral-950 px-4 py-4">
            <p className="text-sm font-black text-white">
              {content.historicalEvidence}
            </p>
          </div>

          <div className="border border-yellow-500/30 bg-neutral-950 px-4 py-4">
            <p className="text-sm font-black text-yellow-500">
              {content.coach}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
