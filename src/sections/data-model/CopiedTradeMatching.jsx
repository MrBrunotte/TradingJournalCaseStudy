export default function CopiedTradeMatching() {
  return (
    <div className="mt-10 border-t border-neutral-800 pt-10">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
          Copied Trade Matching
        </p>

        <h3 className="mt-3 text-xl font-black leading-7 text-white sm:text-2xl sm:leading-8">
          Automatic when reliable, manual when ambiguous
        </h3>

        <p className="mt-4 text-base leading-7 text-neutral-400">
          Copied executions can differ slightly in timestamp, entry or exit
          because of fills. Reliable matches can be grouped automatically, while
          ambiguous cases can be reviewed manually.
        </p>
      </div>

      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        <article className="border border-neutral-800 bg-neutral-950 p-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-neutral-400">
            Likely Match
          </p>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            Trade characteristics indicate that executions belong to the same
            decision.
          </p>
        </article>

        <article className="border border-yellow-500/30 bg-neutral-950 p-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-yellow-500">
            Manual Review
          </p>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            Ambiguous cases are surfaced so they can be confirmed as the same
            decision or kept separate.
          </p>
        </article>

        <article className="border border-neutral-800 bg-neutral-950 p-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-neutral-400">
            Original Data Preserved
          </p>

          <p className="mt-3 text-sm leading-6 text-neutral-300">
            The grouping decision is stored without changing the original
            imported account trades.
          </p>
        </article>
      </div>
    </div>
  );
}
