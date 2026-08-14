import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import ProblemComparison from "./ProblemComparison";

export default function Problem({ content }) {
  return (
    <Section id="problem">
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <ProblemComparison
        left={content.comparison.left}
        right={content.comparison.right}
      />

      <div className="mt-10 border-l-2 border-yellow-500 pl-5 sm:mt-12 sm:pl-6">
        <p className="max-w-4xl text-base font-bold leading-7 text-white sm:text-lg sm:leading-8">
          {content.highlight}
        </p>
      </div>
    </Section>
  );
}
