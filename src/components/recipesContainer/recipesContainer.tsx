import FilterButtons from "../filterButtons/filterButtons";
import RecipesCards from "../recipesCards/recipesCards";
import { PiHamburger } from "react-icons/pi";
import { GiSteak } from "react-icons/gi";
import { LuSalad } from "react-icons/lu";
import { MdLocalDrink } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";

function RecipesContainer() {
	return (
		<div className="mt-5 pt-5">
			<h3 className="text-center">Our Speciality Cousine</h3>
			<div className="buttonsContainer py-5 d-flex flex-wrap gap-2 justify-content-center align-items-center">
				<FilterButtons title="Burguers" icon={PiHamburger} />
				<FilterButtons title="Steaks" icon={GiSteak} />
				<FilterButtons title="Salads" icon={LuSalad} />
				<FilterButtons title="Drinks" icon={MdLocalDrink} />
				<FilterButtons title="More Menu" icon={BiSolidDish} />
			</div>
			<div className={`cardsContainer d-flex flex-wrap justify-content-center gap-3`}>
				<RecipesCards />
			</div>
		</div>
	);
}

export default RecipesContainer;
