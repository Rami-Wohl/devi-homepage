import type { SVGProps } from "react";

export default function PreviousTrackIcon({
  ...props
}: SVGProps<SVGSVGElement>) {
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
      <path
        fillRule="evenodd"
        d="M4.5 3.5A.5.5 0 004 4v8a.5.5 0 001 0V4a.5.5 0 00-.5-.5z"
        clipRule="evenodd"
      ></path>
      <path d="M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 000 1.393z"></path>
    </svg>
  );
}
