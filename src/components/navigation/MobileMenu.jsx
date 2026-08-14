import { getContent } from "../../content";

const content = getContent();

const navigationItems = [
  { label: content.navigation.overview, href: "#overview" },
  { label: content.navigation.dataModel, href: "#data-model" },
  { label: content.navigation.review, href: "#trade-review" },
  { label: content.navigation.coach, href: "#coach" },
  { label: content.navigation.engineering, href: "#engineering" },
  { label: content.navigation.myRole, href: "#my-role" },
];

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="border-t border-neutral-900 bg-black md:hidden">
      <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b border-neutral-900 py-4 text-sm font-bold text-neutral-300 transition hover:text-yellow-500"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
