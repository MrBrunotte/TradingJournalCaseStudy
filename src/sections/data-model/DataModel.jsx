import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import CopiedTradeMatching from "./CopiedTradeMatching";
import DecisionGrouping from "./DecisionGrouping";
import ImportPipeline from "./ImportPipeline";

export default function DataModel({ content }) {
  return (
    <Section id="data-model">
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <ImportPipeline />
      <DecisionGrouping content={content.decisionGrouping} />
      <CopiedTradeMatching content={content.copiedTradeMatching} />
    </Section>
  );
}
