export default function ChallengeCard({
  number,
  label,
  title,
  description,
  details = [],
  highlight,
}) {
  return (
    <article className="border border-neutral-800 bg-neutral-950 p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {label}
          </p>

          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
            {title}
          </h3>
        </div>

        <span className="shrink-0 text-xs font-black tracking-[0.16em] text-neutral-600">
          {number}
        </span>
      </div>

      <p className="mt-5 text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
        {description}
      </p>

      {details.length > 0 && (
        <div className="mt-5 space-y-3">
          {details.map((detail) => (
            <div key={detail} className="flex gap-3">
              <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-yellow-500" />

              <p className="text-sm leading-6 text-neutral-300">{detail}</p>
            </div>
          ))}
        </div>
      )}

      {highlight && (
        <div className="mt-6 border-t border-neutral-800 pt-4">
          <p className="text-sm font-bold leading-6 text-white">{highlight}</p>
        </div>
      )}
    </article>
  );
}
