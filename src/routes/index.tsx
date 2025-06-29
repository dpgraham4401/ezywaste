import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/")({
	component: IndexRouteComponent,
});

function IndexRouteComponent() {
	return (
		<div className="p-2">
			<h3>Home!</h3>
		</div>
	);
}
