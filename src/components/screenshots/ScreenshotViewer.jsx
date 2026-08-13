import { useState } from "react";
import ScreenshotLightbox from "./ScreenshotLightbox";
import ScreenshotPreview from "./ScreenshotPreview";

export default function ScreenshotViewer({ src, alt, title, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ScreenshotPreview
        src={src}
        alt={alt}
        title={title}
        onClick={() => setIsOpen(true)}
        className={className}
      />

      <ScreenshotLightbox
        isOpen={isOpen}
        src={src}
        alt={alt}
        title={title}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
