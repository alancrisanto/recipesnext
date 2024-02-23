import { NextResponse, NextRequest } from "next/server";
import db from "@/libs/prisma";

export async function GET() {
	const resp = await db.recipe.findMany();
	console.log("resp many", resp);
	return NextResponse.json({
		message: "hello world",
	});
}

export async function POST(request: NextRequest) {
	const fields = await request.json();
	console.log("api data,json", fields);
	// console.log("api image", fields.image[0]);

	// const resp = await db.recipe.create({
	// 	data: {
	// 		title: fields.title,
	// 		description: fields.description,
	// 		picture: fields.picture[0],
	// 		foodInfo: fields.foodInfo,
	// 		cousine_type: fields.cousinetype,
	// 		meal_type: fields.mealtype,
	// 		level: fields.level,
	// 		category: fields.category,
	// 	},
	// });
	return NextResponse.json({
		message: "creating product",
	});
}
