import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import ArchitectureFlow from "./ArchitectureFlow";
import TechStack from "./TechStack";

export default function Architecture({ content }) {
  return (
    <Section
      id="architecture"
      className="border-t border-neutral-900 bg-neutral-950/20"
    >
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <ArchitectureFlow />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {content.responsibilities.map((item) => (
          <article
            key={item.label}
            className="border border-neutral-800 bg-neutral-950 p-5"
          >
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {item.label}
            </p>

            <p className="mt-3 text-sm leading-6 text-neutral-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <TechStack />

      <div className="mt-10 border-l-2 border-yellow-500 pl-5 sm:pl-7">
        <p className="max-w-4xl text-lg font-black leading-7 text-white sm:text-2xl sm:leading-8">
          {content.closing.title}
        </p>

        <p className="mt-4 max-w-4xl text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
          {content.closing.description}
        </p>
      </div>
    </Section>
  );
}
