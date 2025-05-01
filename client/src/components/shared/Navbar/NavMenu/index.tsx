import { INavLink } from "@/types/app/components";
import { NAV_LINKS_CONFIG } from "@/lib/constants";
import NavLink from "./NavLink";

function NavMenu() {
	return (
		<nav className="hidden justify-around items-center md:flex">
			{NAV_LINKS_CONFIG.map((navLink: INavLink) => (
				<NavLink
					navLink={navLink}
					key={navLink.href}
				/>
			))}
		</nav>
	);
}
export default NavMenu;
