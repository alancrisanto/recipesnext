"use client";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoMdTime, IoMdPeople } from "react-icons/io";
import { GiHotSpices, GiShotgun } from "react-icons/gi";
import { FaTypo3 } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";

function FormRecipe() {
	type FormData = {
		title: string;
		category: string;
		mealtype: string;
		level: string;
		description: string;
		foodinfo: JSON;
		calories: number;
		fat: number;
		protein: number;
		portions: number;
		time: number;
		image: FileList;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const [err, setErr] = useState(false);

	const uploadImg = async (img: File) => {
		try {
			const formData = new FormData();
			formData.append("image", img);

			const imgRes = await fetch("/api/imgupload", {
				method: "POST",
				body: formData,
			});

			return await imgRes.json();
		} catch (error) {
			console.log(error);
			setErr(true);
			return null;
		}
	};

	const onSubmitForm = handleSubmit(async (data) => {
		console.log(data.image);
		const imgUploaded = await uploadImg(data.image[0]);
		try {
			const res = await fetch("/api/products", {
				method: "POST",
				body: JSON.stringify({ ...data, image: imgUploaded }),
				headers: {
					"content-type": "application/json",
				},
			});

			// res.status == 200 && router.push("/auth/login?success=Account has been created");
		} catch (error) {
			console.log(error);
			setErr(error as any);
		}
	});

	return (
		<Form className="rounded-3 bg-body-secondary px-3 py-3 p-md-4" onSubmit={onSubmitForm}>
			<Form.Group className="mb-3" controlId="recipeTitle">
				<Form.Label>Recipe Title</Form.Label>
				<Form.Control
					type="text"
					placeholder="Crepes with Forest"
					{...register("title", {
						required: {
							value: true,
							message: "Title is required",
						},
					})}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="recipeCategory">
				<Form.Label>Choose Category</Form.Label>
				<Form.Select
					aria-label="Default select example"
					{...register("category", {
						required: {
							value: true,
							message: "Select a category",
						},
					})}
				>
					<option>Open this select menu</option>
					<option value="vegetarian">Vegetarian</option>
					<option value="keto">Keto</option>
					<option value="vegan">Vegan</option>
					<option value="italian">Italian</option>
					<option value="raw">Raw</option>
					<option value="paleo">Paleo</option>
					<option value="mediterranean">Mediterranean</option>
					<option value="low carb">Low Carb</option>
					<option value="no sugar">No Sugar</option>
				</Form.Select>
			</Form.Group>
			<Form.Group className="mb-3" controlId="recipeCategory">
				<Form.Label>Choose Meal Type</Form.Label>
				<Form.Select
					aria-label="Default select example"
					{...register("mealtype", {
						required: {
							value: true,
							message: "Select a meal type",
						},
					})}
				>
					<option disabled>Open this select menu</option>
					<option value="breakfast">Breakfast</option>
					<option value="lunch">Lunch</option>
					<option value="dinner">Dinner</option>
					<option value="snack">Snack</option>
				</Form.Select>
			</Form.Group>

			<Form.Group className="mb-3" controlId="level">
				<Form.Label>Level</Form.Label>
				<div className="d-flex flex-wrap gap-2">
					<Form.Check // prettier-ignore
						type="radio"
						id="beginner"
						label="Beginner"
						value="beginner"
						{...register("level")}
					/>
					<Form.Check // prettier-ignore
						type="radio"
						id="medium"
						label="Medium"
						value="medium"
						{...register("level")}
					/>
					<Form.Check // prettier-ignore
						type="radio"
						id="professional"
						label="Professional"
						value="profesional"
						{...register("level")}
					/>
				</div>
			</Form.Group>
			<Form.Group className="mb-3" controlId="recipeInfo">
				<Form.Label>Description</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					{...register("description", {
						required: {
							value: true,
							message: "Please Provide a Description",
						},
					})}
				/>
			</Form.Group>
			<div className="row">
				<div className="col-md-6">
					<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon1">
							<IoMdPeople />
						</InputGroup.Text>
						<Form.Control
							placeholder="Portions: 10"
							aria-label="Username"
							aria-describedby="basic-addon1"
							{...register("portions")}
						/>
					</InputGroup>
				</div>
				<div className="col-md-6">
					<InputGroup className="mb-3">
						<InputGroup.Text id="recipeTime">
							<IoMdTime />
						</InputGroup.Text>
						<Form.Control
							placeholder="Preparation Time"
							aria-label="Username"
							aria-describedby="recipeTime"
							{...register("time")}
						/>
					</InputGroup>
				</div>
				<div className="col-md-6">
					<InputGroup className="mb-3 col-md-6">
						<InputGroup.Text id="calories">
							<GiHotSpices />
						</InputGroup.Text>
						<Form.Control
							placeholder="Calories"
							aria-label="calories"
							aria-describedby="calories"
							{...register("calories")}
						/>
					</InputGroup>
				</div>
				<div className="col-md-6">
					<InputGroup className="mb-3 col-md-6">
						<InputGroup.Text id="protein">
							<GiShotgun />
						</InputGroup.Text>
						<Form.Control
							placeholder="Protein"
							aria-label="protein"
							aria-describedby="protein"
							{...register("protein")}
						/>
					</InputGroup>
				</div>
				<div className="col-md-6">
					<InputGroup className="mb-3 col-md-6">
						<InputGroup.Text id="fat">
							<FaTypo3 />
						</InputGroup.Text>
						<Form.Control placeholder="Fat" aria-label="fat" aria-describedby="fat" {...register("fat")} />
					</InputGroup>
				</div>
			</div>
			<Form.Group controlId="formFile" className="mb-3">
				<Form.Label>Choose an Image</Form.Label>
				<Form.Control type="file" {...register("image")} />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export default FormRecipe;
