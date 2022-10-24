import { SVGProps } from "react";

export function CollapseArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="35"
      height="20"
      viewBox="0 0 35 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3L17.5 17L32 3"
        stroke="#343942"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
