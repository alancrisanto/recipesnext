"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function SignUp() {
	type FormData = {
		username: string;
		lastname: string;
		email: string;
		password: string;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const [err, setErr] = useState(false);
	const router = useRouter();

	const onSubmitForm = handleSubmit(async (data) => {
		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"content-type": "application/json",
				},
			});

			res.status == 200 && router.push("/auth/login?success=Account has been created");
		} catch (error) {
			console.log(error);
			setErr(error as any);
		}
	});
	return (
		<div className="login-signup container-xxl p-4 p-md-0">
			<div className="login-container row m-0">
				<div className="login-img d-none d-md-block col-md-6 position-relative">
					<Image src="/landscape.jpg" alt="imagen" fill={true} />
				</div>
				<div className="login-form col-md-6 px-md-5">
					<h3 className="text-center mt-4">Get&#39;s started</h3>
					{err && <p className="text-danger text-center py-4">{err}</p>}
					<Form className={`d-flex flex-column my-5 mx-xl-auto  ${styles.formLogin}`} onSubmit={onSubmitForm}>
						<Row className="mb-3">
							<Form.Group className="mb-3 mb-lg-0" as={Col} xs={12} lg={6} controlId="name">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="David"
									{...register("username", {
										required: {
											value: true,
											message: "Name is required",
										},
									})}
								/>
								<span className="text-danger">{errors.username?.message}</span>
							</Form.Group>

							<Form.Group as={Col} xs={12} lg={6} controlId="lastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Clerk"
									{...register("lastname", {
										required: {
											value: true,
											message: "Last name  is required",
										},
									})}
								/>
								<span className="text-danger">{errors.lastname?.message}</span>
							</Form.Group>
						</Row>

						<Form.Group className="mb-3" controlId="usermail">
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

						<Form.Group className="mb-3" id="formGridCheckbox">
							<Form.Check
								className={styles.formCheckbox}
								type="checkbox"
								label="I agree to Terms of Service & Privacy Policy"
								required
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Register
						</Button>
					</Form>

					<div className="Login-google d-flex justify-content-center ">
						<Button variant="outline-secondary" className="d-flex align-items-center justify-content-center">
							<FcGoogle className="me-2" size={24} /> Register with Google
						</Button>
					</div>
					<div className="my-5 d-flex gap-2 justify-content-center align-items-center">
						<p>Already a member?</p>
						<Link href="/auth/login">Sign in</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
