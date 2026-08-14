const evidenceGroups = [
  {
    label: "Evidence",
    items: [
      "Reviewed decisions",
      "Session reflections",
      "Mistakes",
      "Execution quality",
      "Review notes",
    ],
  },
  {
    label: "Patterns",
    items: [
      "Recurring behaviors",
      "Repeated mistakes",
      "Strengths",
      "Recent themes",
      "Behavioral consistency",
    ],
  },
  {
    label: "Focus",
    items: [
      "Today's Focus",
      "Improvement Focus",
      "Execution cues",
      "Training priorities",
      "Progress over time",
    ],
  },
];

export default function CoachEvidence() {
  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-3">
      {evidenceGroups.map((group) => (
        <article
          key={group.label}
          className="border border-neutral-800 bg-neutral-950 p-6"
        >
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {group.label}
          </p>

          <div className="mt-5 space-y-3">
            {group.items.map((item) => (
              <div key={item} className="flex gap-3">
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-yellow-500" />

                <p className="text-sm leading-6 text-neutral-300">{item}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
