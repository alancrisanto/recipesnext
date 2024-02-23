import { NextResponse, NextRequest } from "next/server";
import db from "@/libs/prisma";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
	const resp = await db.recipe.findUnique({
		where: {
			id: parseInt(params.id),
		},
	});
	return NextResponse.json({
		message: "Getting one product",
	});
}

export function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
	return NextResponse.json({
		message: `Deleting one product ${params.id}`,
	});
}

export function PUT(request: NextRequest, { params }: { params: { id: string } }) {
	return NextResponse.json({
		message: `updating one product ${params.id}`,
	});
}
