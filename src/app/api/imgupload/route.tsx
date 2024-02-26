import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
	cloudinary.config({
		cloud_name: process.env.CLOUD_NAME,
		api_key: process.env.API_KEY,
		api_secret: process.env.API_SECRET,
	});

	const data = await request.formData();
	const image = data.get("file") as File;

	if (!image) {
		return NextResponse.json("No image selected", { status: 400 });
	}

	const bytes = await image.arrayBuffer();
	const buffer = Buffer.from(bytes);

	// Create a path for the image to upload to cloudinary
	const filePath = path.join(process.cwd(), "public", image.name);

	await writeFile(filePath, buffer);

	const response = await cloudinary.uploader.upload(filePath);

	return NextResponse.json({
		message: "Image uploaded",
		url: response.secure_url,
	});
}
