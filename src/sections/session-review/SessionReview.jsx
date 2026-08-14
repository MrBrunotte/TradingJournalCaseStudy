import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import SessionReviewFlow from "./SessionReviewFlow";
import SessionReviewSummary from "./SessionReviewSummary";

export default function SessionReview({ content }) {
  return (
    <Section id="session-review" className="border-t border-neutral-900">
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <SessionReviewSummary content={content} />

      <SessionReviewFlow content={content.flow} />
    </Section>
  );
}
