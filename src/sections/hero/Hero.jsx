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
    <Section id="overview" showSeparator={false}>
      <div className="space-y-10 lg:space-y-14">
        <div className="max-w-5xl">
          <SectionHeader label={content.label} title={content.title} />

          <HeroMeta items={techItems} />
          <HeroMeta items={statusItems} />

          {content.description && (
            <p className="mt-6 max-w-4xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
              {content.description}
            </p>
          )}

          {content.supportingLine && (
            <div className="mt-6 border-l-2 border-yellow-500 pl-5 sm:pl-6">
              <p className="max-w-4xl text-base font-bold leading-7 text-white sm:text-lg sm:leading-8">
                {content.supportingLine}
              </p>
            </div>
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
