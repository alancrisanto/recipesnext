"use client";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoMdTime, IoMdPeople } from "react-icons/io";
import { GiHotSpices, GiShotgun } from "react-icons/gi";
import { FaTypo3 } from "react-icons/fa";

function FormRecipe() {
	return (
		<Form className="rounded-3 bg-body-secondary px-3 py-3 p-md-4">
			<Form.Group className="mb-3" controlId="recipeTitle">
				<Form.Label>Recipe Title</Form.Label>
				<Form.Control type="text" placeholder="Crepes with Forest" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="recipeCategory">
				<Form.Label>Choose Category</Form.Label>
				<Form.Select aria-label="Default select example">
					<option>Open this select menu</option>
					<option value="1">Vegetarian</option>
					<option value="2">Keto</option>
					<option value="3">Italian</option>
				</Form.Select>
			</Form.Group>
			<Form.Group className="mb-3" controlId="mealType">
				<Form.Label>Meal Type</Form.Label>
				<div className="d-flex flex-wrap gap-2">
					<Form.Check // prettier-ignore
						type="checkbox"
						id="breakfast"
						label="Breakfast"
					/>
					<Form.Check // prettier-ignore
						type="checkbox"
						id="lunch"
						label="Lunch"
					/>
					<Form.Check // prettier-ignore
						type="checkbox"
						id="dinner"
						label="Dinner"
					/>
				</div>
			</Form.Group>
			<Form.Group className="mb-3" controlId="level">
				<Form.Label>Level</Form.Label>
				<div className="d-flex flex-wrap gap-2">
					<Form.Check // prettier-ignore
						type="radio"
						name="level"
						id="beginner"
						label="Beginner"
					/>
					<Form.Check // prettier-ignore
						type="radio"
						name="level"
						id="medium"
						label="Medium"
					/>
					<Form.Check // prettier-ignore
						type="radio"
						name="level"
						id="professional"
						label="Professional"
					/>
				</div>
			</Form.Group>
			<Form.Group className="mb-3" controlId="recipeInfo">
				<Form.Label>Description</Form.Label>
				<Form.Control as="textarea" rows={3} />
			</Form.Group>
			<div className="row">
				<div className="col-md-6">
					<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon1">
							<IoMdPeople />
						</InputGroup.Text>
						<Form.Control placeholder="Portions: 10" aria-label="Username" aria-describedby="basic-addon1" />
					</InputGroup>
				</div>
				<div className="col-md-6">
					<InputGroup className="mb-3">
						<InputGroup.Text id="recipeTime">
							<IoMdTime />
						</InputGroup.Text>
						<Form.Control placeholder="Preparation Time" aria-label="Username" aria-describedby="recipeTime" />
					</InputGroup>
				</div>
				<div className="col-md-6">
					<InputGroup className="mb-3 col-md-6">
						<InputGroup.Text id="calories">
							<GiHotSpices />
						</InputGroup.Text>
						<Form.Control placeholder="Calories" aria-label="calories" aria-describedby="calories" />
					</InputGroup>
				</div>
				<div className="col-md-6">
					<InputGroup className="mb-3 col-md-6">
						<InputGroup.Text id="protein">
							<GiShotgun />
						</InputGroup.Text>
						<Form.Control placeholder="Protein" aria-label="protein" aria-describedby="protein" />
					</InputGroup>
				</div>
				<div className="col-md-6">
					<InputGroup className="mb-3 col-md-6">
						<InputGroup.Text id="fat">
							<FaTypo3 />
						</InputGroup.Text>
						<Form.Control placeholder="Fat" aria-label="fat" aria-describedby="fat" />
					</InputGroup>
				</div>
			</div>
			<Form.Group controlId="formFile" className="mb-3">
				<Form.Label>Choose an Image</Form.Label>
				<Form.Control type="file" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export default FormRecipe;
