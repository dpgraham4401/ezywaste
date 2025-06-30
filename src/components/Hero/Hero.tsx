import { ReactElement } from "react";
import { ExampleDashboard } from "~/components/Hero/ExampleDashboard";
import { Button } from "~/components/ui/button";

export const Hero = () => (
	<section className="bg-floralWhite dark:bg-blackOlive text-darkGreen dark:text-floralWhite py-20">
		<div className="container mx-auto px-6 md:flex items-center justify-between">
			<div className="md:w-1/2">
				<h1 className="text-4xl font-bold mb-4">
					Your RCRA Compliance, Streamlined
				</h1>
				<p className="mb-6 text-cadetGray">
					Simplify hazardous waste management with automation and accurate,
					up‑to‑date data.
				</p>
				<Button className="bg-pineGreen hover:bg-darkGreen text-babyPowder font-semibold px-6 py-3 rounded">
					Get Started
				</Button>
			</div>
			<div className="md:w-1/2 mt-8 md:mt-0">
				{/* Placeholder for dashboard screenshot */}
				<div className="rounded-lg shadow-lg overflow-hidden">
					<ExampleDashboard />
				</div>
			</div>
		</div>
	</section>
);
