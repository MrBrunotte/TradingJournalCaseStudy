import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import ScreenshotViewer from "../../components/screenshots/ScreenshotViewer";
import ReviewFlow from "./ReviewFlow";

export default function TradeReview({ content }) {
  return (
    <Section
      id="trade-review"
      className="border-t border-neutral-900 pb-12 md:pb-16 lg:pb-16"
    >
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <article>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.quality.label}
          </p>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            {content.quality.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
            {content.quality.description}
          </p>

          <div className="mt-6">
            <ScreenshotViewer
              src="/screenshots/trade-review-quality.png"
              alt="Trade review showing overall trade score, execution score, outcome score, entry and exit information, and excursion metrics"
              title={content.quality.title}
            />
          </div>
        </article>

        <article>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.behavioral.label}
          </p>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            {content.behavioral.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
            {content.behavioral.description}
          </p>

          <div className="mt-6">
            <ScreenshotViewer
              src="/screenshots/trade-review-behavioral.png"
              alt="Trade review showing plan compliance, rule compliance, break-even review, exit review, main mistake, screenshot evidence and notes"
              title={content.behavioral.title}
            />
          </div>
        </article>
      </div>

      <ReviewFlow content={content.flow} />
    </Section>
  );
}
