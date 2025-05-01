import Link from "next/link";

function Logo() {
	return (
		<Link
			href="/"
			className="p-2 text-yellow-400 hover:text-yellow-400/80"
		>
			<h1 className="text-xl font-bold uppercase">GoFit</h1>
		</Link>
	);
}
export default Logo;
