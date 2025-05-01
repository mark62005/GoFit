"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavLink } from "@/types/app/components";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavLinkProps {
	navLink: INavLink;
}

function NavLink({ navLink }: NavLinkProps) {
	const pathname = usePathname();

	const isActive = pathname === navLink.href;

	return (
		<Link
			href={navLink.href}
			key={navLink.href}
		>
			<Button
				variant={"link"}
				className={cn(
					"rounded-md text-gray-50",
					isActive
						? "underline underline-offset-4 hover:underline-offset-8"
						: ""
				)}
			>
				{navLink.label}
			</Button>
		</Link>
	);
}
export default NavLink;
