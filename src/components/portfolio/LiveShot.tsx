type Props = {
  url: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

/**
 * Embeds the live website so its latest content appears on every visit.
 */
const LiveShot = ({ url, alt, className, loading = "lazy" }: Props) => (
  <iframe
    src={url}
    title={alt}
    loading={loading}
    referrerPolicy="strict-origin-when-cross-origin"
    className={className}
  />
);

export default LiveShot;
