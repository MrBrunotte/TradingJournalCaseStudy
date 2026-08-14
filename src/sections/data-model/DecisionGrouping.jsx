export default function DecisionGrouping({ content }) {
  return (
    <div className="mt-10">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <div className="border border-neutral-800 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.accountLabel}
          </p>

          <h3 className="mt-3 text-xl font-black text-white">
            {content.accountTitle}
          </h3>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3">
            {["Account A", "Account B", "Account C", "Account D"].map(
              (account) => (
                <div
                  key={account}
                  className="border border-neutral-700 bg-black px-3 py-3 sm:px-4"
                >
                  <p className="text-xs font-bold text-neutral-300 sm:text-sm">
                    {account} {content.accountExecution}
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
            {content.decisionLabel}
          </p>

          <h3 className="mt-3 text-xl font-black text-white">
            {content.decisionTitle}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-300">
            {content.decisionDescription}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <article className="border border-neutral-800 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.financialLabel}
          </p>

          <h3 className="mt-3 text-lg font-black text-white">
            {content.financialTitle}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-300">
            {content.financialDescription}
          </p>
        </article>

        <article className="border border-yellow-500/30 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.behavioralLabel}
          </p>

          <h3 className="mt-3 text-lg font-black text-white">
            {content.behavioralTitle}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-300">
            {content.behavioralDescription}
          </p>
        </article>
      </div>

      <div className="mt-6 border-t border-neutral-800 pt-5">
        <p className="text-sm font-bold leading-6 text-neutral-300">
          {content.summary}
        </p>
      </div>
    </div>
  );
}
