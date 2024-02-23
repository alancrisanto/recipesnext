import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	cloudinary.config({
		cloud_name: process.env.CLOUD_NAME,
		api_key: process.env.API_KEY,
		api_secret: process.env.API_SECRET,
	});

	const data = await request.formData();
	const file = data.get("image");
	if (file instanceof File) {
		const pathimg = "D:/Code/Portfolio/recipes/public/" + file.name;

		return cloudinary.uploader
			.upload(pathimg)
			.then((result) => {
				return NextResponse.json({
					url: result.url,
				});
			})
			.catch((error) => console.log(error));
	}
}
