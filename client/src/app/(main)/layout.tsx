import { LayoutProps } from "@/types/app/page-props";
import Navbar from "@/components/shared/Navbar";

function AppLayout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col w-full h-full">
			<Navbar />
			<main className="">{children}</main>
		</div>
	);
}
export default AppLayout;
