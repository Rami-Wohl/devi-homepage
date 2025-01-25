import Image from "next/image";

export interface ResponsiveImageProps {
  height?: number;
  width?: number;
  src: string;
  alt: string;
  description?: string;
  className?: string;
}

export const ResponsiveImage = ({
  height,
  width,
  src,
  alt,
  description,
  className,
}: ResponsiveImageProps) => {
  return (
    <div
      className={`relative flex h-full items-center justify-center bg-transparent ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width ?? 128}
        height={height ?? 128}
        className="rounded-sm object-cover"
      />
      {description && (
        <span className="absolute -bottom-4 font-sans text-xs tracking-[1px] text-[#333333] text-opacity-90">
          {description}
        </span>
      )}
    </div>
  );
};
