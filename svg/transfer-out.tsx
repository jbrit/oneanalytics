import { SVGProps } from "react";

export function TransferOut(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="32" fill="#E26AB6" fillOpacity="0.1" />
      <path
        d="M19 43.375V46.625H45V23.875L32 17.375L19 23.875V27.125M33.625 35.25H19"
        stroke="#E26AB6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.875 30.375L19 35.25L23.875 40.125"
        stroke="#E26AB6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
