import type { SVGProps } from "react";

export default function AccountIcon({ ...props }: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			fill={props.fill ?? "none"}
			viewBox='0 0 24 24'
			height={props.height ?? "24"}
			width={props.width ?? "24"}
			strokeWidth={0.5}
			stroke={props.stroke ?? "currentColor"}
		>
			<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'></path>
		</svg>
	);
}
