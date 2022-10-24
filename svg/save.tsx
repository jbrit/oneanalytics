import { SVGProps } from "react";

export function Save(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="28" fill="#161B22" />
      <path
        d="M30.25 17L37 23.6V36.8C37 37.3835 36.7629 37.9431 36.341 38.3556C35.919 38.7682 35.3467 39 34.75 39H21.25C20.6533 39 20.081 38.7682 19.659 38.3556C19.2371 37.9431 19 37.3835 19 36.8V19.2C19 18.6165 19.2371 18.0569 19.659 17.6444C20.081 17.2318 20.6533 17 21.25 17H30.25ZM34.75 36.8V24.7H29.125V19.2H21.25V36.8H34.75ZM28 35.7L23.5 31.3H26.3125V28H29.6875V31.3H32.5L28 35.7Z"
        fill="#818387"
      />
    </svg>
  );
}
