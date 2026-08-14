import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";

export default function CurrentStatus({ content }) {
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
            className="border border-neutral-800 bg-neutral-950 p-4 sm:p-5"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-neutral-300 sm:text-xs">
              {item.label}
            </p>

            <p className="mt-2 text-sm font-black text-white sm:text-base">
              {item.value}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="border border-neutral-800 bg-neutral-950 p-6 sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.realUse.label}
          </p>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            {content.realUse.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
            {content.realUse.description}
          </p>
        </article>

        <article className="border border-neutral-800 bg-neutral-950 p-6 sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.evolution.label}
          </p>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            {content.evolution.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
            {content.evolution.description}
          </p>
        </article>
      </div>

      <div className="mt-10 border-l-2 border-yellow-500 pl-5 sm:pl-7">
        <p className="max-w-4xl text-lg font-black leading-7 text-white sm:text-2xl sm:leading-8">
          {content.closing}
        </p>
      </div>
    </Section>
  );
}
