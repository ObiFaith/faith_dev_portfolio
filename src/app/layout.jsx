import Head from 'next/head';
import './globals.css';
import { Plus_Jakarta_Sans, Montserrat } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
	weight: ['400', '700'],
	subsets: ['latin'],
});

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Faith Obi | Frontend Web Developer',
	description:
		"I'm a Frontend Developer who transforms design ideas into beautifully functional web interfaces, focused on user experience.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<link
					rel="icon"
					type="image/svg+xml"
					href="/public/icon.jpg"
				></link>
			</Head>
			<body
				className={`${plusJakartaSans.className} relative antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
