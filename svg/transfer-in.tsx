import { SVGProps } from "react";

export function TransferIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="32" cy="32" r="32" fill="#06CB99" fillOpacity="0.1" />
      <path
        d="M19 41.375V46.25H45V23.5L32 17L19 23.5V28.375M19 34.875H33.625H19Z"
        fill="#06CB99"
        fillOpacity="0.1"
      />
      <path
        d="M19 41.375V46.25H45V23.5L32 17L19 23.5V28.375M19 34.875H33.625"
        stroke="#06CB99"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.75 30L33.625 34.875L28.75 39.75"
        fill="#06CB99"
        fillOpacity="0.1"
      />
      <path
        d="M28.75 30L33.625 34.875L28.75 39.75"
        stroke="#06CB99"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
