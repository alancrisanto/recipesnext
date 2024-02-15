import Hero from "@/components/hero/hero";
import Features from "@/components/features/features";

export default function Home() {
	return (
		<div className="px-4 px-md-0">
			<Hero />
			<div className="container-xxl mt-5 py-5">
				<Features />
			</div>
		</div>
	);
}
