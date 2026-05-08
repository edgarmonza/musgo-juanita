import { ImgHTMLAttributes } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  slug: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: string;
};

const WIDTHS = [640, 1024, 1920] as const;

export default function ResponsiveImage({
  slug,
  alt,
  sizes = "100vw",
  priority = false,
  className,
  aspectRatio,
  style,
  ...rest
}: Props) {
  const base = `/img/${slug}`;
  const webpSrcSet = WIDTHS.map((w) => `${base}/${w}.webp ${w}w`).join(", ");
  const jpgSrc = `${base}/1920.jpg`;

  const composedStyle = aspectRatio ? { aspectRatio, ...(style ?? {}) } : style;

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={jpgSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={className}
        style={composedStyle}
        {...rest}
      />
    </picture>
  );
}
