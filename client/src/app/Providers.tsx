import { LayoutProps } from "@/types/app/page-props";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "@/state/redux";

function Providers({ children }: LayoutProps) {
	return (
		<StoreProvider>
			<ClerkProvider>{children}</ClerkProvider>
		</StoreProvider>
	);
}
export default Providers;
