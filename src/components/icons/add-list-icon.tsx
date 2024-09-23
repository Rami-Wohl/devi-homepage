import type { SVGProps } from "react";

export default function AddListIcon({ ...props }: SVGProps<SVGSVGElement>) {
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
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M18 15l-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15h2zm-7 3v2H3v-2h8zm10-7v2H3v-2h18zm0-7v2H3V4h18z"></path>
      </g>{" "}
    </svg>
  );
}
