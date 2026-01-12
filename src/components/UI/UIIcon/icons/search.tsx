import type { SVGProps } from "react";
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 22"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.25 17.25 3.5 3.5m-1-10.5a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0"
    />
  </svg>
);
export { SearchIcon };
