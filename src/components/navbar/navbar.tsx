"use client";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Container, Button, Form, Nav, Navbar, Offcanvas, InputGroup } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./links";
import { useSession, signOut } from "next-auth/react";

function NavbarComponent() {
	const expand = "lg";
	const { data: session } = useSession();

	return (
		<>
			<Navbar key={expand} expand={expand} className="bg-body-tertiary border-bottom">
				<Container fluid>
					<Link href="/">
						<Image src="/logo-coolinary.png" alt="logo coolinary" width={150} height={20} />
					</Link>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-${expand}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Menu</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<NavLinks />
							</Nav>
							<div className="d-flex flex-column flex-lg-row gap-3 align-items-center">
								<div className="d-flex w-100 justify-content-start justify-content-lg-end align-items-center  gap-2">
									{session?.user ? (
										<>
											<p>{session.user.name}</p>
											{session.user.image && (
												<Image
													src={session.user.image}
													height={38}
													width={38}
													alt="avatar google account"
													className="rounded-circle border border-2 border-primary"
												/>
											)}
											<Link href="/auth/login">
												<Button
													variant="primary"
													onClick={() =>
														signOut({
															callbackUrl: "/",
														})
													}
												>
													Log Out
												</Button>
											</Link>
										</>
									) : (
										<>
											<Link href="/auth/login">
												<Button variant="outline-dark">Login</Button>
											</Link>
											<Link href="/auth/register">
												<Button variant="success">Sign Up</Button>
											</Link>
										</>
									)}
								</div>
							</div>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarComponent;
