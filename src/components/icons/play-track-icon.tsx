import type { SVGProps } from "react";

export default function PlayTrackIcon({ ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path>{" "}
    </svg>
  );
}
