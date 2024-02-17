"use client";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./page.module.css";
import Image from "next/image";

function NewsletterComponent() {
	return (
		<div className={`mt-5 py-5 px-4 mx-md-4 bg-success-subtle d-flex`}>
			<div className={`col-md-7 col-lg-8`}>
				<h5 className={`${styles.textH5} pb-3`}>NEWSLETTER</h5>
				<h3>Suscribe to our newsletter</h3>
				<div>
					<Form className={`col-md-10`}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</div>
			</div>
			<div className={`d-none d-md-block position-relative ${styles.newsImg} `}>
				<Image src="/dish4.png" width={350} height={250} alt="image of salad" />
			</div>
		</div>
	);
}

export default NewsletterComponent;
