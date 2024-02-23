import { NextResponse, NextRequest } from "next/server";
import db from "@/libs/prisma";

export async function GET() {
	const resp = await db.recipe.findMany();
	console.log(resp);
	return NextResponse.json(resp);
}

export async function POST(request: NextRequest) {
	const fields = await request.json();
	const foodInfo = {
		fat: fields.fat,
		calories: fields.calories,
		protein: fields.protein,
		portions: fields.portions,
		time: fields.time,
	};

	const resp = await db.recipe.create({
		data: {
			title: fields.title,
			description: fields.description,
			picture: fields.image,
			foodInfo: [foodInfo],
			cousine_type: fields.coursinetype,
			meal_type: fields.mealtype,
			level: fields.level,
			category: fields.category,
			author: {
				connect: { id: fields.author },
			},
		},
	});

	return NextResponse.json({
		message: "creating product",
	});
}
