import Section from "../../components/layout/Section";
import SectionHeader from "../../components/layout/SectionHeader";
import EntryPlaybookBlock from "./EntryPlaybookBlock";
import MarketBiasBlock from "./MarketBiasBlock";

export default function Preparation({ content }) {
  return (
    <Section id="preparation" className="border-t border-neutral-900">
      <SectionHeader
        centered
        label={content.label}
        title={content.title}
        description={content.description}
      />

      <div className="mt-10">
        <EntryPlaybookBlock content={content.entryPlaybook} />
        <MarketBiasBlock content={content.marketBias} />
      </div>

      <div className="mt-12 border-t border-neutral-800 pt-8">
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.flow.label}
          </p>

          <p className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.flow.description}
          </p>
        </div>

        {/* Mobile */}
        <div className="mt-7 lg:hidden">
          {content.flow.steps.map((step, index) => {
            const isLast = index === content.flow.steps.length - 1;

            return (
              <div key={step.title} className="relative flex gap-4">
                <div className="flex w-8 shrink-0 flex-col items-center">
                  <div
                    className={
                      isLast
                        ? "flex h-8 w-8 items-center justify-center border border-yellow-500/50 bg-black text-[10px] font-black text-yellow-500"
                        : "flex h-8 w-8 items-center justify-center border border-neutral-700 bg-black text-[10px] font-black text-neutral-300"
                    }
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {!isLast && (
                    <div className="min-h-8 w-px flex-1 bg-neutral-700" />
                  )}
                </div>

                <div className="pb-7 pt-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-yellow-500">
                    {step.stage}
                  </p>

                  <p
                    className={
                      isLast
                        ? "mt-1 text-sm font-black text-yellow-500"
                        : "mt-1 text-sm font-black text-white"
                    }
                  >
                    {step.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop */}
        <div className="mt-8 hidden lg:flex lg:items-stretch lg:gap-3">
          {content.flow.steps.map((step, index) => {
            const isLast = index === content.flow.steps.length - 1;

            return (
              <div key={step.title} className="contents">
                <div
                  className={
                    isLast
                      ? "flex min-h-20 flex-1 flex-col items-center justify-center border border-yellow-500/40 bg-neutral-950 px-4 py-4 text-center"
                      : "flex min-h-20 flex-1 flex-col items-center justify-center border border-neutral-800 bg-neutral-950 px-4 py-4 text-center"
                  }
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-yellow-500">
                    {step.stage}
                  </p>

                  <p
                    className={
                      isLast
                        ? "mt-2 text-sm font-black text-yellow-500"
                        : "mt-2 text-sm font-black text-white"
                    }
                  >
                    {step.title}
                  </p>
                </div>

                {!isLast && (
                  <div className="flex shrink-0 items-center text-xl font-bold text-yellow-500">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
