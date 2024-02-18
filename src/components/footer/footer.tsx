import Image from "next/image";
import styles from "./page.module.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
	return (
		<div className="p-4 bg-light-subtle border border-top d-flex flex-wrap gap-4">
			<div className={`d-flex flex-column gap-3`}>
				<div className={`${styles.footerImg} position-relative `}>
					<Image src="/logo-coolinary.png" alt="logo coolinary" width={200} height={30} />
				</div>
				<p>Open an account in minutes, get full financial control for much longer</p>
				<div className={`d-flex gap-2 justify-content-start align-items-center`}>
					<FaFacebook className="fs-4" />
					<RiInstagramFill className="fs-4" />
					<FaXTwitter className="fs-4" />
				</div>
			</div>

			<div className="py-4 d-flex flex-wrap gap-4">
				<div>
					<h6>Company</h6>
					<p>Lorem, ipsum.</p>
					<p>Lorem, ipsum.</p>
				</div>
				<div>
					<h6>Contact</h6>
					<p>Lorem, ipsum.</p>
					<p>Lorem, ipsum.</p>
				</div>
				<div>
					<h6>More</h6>
					<p>Lorem, ipsum.</p>
					<p>Lorem, ipsum.</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
