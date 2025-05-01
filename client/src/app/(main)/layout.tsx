import { LayoutProps } from "@/types/app/page-props";

function AppLayout({ children }: LayoutProps) {
	return (
		<div className="">
			<main className="">{children}</main>
		</div>
	);
}
export default AppLayout;
