import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import type React from "react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navItems = ["Features", "Pricing", "Contact"];

const GetStartedButton = () => (
	<Button variant="destructive">Get Started</Button>
);

export const Header: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="bg-floralWhite text-darkGreen dark:bg-jet dark:text-floralWhite shadow">
			<div className="container mx-auto px-6 flex justify-between items-center h-16">
				<a
					href="/"
					className="text-xl font-semibold hover:text-pineGreen dark:hover:text-brunswickGreen"
					type="button"
				>
					EZ Waste
				</a>
				<nav className="hidden md:flex space-x-6 items-center">
					{navItems.map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							className="hover:text-pineGreen dark:hover:text-brunswickGreen transition-colors"
						>
							{item}
						</a>
					))}
					<ThemeToggle />
					<GetStartedButton />
				</nav>
				<button
					className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pineGreen dark:focus:ring-brunswickGreen"
					type="button"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label="Toggle menu"
				>
					{mobileOpen ? (
						<XMarkIcon className="h-6 w-6" />
					) : (
						<Bars3Icon className="h-6 w-6" />
					)}
				</button>
			</div>
			{mobileOpen && (
				<nav className="md:hidden bg-babyPowder dark:bg-jet px-6 pb-4 space-y-4">
					{navItems.map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							className="block text-lg text-darkGreen dark:text-floralWhite hover:text-pineGreen dark:hover:text-brunswickGreen"
							onClick={() => setMobileOpen(false)}
						>
							{item}
						</a>
					))}
					<ThemeToggle />
					<GetStartedButton />
				</nav>
			)}
		</header>
	);
};
