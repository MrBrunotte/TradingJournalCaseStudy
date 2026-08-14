import ScreenshotViewer from "../../components/screenshots/ScreenshotViewer";

export default function MarketBiasBlock({ content }) {
  return (
    <article className="mt-14 border-t border-neutral-800 pt-10">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
        {content.label}
      </p>

      <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
        {content.title}
      </h3>

      <p className="mt-4 max-w-4xl text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
        {content.description}
      </p>

      <div className="mt-8">
        <ScreenshotViewer
          src="/screenshots/market-bias-overview.png"
          alt="Market Bias module showing weekly bias and daily bias preparation before the trading session"
          title={content.primaryScreenshotTitle}
        />
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <article className="border border-neutral-800 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.weekly.label}
          </p>

          <h4 className="mt-3 text-lg font-black text-white">
            {content.weekly.title}
          </h4>

          <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.weekly.description}
          </p>
        </article>

        <article className="border border-yellow-500/30 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.daily.label}
          </p>

          <h4 className="mt-3 text-lg font-black text-white">
            {content.daily.title}
          </h4>

          <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.daily.description}
          </p>
        </article>
      </div>

      <div className="mt-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.secondaryLabel}
          </p>

          <p className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.secondaryDescription}
          </p>
        </div>

        <div className="mt-5">
          <ScreenshotViewer
            src="/screenshots/todays-bias-overview.png"
            alt="Today's Bias showing the documented starting thesis for the upcoming trading session"
            title={content.secondaryScreenshotTitle}
          />
        </div>
      </div>
    </article>
  );
}
