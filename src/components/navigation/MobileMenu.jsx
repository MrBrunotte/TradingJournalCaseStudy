export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  const links = [
    { label: "Overview", href: "#overview" },
    { label: "System", href: "#system" },
    { label: "Engineering", href: "#engineering" },
    { label: "My Role", href: "#my-role" },
  ];

  return (
    <div className="border-t border-neutral-900 bg-black md:hidden">
      <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="border-b border-neutral-900 py-4 text-sm font-bold text-neutral-300 transition hover:text-yellow-500"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
