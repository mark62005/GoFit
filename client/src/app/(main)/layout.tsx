import { LayoutProps } from "@/types/app/page-props";

function AppLayout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col w-full h-full">
			<main className="">{children}</main>
		</div>
	);
}
export default AppLayout;
