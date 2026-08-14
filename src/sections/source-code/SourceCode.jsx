import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";

export default function SourceCode({ content }) {
  return (
    <Section
      id="source-code"
      className="border-y border-neutral-800 bg-neutral-950/50"
    >
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="border border-yellow-500/30 bg-black p-6 sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.privateRepository.label}
          </p>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            {content.privateRepository.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.privateRepository.description}
          </p>
        </article>

        <article className="border border-yellow-500/30 bg-black p-6 sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.publicCaseStudy.label}
          </p>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            {content.publicCaseStudy.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.publicCaseStudy.description}
          </p>
        </article>
      </div>

      <div className="mt-10 border-l-2 border-yellow-500 pl-5 sm:pl-6">
        <p className="max-w-4xl text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
          {content.closing}
        </p>
      </div>
    </Section>
  );
}
