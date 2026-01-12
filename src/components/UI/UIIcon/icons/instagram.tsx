import type { SVGProps } from "react";
const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 22"
    width="1em"
    height="1em"
    {...props}
  >
    <rect x={0.75} y={0.75} stroke="currentColor" strokeWidth={1.5} rx={4} />
    <circle cx={16.75} cy={4.75} r={1} fill="currentColor" />
    <circle
      cx={10.75}
      cy={10.75}
      r={5}
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);
export { InstagramIcon };
