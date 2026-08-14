const metricGroups = [
  {
    label: "Performance",
    items: ["P&L", "Profit Factor", "Expectancy", "Win Rate", "Equity Curve"],
  },
  {
    label: "Execution",
    items: ["Grade", "MFE / MAE / ETD", "Exit", "Break-even"],
  },
  {
    label: "Behavior",
    items: ["Mistakes", "Plan", "Rules", "Rule Violation Cost"],
  },
  {
    label: "Context",
    items: ["Strategy", "Time", "Day", "Account"],
  },
];

export default function AnalyticsMetrics() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metricGroups.map((group) => (
        <article
          key={group.label}
          className="border border-neutral-800 bg-neutral-950 p-5"
        >
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {group.label}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2 text-sm text-neutral-300">
            {group.items.map((item, index) => (
              <span key={item}>
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
  );
}
