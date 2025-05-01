import { HEADER_HEIGHT } from "@/lib/constants";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import NavMenu from "./NavMenu";

function Navbar() {
	return (
		<header className="bg-slate-800 text-slate-50">
			<MaxWidthWrapper
				className="flex justify-between items-center"
				style={{ minHeight: HEADER_HEIGHT }}
			>
				<Logo />

				{/* RIGHT SIDE */}
				<div className="flex justify-between items-center gap-2 md:gap-3">
					<NavMenu />

					{/* TODO: Conditional rendering for sign in and sign up features */}
				</div>
				{/* TODO: Mobile NavMenu */}
			</MaxWidthWrapper>
		</header>
	);
}
export default Navbar;
