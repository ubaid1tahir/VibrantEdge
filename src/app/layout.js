import { Inter, Poppins } from "next/font/google";

import 'bootstrap/dist/css/bootstrap.css';
import '/public/css/style.css'
import '/public/css/responsive.css'

import "@fortawesome/fontawesome-svg-core/styles.css"; 

import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700", "900"] })

export const metadata = {
	title: "Vibrant Edge",
	description: "The Digital Marketing agency where we showcase our projects",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" type="image/x-icon" />
			</head>
			<body className={`${poppins.className}`}>
				{children}
				<Footer />
				{/* <BootstrapClient /> */}
				<Script src="js/custom.js"></Script>
				<Script src="js/jquery-3.4.1.min.js"></Script>
				<Script src="js/bootstrap.js"></Script>
			</body>
		</html>
	);
}
