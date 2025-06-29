import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Hero component", () => {
	it("should render", () => {
		render(<Hero />);
		const toggleButton = screen.getByRole("button", { name: /get started/i });
	});
});
