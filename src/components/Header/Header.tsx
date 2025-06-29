import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import type React from "react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = ["Features", "Pricing", "Contact"];

export const Header: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="bg-floralWhite dark:bg-dark-floral-white text-darkGreen dark:text-floralWhite shadow">
			<div className="container mx-auto px-6 flex justify-between items-center h-16">
				<a href="/" className="text-xl font-semibold" aria-label="EZ Waste">
					EZ Waste
				</a>

				<nav className="hidden md:flex space-x-6 items-center">
					{navItems.map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							className="hover:text-pineGreen dark:hover:text-pine-green transition-colors"
						>
							{item}
						</a>
					))}
					<ThemeToggle />
					<button
						className="ml-4 bg-pineGreen hover:bg-darkGreen text-babyPowder px-4 py-2 rounded"
						type="button"
					>
						Get Started
					</button>
				</nav>

				{/* Mobile menu toggle */}
				<button
					className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pineGreen"
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

			{/* Mobile menu */}
			{mobileOpen && (
				<nav className="md:hidden bg-babyPowder dark:bg-dark-baby-powder px-6 pb-4 space-y-4">
					{navItems.map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							className="block text-lg text-darkGreen dark:text-floralWhite hover:text-pineGreen dark:hover:text-pine-green"
							onClick={() => setMobileOpen(false)}
						>
							{item}
						</a>
					))}
					<ThemeToggle />
					<button
						className="w-full bg-pineGreen hover:bg-darkGreen text-babyPowder px-4 py-2 rounded"
						type="button"
					>
						Get Started
					</button>
				</nav>
			)}
		</header>
	);
};
