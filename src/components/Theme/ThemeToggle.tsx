// ThemeToggle.tsx
import type React from "react";
import { useCallback, useEffect, useState } from "react";

const THEME_KEY = "theme";
type Theme = "light" | "dark";

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

export const ThemeToggle: React.FC = () => {
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [applyTheme]);

	return (
		<button
			type="button"
			id="themeToggle"
			aria-label="Theme Toggle"
			className="border-none h-1/2 bg-none"
			onClick={toggleTheme}
		>
			{isDark ? "dark" : "light"}
		</button>
	);
};
