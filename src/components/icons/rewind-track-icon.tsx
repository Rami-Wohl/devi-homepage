import type { SVGProps } from "react";

export default function RewindTrackIcon({ ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path>
    </svg>
  );
}
