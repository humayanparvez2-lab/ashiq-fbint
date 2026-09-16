import { useState } from "react";

type Props = {
  url: string;
  fallback: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

/**
 * Renders an automatically refreshed screenshot of a live website.
 * Falls back to a stored image if the live capture is unavailable.
 */
const LiveShot = ({ url, fallback, alt, className, loading = "lazy" }: Props) => {
  const [failed, setFailed] = useState(false);

  const live = `https://image.thum.io/get/width/1200/crop/900/noanimate/maxAge/12/${url}`;

  return (
    <img
      src={failed ? fallback : live}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

export default LiveShot;
