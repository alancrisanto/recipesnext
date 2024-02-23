import { UpdateRecipe, DeleteRecipe, CreateRecipe } from "./buttons";
import Table from "react-bootstrap/Table";
import Image from "next/image";

function RecipesTable() {
	const recipes: any = [
		{
			id: 1,
			image: "/dish1.png",
			title: "lomo Saltado",
			description: "loremloremlorem lorem lorempsum ipsum",
			date: "02/02/23",
		},
		{
			id: 1,
			image: "/dish1.png",
			title: "lomo Saltado",
			description: "lorem lorem lorem lorem lorem ipsum ipsum",
			date: "02/02/23",
		},
		{
			id: 1,
			image: "/dish1.png",
			title: "lomo Saltado",
			description: "lorem lorem lorem lorem lorem ipsum ipsum",
			date: "02/02/23",
		},
	];

	return (
		<div className="my-5 px-3 px-md-4">
			<div className="d-flex justify-content-end py-4">
				<CreateRecipe />
			</div>
			<Table responsive>
				<thead>
					<tr className="">
						<th className="fw-bold">Title</th>
						<th className="fw-bold">Description</th>
						<th className="fw-bold">Date</th>
						<th className="fw-bold">Actions</th>
					</tr>
				</thead>
				<tbody className="table-group-divider">
					{recipes?.map((recipe: any) => (
						<tr key={recipe.id}>
							<td className="whitespace-nowrap py-3">
								<div className="d-flex flex-column flex-md-row align-items-center gap-3">
									<Image
										src={recipe.image}
										className="rounded-full"
										width={28}
										height={28}
										alt={`${recipe.title}'s profile picture`}
									/>
									<p>{recipe.title}</p>
								</div>
							</td>
							<td className="whitespace-nowrap px-3 py-3">{recipe.description}</td>

							<td className="whitespace-nowrap px-3 py-3">{recipe.date}</td>
							<td className="whitespace-nowrap py-3">
								<div className="d-flex flex-wrap gap-2">
									<UpdateRecipe id={recipe.id} />
									<DeleteRecipe id={recipe.id} />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default RecipesTable;
