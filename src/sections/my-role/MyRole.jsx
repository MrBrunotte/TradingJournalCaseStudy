import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import DevelopmentWorkflow from "./DevelopmentWorkflow";
import ResponsibilityColumns from "./ResponsibilityColumns";

export default function MyRole({ content }) {
  return (
    <Section
      id="my-role"
      className="border-y border-neutral-800 bg-neutral-950/50"
    >
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <div className="mt-10 border-l-2 border-yellow-500 pl-5 sm:pl-7">
        <p className="max-w-4xl text-xl font-black leading-8 text-white sm:text-2xl sm:leading-9 lg:text-3xl lg:leading-10">
          {content.coreStatement}
        </p>
      </div>

      <ResponsibilityColumns content={content} />

      <DevelopmentWorkflow content={content.workflow} />

      <div className="mt-10 border-l-2 border-yellow-500 pl-5 sm:pl-6">
        <p className="max-w-4xl text-base font-bold leading-7 text-white sm:text-lg sm:leading-8">
          {content.closing}
        </p>
      </div>
    </Section>
  );
}
