export default function DecisionGrouping({ content }) {
  return (
    <div className="mt-10">
      <div className="mb-8 max-w-4xl">
        <h3 className="text-xl font-black leading-7 text-white sm:text-2xl sm:leading-8">
          {content.summary}
        </h3>

        <p className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
          {content.summaryDescription}
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        {/* Account Trades */}
        <div className="mx-auto max-w-4xl border border-yellow-500/30 bg-neutral-950 p-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {content.accountLabel}
            </p>

            <h3 className="mt-3 text-xl font-black text-white">
              {content.accountTitle}
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-3">
            {["Account A", "Account B", "Account C", "Account D"].map(
              (account) => (
                <div
                  key={account}
                  className="border border-neutral-700 bg-black px-4 py-3"
                >
                  <p className="text-sm font-bold text-neutral-300">
                    {account} {content.accountExecution}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Split connector */}
        <div className="relative h-16">
          {/* Account Trades down to split */}
          <div className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-yellow-500" />

          {/* Horizontal split */}
          <div className="absolute left-1/4 right-1/4 top-8 h-px bg-yellow-500" />

          {/* Down to Financial Analysis */}
          <div className="absolute left-1/4 top-8 h-8 w-px -translate-x-1/2 bg-yellow-500" />

          {/* Down to Trading Decision */}
          <div className="absolute left-3/4 top-8 h-8 w-px -translate-x-1/2 bg-yellow-500" />
        </div>

        {/* Analytical paths */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-0">
          {/* Financial Analysis */}
          <article className="border border-yellow-500/30 bg-neutral-950 p-6">
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

          {/* Trading Decision */}
          <article className="border border-yellow-500/40 bg-neutral-950 p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {content.decisionLabel}
            </p>

            <h3 className="mt-3 text-xl font-black text-white">
              {content.decisionTitle}
            </h3>

            <p className="mt-4 text-sm leading-6 text-neutral-300">
              {content.decisionDescription}
            </p>
          </article>

          {/* Empty space below Financial Analysis */}
          <div />

          {/* Trading Decision → Behavioral Analysis */}
          <div>
            <div className="flex justify-center py-3 text-2xl font-bold text-yellow-500">
              ↓
            </div>

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
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        {/* Account Trades */}
        <div className="border border-yellow-500/30 bg-neutral-950 p-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {content.accountLabel}
            </p>

            <h3 className="mt-3 text-xl font-black text-white">
              {content.accountTitle}
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2">
            {["Account A", "Account B", "Account C", "Account D"].map(
              (account) => (
                <div
                  key={account}
                  className="border border-neutral-700 bg-black px-3 py-3"
                >
                  <p className="text-xs font-bold text-neutral-300">
                    {account} {content.accountExecution}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="py-3 text-center text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* Financial Analysis */}
        <article className="border border-yellow-500/30 bg-neutral-950 p-6">
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

        <div className="my-5 border-t border-neutral-800" />

        {/* Trading Decision path */}
        <article className="border border-yellow-500/40 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.decisionLabel}
          </p>

          <h3 className="mt-3 text-xl font-black text-white">
            {content.decisionTitle}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-300">
            {content.decisionDescription}
          </p>
        </article>

        <div className="py-3 text-center text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* Behavioral Analysis */}
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
    </div>
  );
}
