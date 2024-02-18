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
				<RecipesCards recImg="/dish1.png" title="Chicken Breast Stick" desc="Lorem ipsum dolor sit amet consectetur." />
				<RecipesCards
					recImg="/dish2.png"
					title="Potato Fritters Sour Cream"
					desc="Lorem ipsum dolor sit amet consectetur."
				/>
				<RecipesCards recImg="/dish3.png" title="Beef Roulade" desc="Lorem ipsum dolor sit amet consectetur." />
				<RecipesCards recImg="/dish4.png" title="Greek Salad" desc="Lorem ipsum dolor sit amet consectetur." />
				<RecipesCards recImg="/dish5.png" title="Italian Spaghetti" desc="Lorem ipsum dolor sit amet consectetur." />
				<RecipesCards
					recImg="/dish6.png"
					title="Spaghetti and Chicken"
					desc="Lorem ipsum dolor sit amet consectetur."
				/>
				<RecipesCards recImg="/dish7.png" title="Peruvian Ceviche" desc="Lorem ipsum dolor sit amet consectetur." />
				<RecipesCards
					recImg="/dish8.png"
					title="Peruvian Lomo Saltado"
					desc="Lorem ipsum dolor sit amet consectetur."
				/>
			</div>
		</div>
	);
}

export default RecipesContainer;
