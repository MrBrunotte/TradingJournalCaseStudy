import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import ChallengeCard from "./ChallengeCard";

export default function TechnicalChallenges({ content }) {
  return (
    <Section
      id="engineering"
      className="border-t border-neutral-900 bg-neutral-950/40"
    >
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {content.challenges.map((challenge) => (
          <ChallengeCard key={challenge.number} {...challenge} />
        ))}
      </div>

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
