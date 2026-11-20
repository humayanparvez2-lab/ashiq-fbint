import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  url: string;
  alt: string;
  loading?: "lazy" | "eager";
  interactive?: boolean;
  /** Static screenshot used when the site blocks live embedding. */
  image?: string;
  /** Render the live site at the available size instead of scaling a desktop canvas. */
  native?: boolean;
};

const SITE_WIDTH = 1280;
const SITE_HEIGHT = 900;

/**
 * Embeds the live website so its latest content appears on every visit.
 * The site is rendered at a fixed desktop width and automatically scaled
 * to fit whatever width the parent container gives it — no fixed scale
 * classes, so it stays pixel-perfect on any screen size.
 */
const LiveShot = ({ url, alt, loading = "lazy", interactive = false, image, native = false }: Props) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState({ scale: 0.25, offsetX: 0, offsetY: 0 });

  useLayoutEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => {
      const scale = Math.max(el.clientWidth / SITE_WIDTH, el.clientHeight / SITE_HEIGHT);
      setFrame({
        scale,
        offsetX: (el.clientWidth - SITE_WIDTH * scale) / 2,
        offsetY: (el.clientHeight - SITE_HEIGHT * scale) / 2,
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frameRef}
      className={`absolute inset-0 ${native ? "overflow-auto" : "overflow-hidden"}`}
      aria-hidden={!interactive}
    >
      {image ? (
        <img
          src={image}
          alt={alt}
          loading={loading}
          className={`${native ? "relative block h-auto w-full max-w-none bg-background" : "absolute left-0 top-0 max-w-none origin-top-left bg-background"}`}
          style={native ? undefined : {
            width: SITE_WIDTH,
            height: SITE_HEIGHT,
            objectFit: "cover",
            objectPosition: "top",
            transform: `translate(${frame.offsetX}px, ${frame.offsetY}px) scale(${frame.scale})`,
          }}
        />
      ) : (
        <iframe
          src={url}
          title={alt}
          loading={loading}
          referrerPolicy="strict-origin-when-cross-origin"
          className={`absolute bg-background ${native ? "inset-0 h-full w-full" : "left-0 top-0 origin-top-left"} ${interactive ? "" : "pointer-events-none"}`}
          style={native ? undefined : {
            width: SITE_WIDTH,
            height: SITE_HEIGHT,
            transform: `translate(${frame.offsetX}px, ${frame.offsetY}px) scale(${frame.scale})`,
          }}
        />
      )}
    </div>
  );
};

export default LiveShot;
