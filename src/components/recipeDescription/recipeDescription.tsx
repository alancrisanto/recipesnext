import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "react-bootstrap";
import RatingComponent from "../rating/rating";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineRestaurant } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { BiMedal } from "react-icons/bi";

function RecipeDescription() {
	return (
		<div className="container-lg py-4 px-4">
			<div className={`d-flex flex-column flex-md-row align-items-center`}>
				<div className={`position-relative ${styles.recpImg}`}>
					<Image src="/dish4.png" width={300} height={300} alt="lorem ipsum" />
				</div>
				<div className={`recpDesc d-flex flex-column`}>
					<Button variant="success" className={`fw-semibold ${styles.button} align-self-start`}>
						Vegetarian
					</Button>
					<h3 className="pt-3">Peruvian Lomo Saltado</h3>
					<RatingComponent />
					<div className={`recpInfo d-flex flex-wrap py-3 gap-2 align-items-center`}>
						<div className="d-flex gap-2 align-items-center">
							<MdOutlineRestaurant />
							<p>10 portions</p>
						</div>
						<div className="d-flex gap-2 align-items-center">
							<RxAvatar />
							<p>Posted by: Alan Cris</p>
						</div>
						<div className="d-flex gap-2 align-items-center">
							<MdTimer />
							<p>50 min</p>
						</div>
						<div className="d-flex gap-2 align-items-center">
							<BiMedal />
							<p>Beginner</p>
						</div>
					</div>
				</div>
			</div>
			<div className={``}>
				<h4>Ingredients</h4>
				<ul>
					<li> 2 cups flour (125 g)</li>
					<li> ¼ cup sugar (50 g), or sweetener of choice</li>
					<li> 4 teaspoons baking powder</li>
					<li> ¼ teaspoon baking soda</li>
					<li> ½ teaspoon salt</li>
					<li> 1 ½ cups milk (355 mL), plus more if needed</li>
					<li> ¼ cup butter (57 g), melted</li>
					<li> 2 teaspoons vanilla</li>
					<li> 1 egg</li>
					<li> 1 cup pumpkin puree (225 g)</li>
				</ul>
			</div>
		</div>
	);
}

export default RecipeDescription;
