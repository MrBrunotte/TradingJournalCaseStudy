export default function DecisionGrouping() {
  return (
    <div className="mt-10">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <div className="border border-neutral-800 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-neutral-400">
            Account Trades
          </p>

          <h3 className="mt-3 text-xl font-black text-white">
            Every execution remains stored
          </h3>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3">
            {["Account A", "Account B", "Account C", "Account D"].map(
              (account) => (
                <div
                  key={account}
                  className="border border-neutral-700 bg-black px-3 py-3 sm:px-4"
                >
                  <p className="text-xs font-bold text-neutral-300 sm:text-sm">
                    {account} execution
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="hidden items-center justify-center px-2 text-3xl font-bold text-yellow-500 lg:flex">
          →
        </div>

        <div className="border border-yellow-500/40 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            Trading Decision
          </p>

          <h3 className="mt-3 text-xl font-black text-white">
            One underlying decision
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-400">
            Multiple copied executions can represent one trading decision for
            behavioral review.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <article className="border border-neutral-800 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-neutral-400">
            Financial / Account Analysis
          </p>

          <h3 className="mt-3 text-lg font-black text-white">
            How did my accounts perform?
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-400">
            Uses every underlying account execution for P&amp;L, fills and
            account-level statistics.
          </p>
        </article>

        <article className="border border-yellow-500/30 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            Behavioral Analysis
          </p>

          <h3 className="mt-3 text-lg font-black text-white">
            How did I trade?
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-300">
            Uses the Trading Decision once so grades, mistakes, reviews and
            behavioral statistics are not multiplied across copied accounts.
          </p>
        </article>
      </div>

      <div className="mt-6 border-t border-neutral-800 pt-5">
        <p className="text-sm font-bold text-neutral-400">
          Same underlying trade data, viewed at two different analytical levels.
        </p>
      </div>
    </div>
  );
}