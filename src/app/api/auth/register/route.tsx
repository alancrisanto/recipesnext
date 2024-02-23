import { NextResponse } from "next/server";
import db from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function POST(request: any) {
	const data = await request.json();

	// Verify if the email already exists
	const emailFound = await db.user.findUnique({
		where: {
			email: data.email,
		},
	});

	if (emailFound) {
		return NextResponse.json(
			{
				message: "Email already exists",
			},
			{
				status: 400,
			},
		);
	}

	// Encrypt the password
	const hashedPassword = await bcrypt.hash(data.password, 10);

	const newUser = await db.user.create({
		data: {
			username: data.username,
			lastname: data.lastname,
			email: data.email,
			password: hashedPassword,
		},
	});

	const { password: _, ...user } = newUser;
	return NextResponse.json(user);
}
