import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useCallback, useEffect, useState } from "react";

const THEME_KEY = "theme";
type Theme = "light" | "dark";

/**
 * Get the initial theme based on localStorage or system preference.
 */
const getInitialTheme = (): Theme => {
	if (typeof window !== "undefined") {
		const stored = localStorage.getItem(THEME_KEY);
		if (stored === "dark" || stored === "light") {
			return stored;
		}
		const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
		return prefers ? "dark" : "light";
	}
	return "light";
};

/**
 * ThemeToggle component to switch between light and dark themes.
 * It uses localStorage to persist the user's theme preference.
 */
export const ThemeToggle = () => {
	const [isDark, setIsDark] = useState<boolean>(
		() => getInitialTheme() === "dark",
	);

	const applyTheme = useCallback((theme: Theme) => {
		document.documentElement.dataset.theme = theme;
		setIsDark(theme === "dark");
	}, []);

	const toggleTheme = () => {
		const newTheme: Theme = isDark ? "light" : "dark";
		applyTheme(newTheme);
		if (typeof localStorage !== "undefined") {
			localStorage.setItem(THEME_KEY, newTheme);
		}
	};

	useEffect(() => {
		applyTheme(getInitialTheme());
	}, [applyTheme]);

	return (
		<button
			type="button"
			id="themeToggle"
			aria-label="Theme Toggle"
			className="border-none h-1/2 bg-none"
			onClick={toggleTheme}
		>
			{isDark ? (
				<MoonIcon className="h-6 w-6 hover:fill-gray-700 transition-all duration-100" />
			) : (
				<SunIcon className="h-6 w-6  hover:fill-gray-500 transition-all duration-100" />
			)}
		</button>
	);
};
