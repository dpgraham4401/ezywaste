import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { CallToAction } from "~/components/Hero/CallToAction";
import { Features } from "~/components/Hero/Features";
import { Hero } from "~/components/Hero/Hero";

export const Route = createFileRoute("/")({
	component: IndexRouteComponent,
});

function IndexRouteComponent() {
	return (
		<div>
			<Hero />
			<Features />
			<CallToAction />
		</div>
	);
}
