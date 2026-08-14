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

      <div className="mt-10 border-l-2 border-yellow-500 pl-5 sm:mt-12 sm:pl-7">
        <p className="max-w-4xl text-lg font-black leading-7 text-white sm:text-2xl sm:leading-8 lg:text-3xl lg:leading-10">
          {content.highlight}
        </p>
      </div>
    </Section>
  );
}
