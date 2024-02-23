"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FcGoogle } from "react-icons/fc";
import styles from "./page.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Login() {
	const [err, setErr] = useState(null);
	type FormData = {
		email: string;
		password: string;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const router = useRouter();

	const onSubmitForm = handleSubmit(async (data) => {
		const res = await signIn("credentials", {
			email: data.email,
			password: data.password,
			redirect: false,
		});

		if (res?.error) {
			setErr(res.error as any);
		} else {
			router.push("/");
		}
	});

	return (
		<div className="container-xxl p-4 p-md-0">
			<div className={`loginForm px-md-5 ${styles.loginForm}`}>
				<h3 className="text-center mt-4">Welcome Back</h3>
				<p className="text-center">Sign in to access an enhanced shopping experience.</p>
				{err && <p className="text-white text-center bg-danger py-1 my-3">{err}</p>}
				<Form className={`d-flex flex-column my-4 mx-xl-auto  ${styles.formLogin}`} onSubmit={onSubmitForm}>
					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							type="email"
							placeholder="example@domain.com"
							{...register("email", {
								required: {
									value: true,
									message: "Email is required",
								},
							})}
						/>
						<span className="text-danger">{errors.email?.message}</span>
					</Form.Group>

					<Form.Group className="mb-3" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter password here"
							{...register("password", {
								required: {
									value: true,
									message: "Password is required",
								},
							})}
						/>
						<span className="text-danger">{errors.password?.message}</span>
					</Form.Group>
					<Button variant="primary" type="submit" className="mt-3">
						Login
					</Button>
				</Form>
				<div className="Login-google d-flex justify-content-center ">
					<Button
						onClick={() => signIn("google", { callbackUrl: "/" })}
						variant="outline-secondary"
						className="d-flex align-items-center justify-content-center"
					>
						<FcGoogle className="me-2" size={24} /> Login with Google
					</Button>
				</div>
				<div className="my-5 d-flex gap-2 justify-content-center align-items-center">
					<p>Not a member?</p>
					<Link href="/auth/register">Join us</Link>
				</div>
			</div>
		</div>
	);
}

export default Login;
