import ScreenshotViewer from "../../components/screenshots/ScreenshotViewer";

export default function SessionReviewSummary({ content }) {
  return (
    <div className="mt-10 space-y-10">
      {/* Overview */}
      <article className="flex flex-col">
        <div className="flex h-full flex-col border border-yellow-500/30 bg-neutral-950 p-6 lg:min-h-[220px]">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.overview.label}
          </p>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            {content.overview.title}
          </h3>

          <p className="mt-4 max-w-4xl text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.overview.description}
          </p>
        </div>

        <div className="mt-6">
          <ScreenshotViewer
            src="/screenshots/session-review-overview.png"
            alt="Session review showing reviewed decisions, grade distribution, plan compliance, market context and suggested session draft"
            title={content.overview.title}
          />
        </div>
      </article>

      {/* Final Reflection */}
      <article className="flex flex-col">
        <div className="flex h-full flex-col border border-yellow-500/30 bg-neutral-950 p-6 lg:min-h-[220px]">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.reflection.label}
          </p>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            {content.reflection.title}
          </h3>

          <p className="mt-4 max-w-4xl text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.reflection.description}
          </p>
        </div>

        <div className="mt-6">
          <ScreenshotViewer
            src="/screenshots/session-review-reflection.png"
            alt="Session review showing overall reflection, next session focus, session grade and personal conclusions"
            title={content.reflection.title}
          />
        </div>
      </article>
    </div>
  );
}
