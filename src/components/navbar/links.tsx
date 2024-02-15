import { Nav } from "react-bootstrap";
import { useSession } from "next-auth/react";

const links = [
	{ id: 1, name: "Home", href: "/" },
	{ id: 2, name: "Admin", href: "/admin" },
];

export default function NavLinks() {
	const { data: session } = useSession();
	return (
		<>
			{links.map((link) => {
				if (link.name === "Admin" && !session) {
					return null;
				}
				return (
					<Nav.Link key={link.id} href={link.href}>
						{link.name}
					</Nav.Link>
				);
			})}
		</>
	);
}
