import Header from "./components/navigation/Header";
import Section from "./components/layout/Section";
import SectionHeader from "./components/layout/SectionHeader";
import { getContent } from "./content";
import Hero from "./sections/hero/Hero";
import Problem from "./sections/problem/Problem";
import DataModel from "./sections/data-model/DataModel";
import TradeReview from "./sections/trade-review/TradeReview";
import Analytics from "./sections/analytics/Analytics";
import SessionReview from "./sections/session-review/SessionReview";
import Coach from "./sections/coach/Coach";
import Preparation from "./sections/preparation/Preparation";
import TechnicalChallenges from "./sections/engineering/TechnicalChallenges";
import Architecture from "./sections/architecture/Architecture";
import MyRole from "./sections/my-role/MyRole";
import CurrentStatus from "./sections/status/CurrentStatus";
import SourceCode from "./sections/source-code/SourceCode";
import Footer from "./components/layout/Footer";

export default function App() {
  const content = getContent();

  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-white">
        <Hero content={content.hero} />
        <Problem content={content.problem} />
        <DataModel content={content.dataModel} />
        <TradeReview content={content.tradeReview} />
        <Analytics content={content.analytics} />
        <SessionReview content={content.sessionReview} />
        <Coach content={content.coach} />
        <Preparation content={content.preparation} />
        <TechnicalChallenges content={content.technicalChallenges} />
        <Architecture content={content.architecture} />
        <MyRole content={content.myRole} />
        <CurrentStatus content={content.currentStatus} />
        <SourceCode content={content.sourceCode} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
