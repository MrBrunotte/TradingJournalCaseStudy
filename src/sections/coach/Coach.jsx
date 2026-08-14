import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import ScreenshotViewer from "../../components/screenshots/ScreenshotViewer";
import CoachEvidence from "./CoachEvidence";
import CoachFlow from "./CoachFlow";

export default function Coach({ content }) {
  return (
    <Section id="coach" className="border-t border-neutral-900">
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <div className="mt-10">
        <ScreenshotViewer
          src="/screenshots/coach-overview.png"
          alt="Trading Journal Coach showing today's focus, improvement focus, evidence, strengths and behavioral patterns"
          title={content.screenshotTitle}
        />
      </div>

      <CoachEvidence content={content.evidence} />

      <div className="mt-10 border-l-2 border-yellow-500 pl-5 sm:pl-7">
        <p className="max-w-4xl text-lg font-black leading-7 text-white sm:text-2xl sm:leading-8 lg:text-3xl lg:leading-10">
          {content.highlight}
        </p>
      </div>

      <div className="mt-10 max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
          {content.technicalNote.label}
        </p>

        <p className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
          {content.technicalNote.description}
        </p>
      </div>

      <CoachFlow content={content.flow} />
    </Section>
  );
}
