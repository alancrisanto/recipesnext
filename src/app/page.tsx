import Hero from "@/components/hero/hero";
import Features from "@/components/features/features";
import RecipesContainer from "@/components/recipesContainer/recipesContainer";
import NewsletterComponent from "@/components/newsletter/newsletter";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="container-xxl mt-5 py-5">
				<Features />
				<RecipesContainer />
				<NewsletterComponent />
			</div>
		</>
	);
}
