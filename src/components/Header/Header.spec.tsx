import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header component", () => {
	it("should render a logo", () => {
		render(<Header />);
		const logo = screen.getByAltText(/EZ waste/i);
		expect(logo).toBeInTheDocument();
	});
});
