export default function CopiedTradeMatching({ content }) {
  const accounts = ["Account A", "Account B", "Account C", "Account D"];

  return (
    <div className="mt-14 border-t border-neutral-800 pt-10">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-500">
        {content.label}
      </p>

      <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
        {content.title}
      </h3>

      <p className="mt-4 max-w-4xl text-sm leading-7 text-neutral-300 sm:text-base">
        {content.description}
      </p>

      {/* Desktop */}
      <div className="mt-8 hidden lg:block">
        {/* Account Trades */}
        <div className="mx-auto max-w-4xl border border-yellow-500/30 bg-neutral-950 p-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {content.accountTrades.label}
            </p>

            <h4 className="mt-3 text-xl font-black text-white">
              {content.accountTrades.title}
            </h4>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-3">
            {accounts.map((account) => (
              <div
                key={account}
                className="border border-neutral-700 bg-black px-4 py-3"
              >
                <p className="text-sm font-bold text-neutral-300">
                  {account} {content.accountTrades.executionLabel}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Split from Account Trades */}
        <div className="relative h-16">
          <div className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-yellow-500" />

          <div className="absolute left-1/4 right-1/4 top-8 h-px bg-yellow-500" />

          <div className="absolute left-1/4 top-8 h-8 w-px -translate-x-1/2 bg-yellow-500" />

          <div className="absolute left-3/4 top-8 h-8 w-px -translate-x-1/2 bg-yellow-500" />
        </div>

        {/* Matching methods */}
        <div className="grid grid-cols-2 gap-5">
          {/* Automatic Match */}
          <article className="border border-yellow-500/30 bg-neutral-950 p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {content.automatic.label}
            </p>

            <h4 className="mt-3 text-lg font-black text-white">
              {content.automatic.title}
            </h4>

            <p className="mt-4 text-sm leading-6 text-neutral-300">
              {content.automatic.description}
            </p>
          </article>

          {/* Manual Confirmation */}
          <article className="border border-yellow-500/30 bg-neutral-950 p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {content.manual.label}
            </p>

            <h4 className="mt-3 text-lg font-black text-white">
              {content.manual.title}
            </h4>

            <p className="mt-4 text-sm leading-6 text-neutral-300">
              {content.manual.description}
            </p>
          </article>
        </div>

        {/* Result connectors */}
        <div className="grid grid-cols-2 gap-5">
          {/* Automatic -> Grouped */}
          <div className="flex justify-center py-3">
            <div className="text-2xl font-bold text-yellow-500">↓</div>
          </div>

          {/* Manual -> split */}
          <div className="relative h-12">
            <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-yellow-500" />

            <div className="absolute left-1/4 right-1/4 top-6 h-px bg-yellow-500" />

            <div className="absolute left-1/4 top-6 h-6 w-px -translate-x-1/2 bg-yellow-500" />

            <div className="absolute left-3/4 top-6 h-6 w-px -translate-x-1/2 bg-yellow-500" />
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 items-start gap-5">
          {/* Automatic grouped result */}
          <article className="border border-yellow-500/40 bg-neutral-950 p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {content.results.single.label}
            </p>

            <h4 className="mt-3 text-lg font-black text-white">
              {content.results.single.title}
            </h4>

            <p className="mt-4 text-sm leading-6 text-neutral-300">
              {content.results.single.description}
            </p>
          </article>

          {/* Manual results */}
          <div className="grid grid-cols-2 gap-3">
            {/* Grouped Result */}
            <article className="border border-yellow-500/40 bg-neutral-950 p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-yellow-500">
                {content.results.single.label}
              </p>

              <h4 className="mt-3 text-base font-black leading-6 text-white">
                {content.results.single.title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-neutral-300">
                {content.results.single.description}
              </p>
            </article>

            {/* Separate Result */}
            <article className="border border-yellow-500/40 bg-neutral-950 p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-yellow-500">
                {content.results.multiple.label}
              </p>

              <h4 className="mt-3 text-base font-black leading-6 text-white">
                {content.results.multiple.title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-neutral-300">
                {content.results.multiple.description}
              </p>
            </article>
          </div>
        </div>

        {/* Original data preserved */}
        <div className="mt-7 border-l-2 border-yellow-500 pl-5 sm:pl-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.preserved.label}
          </p>

          <p className="mt-2 max-w-4xl text-base font-bold leading-7 text-white sm:text-lg sm:leading-8">
            {content.preserved.description}
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="mt-8 lg:hidden">
        {/* Account Trades */}
        <div className="border border-yellow-500/30 bg-neutral-950 p-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {content.accountTrades.label}
            </p>

            <h4 className="mt-3 text-xl font-black text-white">
              {content.accountTrades.title}
            </h4>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2">
            {accounts.map((account) => (
              <div
                key={account}
                className="border border-neutral-700 bg-black px-3 py-3"
              >
                <p className="text-xs font-bold text-neutral-300">
                  {account} {content.accountTrades.executionLabel}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-3 text-center text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* Automatic path */}
        <article className="border border-yellow-500/30 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.automatic.label}
          </p>

          <h4 className="mt-3 text-lg font-black text-white">
            {content.automatic.title}
          </h4>

          <p className="mt-4 text-sm leading-6 text-neutral-300">
            {content.automatic.description}
          </p>
        </article>

        <div className="py-3 text-center text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* Automatic grouped result */}
        <article className="border border-yellow-500/40 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.results.single.label}
          </p>

          <h4 className="mt-3 text-lg font-black text-white">
            {content.results.single.title}
          </h4>

          <p className="mt-4 text-sm leading-6 text-neutral-300">
            {content.results.single.description}
          </p>
        </article>

        <div className="my-6 border-t border-neutral-800" />

        {/* Manual path */}
        <article className="border border-yellow-500/30 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.manual.label}
          </p>

          <h4 className="mt-3 text-lg font-black text-white">
            {content.manual.title}
          </h4>

          <p className="mt-4 text-sm leading-6 text-neutral-300">
            {content.manual.description}
          </p>
        </article>

        <div className="py-3 text-center text-2xl font-bold text-yellow-500">
          ↓
        </div>

        {/* Manual results */}
        <div className="grid grid-cols-2 gap-3">
          {/* Grouped Result */}
          <article className="border border-yellow-500/40 bg-neutral-950 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-yellow-500">
              {content.results.single.label}
            </p>

            <h4 className="mt-2 text-sm font-black leading-5 text-white">
              {content.results.single.title}
            </h4>
          </article>

          {/* Separate Result */}
          <article className="border border-yellow-500/40 bg-neutral-950 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-yellow-500">
              {content.results.multiple.label}
            </p>

            <h4 className="mt-2 text-sm font-black leading-5 text-white">
              {content.results.multiple.title}
            </h4>
          </article>
        </div>

        {/* Original data preserved */}
        <div className="mt-7 border-l-2 border-yellow-500 pl-5 sm:pl-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.preserved.label}
          </p>

          <p className="mt-2 max-w-4xl text-base font-bold leading-7 text-white sm:text-lg sm:leading-8">
            {content.preserved.description}
          </p>
        </div>
      </div>
    </div>
  );
}
