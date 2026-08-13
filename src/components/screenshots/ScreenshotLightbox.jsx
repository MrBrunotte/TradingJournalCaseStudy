import { useEffect } from "react";

export default function ScreenshotLightbox({
  isOpen,
  src,
  alt,
  title,
  onClose,
}) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title || alt}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-full max-w-[1600px] flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <div>
            {title && <p className="text-sm font-bold text-white">{title}</p>}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-700 text-xl text-white transition hover:border-neutral-500"
            aria-label="Close screenshot"
          >
            ×
          </button>
        </div>

        <div className="min-h-0 overflow-auto border border-neutral-800 bg-black">
          <img
            src={src}
            alt={alt}
            className="mx-auto block h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
