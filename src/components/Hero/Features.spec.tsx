import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Features } from "./Features";

describe("Features component", () => {
	it("should render", () => {
		const { container } = render(<Features />);
		expect(container).toBeInTheDocument();
	});
});
