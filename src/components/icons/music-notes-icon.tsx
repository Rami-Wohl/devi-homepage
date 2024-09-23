import type { SVGProps } from "react";

export default function MusicNotesIcon({ ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"></path>
      <path
        fillRule="evenodd"
        d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
        clipRule="evenodd"
      ></path>
      <path d="M5 2.905a1 1 0 01.9-.995l8-.8a1 1 0 011.1.995V3L5 4V2.905z"></path>
    </svg>
  );
}
