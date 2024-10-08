import type { SVGProps } from "react";
//
export default function RepeatTrackIcon({ ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M21,6h-5v2h4v9H4V8h5v3l5-4L9,3v3H3C2.447,6,2,6.447,2,7v11c0,0.553,0.447,1,1,1h18c0.553,0,1-0.447,1-1V7 C22,6.447,21.553,6,21,6z"></path>{" "}
    </svg>
  );
}
