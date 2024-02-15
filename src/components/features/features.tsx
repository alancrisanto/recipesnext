import FeaturesCards from "../featuresCards/featuresCards";

function Features() {
	return (
		<div className="features-container">
			<div className="feature-title text-center">
				<p className="fs-5 text-success py-3 fw-bold text-uppercase">Features</p>
				<h3 className="pb-5">Ger a many of interesting features</h3>
			</div>
			<div className="cards-container d-flex flex-wrap gap-3 justify-content-center align-items-center">
				<FeaturesCards
					img="/menu.png"
					title="Menu Variantions"
					desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, recusandae!"
				/>
				<FeaturesCards
					img="/pan.png"
					title="Cooking Warw"
					desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, recusandae!"
				/>
				<FeaturesCards
					img="/chef.png"
					title="Best Chef"
					desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, recusandae!"
				/>
				<FeaturesCards
					img="/salad.png"
					title="Fast Food"
					desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, recusandae!"
				/>
			</div>
		</div>
	);
}

export default Features;
