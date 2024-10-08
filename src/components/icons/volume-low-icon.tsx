import type { SVGProps } from "react";

export default function VolumeLowIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill ?? "currentColor"}
      viewBox="0 0 512 512"
      height={props.height ?? "24"}
      width={props.width ?? "24"}
      strokeWidth={0}
      stroke={props.stroke ?? "currentColor"}
    >
      <path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256z"></path>
    </svg>
  );
}
