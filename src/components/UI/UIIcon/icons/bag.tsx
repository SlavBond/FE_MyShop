import type { SVGProps } from "react";
const BagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 21 20"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.03 3.75v1a3 3 0 0 0 6 0v-1"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.64.75H6.419a4 4 0 0 0-3.946 3.342l-1.666 10A4 4 0 0 0 4.75 18.75h10.557a4 4 0 0 0 3.945-4.658l-1.667-10A4 4 0 0 0 13.641.75Z"
    />
  </svg>
);
export { BagIcon };
