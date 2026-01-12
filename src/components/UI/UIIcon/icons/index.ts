import type { FC, SVGProps } from "react";
import { BagIcon } from "./bag";
import { BurgerIcon } from "./burger";
import { CrossIcon } from "./cross";
import { HeartIcon } from "./heart";
import { InstagramIcon } from "./instagram";
import { SearchIcon } from "./search";

export const ICONS = {
  bag: BagIcon,
  burger: BurgerIcon,
  cross: CrossIcon,
  heart: HeartIcon,
  instagram: InstagramIcon,
  search: SearchIcon,
} as const;

export type IconName = keyof typeof ICONS;

export type GeneratedIconComponent = FC<SVGProps<SVGSVGElement>>;
