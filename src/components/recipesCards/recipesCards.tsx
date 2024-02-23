import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
import styles from "./page.module.css";
import RatingComponent from "../rating/rating";
import Link from "next/link";

async function getData() {
	const res = await fetch("http://localhost:3000/api/products", { next: { revalidate: 3600 } });
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
// { recImg, title, desc }: { recImg: string; title: string; desc: string }
async function RecipesCards() {
	const recipes = await getData();

	return (
		<>
			{recipes.map((item: any, i: number) => (
				<div className={`card ${styles.card} d-flex flex-column`} key={i}>
					<FaBookmark className={`align-self-end fs-2 m-2 ${styles.bookmark}`} />
					<div className={`d-flex flex-column align-items-center ${styles.imgDiv}`}>
						<Image src={item.picture} width={220} height={200} alt="recipe image" sizes="100vw" />
					</div>
					<div className={`card-body text-center d-flex flex-column justify-content-center align-items-center`}>
						<RatingComponent />
						<Link href="/products" className="text-dark">
							<h4 className="mt-2">{item.title}</h4>
						</Link>
						<p>{item.description}</p>
					</div>
				</div>
			))}
		</>
	);
}

export default RecipesCards;
