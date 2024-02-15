"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FcGoogle } from "react-icons/fc";
import styles from "./page.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Login() {
	const router = useRouter();

	const handlesubmit = async (e: any) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn("credentials", { email, password, redirect: false });
		router.push("/");
	};

	return (
		<div className="container-xxl p-4 p-md-0">
			<div className={`loginForm px-md-5 ${styles.loginForm}`}>
				<h3 className="text-center mt-4">Welcome Back</h3>
				<p className="text-center">Sign in to access an enhanced shopping experience.</p>
				<Form className={`d-flex flex-column my-5 mx-xl-auto  ${styles.formLogin}`} onSubmit={handlesubmit}>
					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email Address</Form.Label>
						<Form.Control type="email" placeholder="example@domain.com" name="email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Enter password here" name="password" />
					</Form.Group>

					<Form.Group className="mb-3" id="formGridCheckbox">
						<Form.Check
							className={styles.formCheckbox}
							type="checkbox"
							label="I agree to Terms of Service & Privacy Policy"
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
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
