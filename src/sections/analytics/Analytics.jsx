import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import ScreenshotViewer from "../../components/screenshots/ScreenshotViewer";
import AnalyticsMetrics from "./AnalyticsMetrics";

export default function Analytics({ content }) {
  return (
    <Section id="analytics" className="border-t border-neutral-900">
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <div className="mt-10">
        <ScreenshotViewer
          src="/screenshots/analytics-deep-dive.png"
          alt="Trading Journal analytics showing decision-level performance, excursion, mistake, plan and rule analysis"
          title={content.primaryScreenshotTitle}
        />
      </div>

      <AnalyticsMetrics />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="border border-neutral-800 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            Account Analytics
          </p>

          <h3 className="mt-3 text-xl font-black text-white">
            {content.accountAnalysis.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.accountAnalysis.description}
          </p>
        </article>

        <article className="border border-yellow-500/30 bg-neutral-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            Decision Analytics
          </p>

          <h3 className="mt-3 text-xl font-black text-white">
            {content.decisionAnalysis.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.decisionAnalysis.description}
          </p>
        </article>
      </div>

      <div className="mt-10">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.secondaryLabel}
          </p>

          <p className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.secondaryDescription}
          </p>
        </div>

        <div className="mt-6">
          <ScreenshotViewer
            src="/screenshots/analytics-overview.png"
            alt="Trading Journal analytics overview showing performance metrics and analytical categories"
            title={content.secondaryScreenshotTitle}
          />
        </div>
      </div>
    </Section>
  );
}