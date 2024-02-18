import styles from "./page.module.css";
import { Button } from "react-bootstrap";

function FilterButtons({ title, icon: Icon }: { title: string; icon: React.ComponentType<{ className?: string }> }) {
	return (
		<Button
			variant="outline-success"
			className={`d-flex justify-content-center align-items-center gap-3 border border-success rounded-5 ${styles.button}`}
		>
			<Icon className="fs-1 rounded-circle bg-success text-white p-1" />
			{title}
		</Button>
	);
}

export default FilterButtons;
