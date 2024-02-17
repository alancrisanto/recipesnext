import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
import styles from "./page.module.css";
import RatingComponent from "../rating/rating";

function RecipesCards({ recImg, title, desc }: { recImg: string; title: string; desc: string }) {
	return (
		<div className={`card ${styles.card} d-flex flex-column`}>
			<FaBookmark className={`align-self-end fs-2 m-2 ${styles.bookmark}`} />
			<div className={`d-flex flex-column align-items-center ${styles.imgDiv}`}>
				<Image src={recImg} width={220} height={200} alt="recipe image" sizes="100vw" />
			</div>
			<div className={`card-body text-center`}>
				<RatingComponent />
				<h4 className="mt-2">{title}</h4>
				<p>{desc}</p>
			</div>
		</div>
	);
}

export default RecipesCards;
