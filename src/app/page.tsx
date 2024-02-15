import Hero from "@/components/hero/hero";
import Features from "@/components/features/features";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="container-xxl mt-5 py-5">
				<Features />
			</div>
		</>
	);
}
