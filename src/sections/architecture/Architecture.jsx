import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";

export default function Architecture({ content }) {
  return (
    <Section id="architecture" className="border-t border-neutral-900">
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      {/* Architecture layers */}
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.layers.map((layer, index) => {
          const isCoach = index === content.layers.length - 1;

          return (
            <article
              key={layer.number}
              className={
                isCoach
                  ? "border border-yellow-500/50 bg-neutral-950 p-6"
                  : "border border-yellow-500/30 bg-neutral-950 p-6"
              }
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-yellow-500">
                Layer {layer.number}
              </p>

              <h3
                className={
                  isCoach
                    ? "mt-4 text-lg font-black text-yellow-500"
                    : "mt-4 text-lg font-black text-white"
                }
              >
                {layer.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-neutral-300">
                {layer.description}
              </p>
            </article>
          );
        })}
      </div>

      {/* Responsibility areas */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {content.responsibilities.map((item) => (
          <article
            key={item.label}
            className="border border-yellow-500/30 bg-neutral-950 p-5"
          >
            <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
              {item.label}
            </p>

            <p className="mt-4 text-sm leading-6 text-neutral-300">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      {/* Closing */}
      <div className="mt-12 border-l-2 border-yellow-500 pl-5 sm:pl-7">
        <p className="max-w-4xl text-lg font-black leading-7 text-white sm:text-2xl sm:leading-8">
          {content.closing.title}
        </p>

        <p className="mt-4 max-w-4xl text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
          {content.closing.description}
        </p>
      </div>
    </Section>
  );
}
