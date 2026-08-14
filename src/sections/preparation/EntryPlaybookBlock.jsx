import ScreenshotViewer from "../../components/screenshots/ScreenshotViewer";

export default function EntryPlaybookBlock({ content }) {
  return (
    <article>
      <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
        {content.label}
      </p>

      <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
        {content.title}
      </h3>

      <p className="mt-4 max-w-4xl text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
        {content.description}
      </p>

      <div className="mt-6">
        <ScreenshotViewer
          src="/screenshots/entry-playbook-overview.png"
          alt="Entry Playbook showing structured entry models, description, grade, direction, bias, category, status and chart examples"
          title={content.primaryScreenshotTitle}
        />
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {content.features.map((feature) => (
          <div
            key={feature.title}
            className="border border-neutral-800 bg-neutral-950 p-5"
          >
            <p className="text-xs font-black uppercase tracking-[0.14em] text-yellow-500">
              {feature.title}
            </p>

            <p className="mt-3 text-sm leading-6 text-neutral-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
            {content.secondaryLabel}
          </p>

          <p className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
            {content.secondaryDescription}
          </p>
        </div>

        <div className="mt-5">
          <ScreenshotViewer
            src="/screenshots/entry-playbook-checklist.png"
            alt="Entry Playbook checklist showing structured entry criteria and common execution errors"
            title={content.secondaryScreenshotTitle}
          />
        </div>
      </div>
    </article>
  );
}