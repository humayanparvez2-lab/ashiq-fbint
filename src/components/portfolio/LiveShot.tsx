import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  url: string;
  alt: string;
  loading?: "lazy" | "eager";
  interactive?: boolean;
  /** Static screenshot used when the site blocks live embedding. */
  image?: string;
};

const SITE_WIDTH = 1280;
const SITE_HEIGHT = 900;

/**
 * Embeds the live website so its latest content appears on every visit.
 * The site is rendered at a fixed desktop width and automatically scaled
 * to fit whatever width the parent container gives it — no fixed scale
 * classes, so it stays pixel-perfect on any screen size.
 */
const LiveShot = ({ url, alt, loading = "lazy", interactive = false }: Props) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  useLayoutEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / SITE_WIDTH);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frameRef}
      className="absolute inset-0 overflow-hidden"
      aria-hidden={!interactive}
    >
      <iframe
        src={url}
        title={alt}
        loading={loading}
        referrerPolicy="strict-origin-when-cross-origin"
        className={`absolute left-0 top-0 origin-top-left bg-background ${interactive ? "" : "pointer-events-none"}`}
        style={{
          width: SITE_WIDTH,
          height: SITE_HEIGHT,
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
};

export default LiveShot;
