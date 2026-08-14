import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";

export default function CurrentStatus({ content }) {
  const realUsePoints = content.realUse?.points || [
    "Validated against imported trading data",
    "Uses real review workflows, not isolated demo cases",
    "Reveals edge cases through actual day-to-day use",
    "New issues often become the next development requirement",
  ];

  const evolutionPoints = content.evolution?.points || [
    "The scope has expanded as connected workflows became clearer",
    "Development now includes both new functionality and refinement",
    "Complexity is reduced through iteration and refactoring",
    "The system continues to evolve as requirements become more precise",
  ];

  return (
    <Section id="status" className="border-t border-neutral-900">
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {content.statusItems.map((item) => (
          <article
            key={item.label}
            className="flex h-full flex-col border border-yellow-500/30 bg-neutral-950 p-5 sm:p-6"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-yellow-500 sm:text-xs">
              {item.label}
            </p>

            <p className="mt-2 text-base font-black text-white sm:text-lg">
              {item.value}
            </p>

            <p className="mt-3 text-sm leading-6 text-neutral-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="flex h-full flex-col border border-yellow-500/30 bg-neutral-950 p-6 sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.realUse.label}
          </p>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            {content.realUse.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.realUse.description}
          </p>

          <div className="mt-6 border-t border-neutral-800 pt-5">
            <div className="space-y-3">
              {realUsePoints.map((point) => (
                <div key={point} className="flex gap-3">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-yellow-500" />
                  <p className="text-sm leading-6 text-neutral-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="flex h-full flex-col border border-yellow-500/30 bg-neutral-950 p-6 sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.evolution.label}
          </p>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            {content.evolution.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.evolution.description}
          </p>

          <div className="mt-6 border-t border-neutral-800 pt-5">
            <div className="space-y-3">
              {evolutionPoints.map((point) => (
                <div key={point} className="flex gap-3">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-yellow-500" />
                  <p className="text-sm leading-6 text-neutral-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>

      <div className="mt-10 border-l-2 border-yellow-500 pl-5 sm:pl-6">
        <p className="max-w-4xl text-base font-bold leading-7 text-white sm:text-lg sm:leading-8">
          {content.closing}
        </p>
      </div>
    </Section>
  );
}
