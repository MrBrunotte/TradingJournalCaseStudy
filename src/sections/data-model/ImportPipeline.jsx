const steps = [
  "Source Detection",
  "Adapter",
  "Normalization",
  "Common Trade Model",
];

export default function ImportPipeline() {
  return (
    <div className="mt-10 border border-neutral-800 bg-neutral-950 p-5 sm:p-6 lg:p-8">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-500">
        Import Pipeline
      </p>

      {/* Mobile */}
      <div className="mt-6 lg:hidden">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="border border-neutral-700 bg-black p-4">
            <p className="text-sm font-black text-white">DeepCharts</p>
            <p className="mt-1 text-xs text-neutral-500">CSV source</p>
          </div>

          <div className="border border-neutral-700 bg-black p-4">
            <p className="text-sm font-black text-white">Rithmic</p>
            <p className="mt-1 text-xs text-neutral-500">CSV source</p>
          </div>
        </div>

        <div className="my-5 text-center text-xl font-bold text-yellow-500">
          ↓
        </div>

        <div>
          {steps.map((step, index) => (
            <div key={step} className="relative flex gap-4">
              <div className="flex w-8 shrink-0 flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center border border-yellow-500/40 bg-black text-[10px] font-black text-yellow-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {index < steps.length - 1 && (
                  <div className="min-h-6 w-px flex-1 bg-neutral-700" />
                )}
              </div>

              <div className="pb-5 pt-1">
                <p className="text-sm font-black text-white">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="mt-6 hidden gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="grid gap-3">
          <div className="border border-neutral-700 bg-black p-4">
            <p className="text-sm font-black text-white">DeepCharts</p>
            <p className="mt-1 text-xs text-neutral-500">CSV source</p>
          </div>

          <div className="border border-neutral-700 bg-black p-4">
            <p className="text-sm font-black text-white">Rithmic</p>
            <p className="mt-1 text-xs text-neutral-500">CSV source</p>
          </div>
        </div>

        <div className="text-2xl font-bold text-yellow-500">→</div>

        <div className="grid gap-3 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="border border-neutral-700 bg-black p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-neutral-500">
                Step {index + 1}
              </p>

              <p className="mt-2 text-sm font-black text-white">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 max-w-4xl text-sm leading-6 text-neutral-500">
        Source-specific differences stay inside the import layer so the rest of
        the application can work with a consistent internal trade model.
      </p>
    </div>
  );
}
