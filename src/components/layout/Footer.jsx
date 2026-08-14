import BrandLogo from "../navigation/BrandLogo";
import PageContainer from "./PageContainer";

export default function Footer({ content }) {
  return (
    <footer className="border-t border-neutral-900 bg-black py-10 sm:py-12">
      <PageContainer>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <BrandLogo />

            <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-300">
              {content.description}
            </p>
          </div>

          <div className="sm:text-right">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-neutral-300">
              {content.project}
            </p>

            <p className="mt-2 text-sm text-neutral-400">{content.status}</p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
