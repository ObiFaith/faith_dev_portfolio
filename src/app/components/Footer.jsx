import Link from 'next/link';
import Image from 'next/image';
import { Button, Logo } from '..';
import { bottom_gradient } from '/public/assets';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="grid gap-20 md:gap-32 lg:gap-40 w-11/12 mx-auto">
			<div className="flex max-sm:flex-col max-sm:justify-center gap-6 items-center justify-between">
				<h2 className="font-bold max-sm:text-center text-2xl lg:text-3xl">
					Excited to Work on Your Project? <br />
					Reach Out to Me Today!
				</h2>
				<Button
					text="Send a DM"
					type="link"
					variant="primary"
					href="mailto:obifth@gmail.com?subject=Project%20Booking%20Request&body=Hello,%20I%20would%20like%20to%20book%20a%20job%20for%20a%20project.%20Here%20are%20the%20details:%0A%0A-%20Project%20Description:%0A- %20Requirements:%0A- %20Timeline:%0A- %20Budget:%0A%0AThank%20you!"
				/>
			</div>
			<div className="rounded-2xl pb-10">
				<div className="flex items-center max-sm:flex-col gap-6 justify-between">
					<Logo />
					<p className="text-sm max-sm:hidden">Developed by me</p>
					<div className="flex gap-4">
						<Link
							href="https://github.com/ObiFaith"
							className="p-1 md:p-2 hover:bg-primary bg-foreground rounded-md md:rounded-lg max-sm:size-8"
						>
							<Github className="text-background hover:text-dark" />
						</Link>
						<Link
							href="https://www.linkedin.com/in/faithdev/"
							className="p-1 md:p-2 hover:bg-primary bg-foreground rounded-md md:rounded-lg max-sm:size-8"
						>
							<Linkedin className="text-background hover:text-dark" />
						</Link>
						<Link
							href="https://x.com/Faith_Dev_"
							className="p-1 md:p-2 hover:bg-primary bg-foreground rounded-md md:rounded-lg max-sm:size-8"
						>
							<Twitter className="text-background hover:text-dark" />
						</Link>
					</div>
				</div>
				<p className="text-center pt-8 text-xs sm:hidden">
					Developed by me
				</p>
			</div>
			<div className="absolute -z-10 bottom-0 right-0">
				<Image height={320} src={bottom_gradient} alt="gradient" />
			</div>
		</footer>
	);
};

export default Footer;
