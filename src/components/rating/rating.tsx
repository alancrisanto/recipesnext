"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./page.module.css";

function RatingComponent() {
	const [rating, setRating] = useState<number | null>(null);
	const [hover, setHover] = useState<number | null>(null);

	return (
		<div className="d-flex justify-content-center gap-1">
			{[...Array(5)].map((_, index) => {
				const ratingValue = index + 1;
				return (
					<label key={index}>
						<input
							className="d-none"
							type="radio"
							name="rating"
							value={ratingValue}
							onClick={() => setRating(ratingValue)}
						/>
						<FaStar
							className={`${styles.star}`}
							size={20}
							color={ratingValue <= (hover || rating || 0) ? "#ffcd00" : "#e4e5e9"}
							onMouseEnter={() => setHover(ratingValue)}
							onMouseOut={() => setHover(null)}
						/>
					</label>
				);
			})}
		</div>
	);
}

export default RatingComponent;
