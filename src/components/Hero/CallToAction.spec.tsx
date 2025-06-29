import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CallToAction } from "./CallToAction";

describe("CallToAction component", () => {
	it("should render an action button", () => {
		render(<CallToAction />);
		const getStartedButton = screen.getByRole("button", {
			name: /get started/i,
		});
		expect(getStartedButton).toBeInTheDocument();
	});
});
