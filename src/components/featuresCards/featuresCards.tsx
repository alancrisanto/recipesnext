import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { FaChevronRight } from "react-icons/fa6";

function FeaturesCards({ img, title, desc }: { img: string; title: string; desc: string }) {
	return (
		<div className={`card d-flex flex-column justify-content-center align-items-center border-0 py-4 ${styles.card}`}>
			<div
				className={`${styles.cardImg} d-flex justify-content-center align-items-center  rounded-circle bg-white p-2`}
			>
				<Image src={img} alt="logo" width={110} height={110} />
			</div>
			<div
				className={`${styles.cardBody} px-4 pb-4 d-flex flex-column gap-2 justify-content-center align-items-center`}
			>
				<h4 className="mt-5 pt-3">{title}</h4>
				<p className="text-center">{desc}</p>
				<a
					href="#"
					className="text-left d-flex justify-content-center align-items-center text-danger  link-underline-success link-success link-underline-opacity-0 link-underline-opacity-75-hover"
				>
					Learn More
					<FaChevronRight />
				</a>
			</div>
		</div>
	);
}

export default FeaturesCards;
