"use client";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Container, Button, Form, Nav, Navbar, Offcanvas, InputGroup } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function NavbarComponent() {
	const expand = "lg"; // Definimos 'expand' como "sm" para mostrar solo un Navbar

	return (
		<>
			<Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
				<Container fluid>
					<Link href="#">
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
								<Nav.Link href="#action1">Home</Nav.Link>
								<Nav.Link href="#action2">Recipes</Nav.Link>
								<Nav.Link href="#action2">About Us</Nav.Link>
							</Nav>
							<Form className="d-flex flex-column flex-lg-row gap-3 align-items-center">
								<InputGroup>
									<Form.Control
										type="text"
										placeholder="Search"
										aria-label="Input group example"
										aria-describedby="btnGroupAddon"
									/>
									<Button variant="outline-success">
										<i className="bi bi-search"></i>
									</Button>
								</InputGroup>
								<div className="d-flex w-100 justify-content-start justify-content-lg-end align-items-center  gap-2">
									<Link href="#">
										<Button variant="">
											<i className="bi bi-cart2 fs-5"></i>
										</Button>
									</Link>
									<Link href="#">
										<Button variant="outline-dark">Login</Button>
									</Link>
									<Link href="#">
										<Button variant="success">Sign Up</Button>
									</Link>
								</div>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarComponent;
