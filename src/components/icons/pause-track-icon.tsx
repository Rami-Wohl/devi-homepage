import type { SVGProps } from "react";

export default function PauseTrackIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill ?? "currentColor"}
      viewBox="0 0 16 16"
      height={props.height ?? "16"}
      width={props.width ?? "16"}
      strokeWidth={0}
      stroke={props.stroke ?? "currentColor"}
    >
      <path d="M5.5 3.5A1.5 1.5 0 017 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0112 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5z"></path>
    </svg>
  );
}
