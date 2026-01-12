import type { SVGProps } from "react";
const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 18"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.692 3.917a1 1 0 0 1-1.384 0l-.693-.664A4.5 4.5 0 0 0 2 6.5c0 2.383 1.29 4.35 3.152 5.967s4.091 2.69 5.423 3.238c.278.115.572.115.85 0 1.332-.548 3.56-1.62 5.423-3.238S20 8.883 20 6.5a4.5 4.5 0 0 0-7.615-3.247zM11 1.81A6.5 6.5 0 0 0 0 6.5c0 6.368 6.97 9.885 9.814 11.055a3.1 3.1 0 0 0 2.372 0C15.03 16.385 22 12.868 22 6.5a6.5 6.5 0 0 0-11-4.69"
      clipRule="evenodd"
    />
  </svg>
);
export { HeartIcon };
