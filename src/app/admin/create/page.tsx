"use client";
import FormRecipe from "@/components/recipesForm/recipesForm";
import styles from "./page.module.css";

function CreateRecipe() {
	return (
		<div className={`py-5 px-4 ${styles.formContainer}`}>
			<FormRecipe />
		</div>
	);
}

export default CreateRecipe;
