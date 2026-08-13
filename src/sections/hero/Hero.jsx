import Section from "../../components/layout/Section";
import ScreenshotViewer from "../../components/screenshots/ScreenshotViewer";
import SectionHeader from "../../components/layout/SectionHeader";
import HeroMeta from "./HeroMeta";

export default function Hero({ content }) {
  const techItems = [
    "React 19",
    "Tauri v2",
    "SQLite",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
  ];

  const statusItems = [
    "Desktop Application",
    "Local-first",
    "Active Development",
    "Private Source Repository",
  ];

  return (
    <Section id="overview" className="border-b border-neutral-900">
      <div className="space-y-10 lg:space-y-14">
        <div className="max-w-4xl">
          <SectionHeader label={content.label} title={content.title} />

          <HeroMeta items={techItems} />
          <HeroMeta items={statusItems} />

          {content.description && (
            <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-400 sm:text-lg">
              {content.description}
            </p>
          )}

          {content.supportingLine && (
            <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-500 sm:text-base">
              {content.supportingLine}
            </p>
          )}
        </div>

        <ScreenshotViewer
          src="/screenshots/dashboard-overview.png"
          alt="MrBrunotte's Trading Journal dashboard showing journal health, performance metrics, trading pulse and account data"
          title="Dashboard Overview"
        />
      </div>
    </Section>
  );
}
