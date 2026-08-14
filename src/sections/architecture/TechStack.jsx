const groups = [
  {
    label: "Application",
    items: ["React 19", "JavaScript", "Vite", "Tailwind CSS"],
  },
  {
    label: "Desktop",
    items: ["Tauri v2"],
  },
  {
    label: "Data",
    items: ["SQLite"],
  },
  {
    label: "Visualization",
    items: ["Recharts"],
  },
  {
    label: "UI",
    items: ["Lucide"],
  },
  {
    label: "Development",
    items: ["Git", "GitHub"],
  },
];

export default function TechStack() {
  return (
    <div className="mt-10 border-t border-neutral-800 pt-8">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
        Technology Stack
      </p>

      {/* Mobile */}
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:hidden">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-neutral-300">
              {group.label}
            </p>

            <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
              {group.items.map((item, index) => (
                <span key={item} className="text-sm text-neutral-300">
                  {item}
                  {index < group.items.length - 1 && (
                    <span className="ml-2 text-neutral-700">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tablet / Desktop */}
      <div className="mt-6 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <article
            key={group.label}
            className="border border-neutral-800 bg-neutral-950 p-5"
          >
            <p className="text-xs font-black uppercase tracking-[0.16em] text-neutral-300">
              {group.label}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
              {group.items.map((item, index) => (
                <span key={item} className="text-sm text-neutral-300">
                  {item}
                  {index < group.items.length - 1 && (
                    <span className="ml-2 text-neutral-700">·</span>
                  )}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
