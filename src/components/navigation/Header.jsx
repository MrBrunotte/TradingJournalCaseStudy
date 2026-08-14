import { useState } from "react";
import BrandLogo from "./BrandLogo";
import LanguageSwitch from "./LanguageSwitch";
import MobileMenu from "./MobileMenu";
import PageContainer from "../layout/PageContainer";
import { getContent } from "../../content";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = getContent();

  const navigationItems = [
    { label: content.navigation.overview, href: "#overview" },
    { label: content.navigation.dataModel, href: "#data-model" },
    { label: content.navigation.review, href: "#trade-review" },
    { label: content.navigation.coach, href: "#coach" },
    { label: content.navigation.engineering, href: "#engineering" },
    { label: content.navigation.myRole, href: "#my-role" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900 bg-black/90 backdrop-blur">
      <PageContainer>
        <div className="flex h-16 items-center justify-between gap-6">
          <a
            href="#overview"
            className="flex shrink-0 items-center"
            aria-label="Go to project overview"
          >
            <BrandLogo compact />
          </a>

          <div className="flex items-center gap-5">
            <nav className="hidden items-center gap-7 md:flex">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-300 transition hover:text-yellow-500"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <LanguageSwitch />

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center border border-neutral-800 text-white md:hidden"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
            >
              <span className="text-lg leading-none">
                {isMenuOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>
      </PageContainer>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
