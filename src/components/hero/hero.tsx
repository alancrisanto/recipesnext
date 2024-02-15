import styles from "./page.module.css";
import { Button } from "react-bootstrap";

function Hero() {
	return (
		<div className={`px-md-5 py-md-4 ${styles.hero}`}>
			<div className={`${styles.heroGlass} p-4 p-md-0 `}>
				<Button variant={`success fw-semibold ${styles.button}`}>Our Especial Offer</Button>
				<div className="py-4">
					<h1 className={styles.title}>
						Bread Toast <br /> Avocado Especial
					</h1>
					<h2 className={`fw-light ${styles.subTitle}`}>
						Bread with avocado and egg is our special menu that loved by everyone who starving for tasty healthy food
					</h2>
				</div>
				<div className="d-flex gap-3 align-items-center">
					<p className="fs-3 fw-semibold">$7.89</p>
					<Button variant="success">Buy now</Button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
