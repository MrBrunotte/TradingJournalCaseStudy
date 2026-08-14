export default function CopiedTradeMatching({ content }) {
  return (
    <div className="mt-10 border-t border-neutral-800 pt-10">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
          {content.label}
        </p>

        <h3 className="mt-3 text-xl font-black leading-7 text-white sm:text-2xl sm:leading-8">
          {content.title}
        </h3>

        <p className="mt-4 text-base leading-7 text-neutral-300">
          {content.description}
        </p>
      </div>

      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        <article className="border border-neutral-800 bg-neutral-950 p-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-yellow-500">
            {content.likelyMatch.label}
          </p>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            {content.likelyMatch.description}
          </p>
        </article>

        <article className="border border-yellow-500/30 bg-neutral-950 p-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-yellow-500">
            {content.manualReview.label}
          </p>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            {content.manualReview.description}
          </p>
        </article>

        <article className="border border-neutral-800 bg-neutral-950 p-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-yellow-500">
            {content.originalData.label}
          </p>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            {content.originalData.description}
          </p>
        </article>
      </div>
    </div>
  );
}
