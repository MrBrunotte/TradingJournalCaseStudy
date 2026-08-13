import Header from "./components/navigation/Header";
import Section from "./components/layout/Section";
import SectionHeader from "./components/layout/SectionHeader";
import { getContent } from "./content";
import Hero from "./sections/hero/Hero";
import Problem from "./sections/problem/Problem";
import DataModel from "./sections/data-model/DataModel";

export default function App() {
  const content = getContent();

  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-white">
        <Hero content={content.hero} />
        <Problem content={content.problem} />
        <DataModel content={content.dataModel} />

        <Section id="engineering" className="border-t border-neutral-900">
          <SectionHeader
            label={content.sections.engineering.label}
            title={content.sections.engineering.title}
            description={content.sections.engineering.description}
          />
        </Section>

        <Section id="my-role" className="border-t border-neutral-900">
          <SectionHeader
            label={content.sections.myRole.label}
            title={content.sections.myRole.title}
            description={content.sections.myRole.description}
          />
        </Section>
      </main>
    </>
  );
}
