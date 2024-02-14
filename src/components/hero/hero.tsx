import styles from "./page.module.css";
import { Button } from "react-bootstrap";

function Hero() {
	return (
		<div className={styles.hero}>
			<Button variant={`success fw-semibold ${styles.button}`}>Our Especial Offer</Button>
			<div className="py-4">
				<h1>Bread Toast Avocado Especial</h1>
				<h2 className="fs-5 fw-light ">
					Bread with avocado and egg is our special menu that loved by everyone who starving for tasty healthy food
				</h2>
			</div>
			<div className="d-flex gap-3 align-items-center">
				<p className="fs-3 fw-semibold">$7.89</p>
				<Button variant="success">Buy now</Button>
			</div>
		</div>
	);
}

export default Hero;
