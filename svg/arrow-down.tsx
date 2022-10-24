import { SVGProps } from "react";

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="14"
      height="7"
      viewBox="0 0 19 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 1.5L9.5 8.5L17.5 1.5"
        stroke="#707276"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
