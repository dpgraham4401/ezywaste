import {
	BellAlertIcon,
	ClipboardDocumentCheckIcon,
	ShieldCheckIcon,
} from "@heroicons/react/20/solid";
import type React from "react";

const features = [
	{
		title: "Track Every Manifest",
		description:
			"Automatically import and validate your manifests against EPA requirements.",
		Icon: ClipboardDocumentCheckIcon,
	},
	{
		title: "Always Audit‑Ready",
		description:
			"Securely store all your documentation and track status in real time.",
		Icon: ShieldCheckIcon,
	},
	{
		title: "Stay Ahead of Regs",
		description:
			"Get proactive alerts on regulatory changes so you can stay compliant.",
		Icon: BellAlertIcon,
	},
];

export const Features: React.FC = () => (
	<section className="bg-babyPowder dark:bg-dark-baby-powder text-darkGreen dark:text-floralWhite py-16">
		<div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
			{features.map(({ title, description, Icon }) => (
				<div key={title} className="flex flex-col items-center text-center">
					<Icon className="h-12 w-12 mb-4 text-pineGreen dark:text-pineGreen" />
					<h3 className="text-xl font-semibold mb-2">{title}</h3>
					<p className="text-cadetGray dark:text-dark-cadet-gray">
						{description}
					</p>
				</div>
			))}
		</div>
	</section>
);
