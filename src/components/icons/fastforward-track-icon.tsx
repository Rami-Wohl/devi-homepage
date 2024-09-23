import type { SVGProps } from "react";

export default function FastForwardTrackIcon({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill ?? "currentColor"}
      viewBox="0 0 24 24"
      height={props.height ?? "24"}
      width={props.width ?? "24"}
      strokeWidth={0}
      stroke={props.stroke ?? "currentColor"}
    >
      <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path>{" "}
    </svg>
  );
}
