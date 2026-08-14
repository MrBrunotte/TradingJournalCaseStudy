export default function LanguageSwitch() {
  const isSwedish = window.location.pathname.startsWith("/sv");

  return (
    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em]">
      <a
        href="/"
        className={
          isSwedish
            ? "text-neutral-300 transition hover:text-white"
            : "text-yellow-500"
        }
      >
        EN
      </a>

      <span className="text-neutral-700">/</span>

      <a
        href="/sv"
        className={
          isSwedish
            ? "text-yellow-500"
            : "text-neutral-300 transition hover:text-white"
        }
      >
        SV
      </a>
    </div>
  );
}
