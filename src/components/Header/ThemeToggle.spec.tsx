import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle component", () => {
	it("should render", () => {
		render(<ThemeToggle />);
		const toggleButton = screen.getByRole("button", { name: /theme toggle/i });
	});
});
