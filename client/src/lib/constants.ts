import { INavLink } from "@/types/app/components";

export const HEADER_HEIGHT = 56;
export const MAIN_HEIGHT = `calc(100vh - ${HEADER_HEIGHT}px)`;

/* NAVLINKS CONFIG */
export const NAV_LINKS_CONFIG: INavLink[] = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/about",
		label: "About Us",
	},
] as const;
