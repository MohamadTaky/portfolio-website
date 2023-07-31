import ActiveLink from "./ActiveLink";

const routes = [
	{ label: "Home", href: "/" },
	{ label: "my work", href: "/projects" },
	{ label: "about", href: "/about" },
	{ label: "contact", href: "/contact" },
];

export default function Navbar() {
	return (
		<nav className="border-b shadow-md flex">
			{routes.map(({ label, href }) => {
				return (
					<ActiveLink key={href} href={href}>
						{label}
					</ActiveLink>
				);
			})}
		</nav>
	);
}
