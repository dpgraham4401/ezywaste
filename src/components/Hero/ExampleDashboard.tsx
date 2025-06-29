export const ExampleDashboard = () => {
	return (
		<section className="container mx-auto px-6 py-8">
			<div className="bg-floralWhite dark:bg-blackOlive rounded-lg shadow p-6">
				<h2 className="text-2xl text-darkGreen dark:text-floralWhite font-semibold mb-4">
					Compliance Overview
				</h2>
				<div className="flex items-center mb-6">
					<span className="bg-pineGreen text-babyPowder dark:bg-brunswickGreen dark:text-floralWhite px-3 py-1 rounded-full text-sm">
						STAY COMPLIANT
					</span>
					<div className="flex-1 ml-4 h-2 bg-transparent dark:bg-cadetGray dark:outline-none rounded-full overflow-hidden outline-1">
						<div className="w-3/4 bg-pineGreen dark:bg-brunswickGreen h-full"></div>
					</div>
				</div>
				<table className="w-full text-left">
					<thead>
						<tr>
							<th className="dark:text-ashGray text-feldgrau">Manifest ID</th>
							<th className="dark:text-ashGray text-feldgrau">Site</th>
							<th className="dark:text-ashGray text-feldgrau">Status</th>
						</tr>
					</thead>
					<tbody>
						{[
							{ id: "000123456ELC", site: "Acme Inc.", status: "Submitted" },
							{ id: "000123457ELC", site: "Beta Corp.", status: "Submitted" },
							{ id: "000123453ELC", site: "Gamma Ltd.", status: "Draft" },
						].map((row) => (
							<tr
								key={row.id}
								className="border-t border-gray-200 dark:border-feldgrau"
							>
								<td className="py-2 text-darkGreen dark:text-floralWhite">
									{row.id}
								</td>
								<td className="text-darkGreen dark:text-floralWhite">
									{row.site}
								</td>
								<td
									className={`text-pineGreen dark:text-floralWhite font-medium`}
								>
									{row.status}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};
