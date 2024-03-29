import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import db from "@/libs/prisma";
import bcrypt from "bcrypt";

interface User {
	id: string;
	name: string;
	email: string;
}

const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text", placeholder: "email" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials, req) {
				const userFound = await db.user.findUnique({
					where: {
						email: credentials?.email,
					},
				});

				if (!userFound) throw new Error("User not found");

				if (credentials?.password) {
					const isPasswordCorrect = await bcrypt.compare(credentials.password, userFound.password);
					if (!isPasswordCorrect) throw new Error("Invalid Password");
				} else {
					throw new Error("No password provided");
				}

				return {
					id: userFound.id.toString(),
					name: userFound.username,
					email: userFound.email,
				} as User;
			},
		}),
	],
	pages: {
		error: "/login",
		signIn: "/auth/login",
	},
	callbacks: {
		async session({ session, token }: { session: any; token: any }) {
			session.user.id = token.sub;
			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
