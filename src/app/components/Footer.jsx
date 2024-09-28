import Image from 'next/image';
import { Button, Logo, Socials } from '..';
import { bottom_gradient } from '/public/assets';

const Footer = () => {
	return (
		<footer className="grid gap-20 py-10 md:py-20 md:gap-32 lg:gap-40 w-11/12 mx-auto">
			<div className="flex max-sm:flex-col max-sm:justify-center gap-6 items-center justify-between">
				<h2 className="font-bold max-sm:text-center max-sm:text-xl text-2xl lg:text-3xl">
					Excited to Work on Your Project? <br />
					Reach Out to Me Today!
				</h2>
				<Button
					text="Send a DM"
					variant="primary"
					href="mailto:obifth@gmail.com?subject=Project%20Booking%20Request&body=Hello,%20I%20would%20like%20to%20book%20a%20job%20for%20a%20project.%20Here%20are%20the%20details:%0A%0A-%20Project%20Description:%0A- %20Requirements:%0A- %20Timeline:%0A- %20Budget:%0A%0AThank%20you!"
				/>
			</div>
			<div className="rounded-2xl pb-10 sm:border border-foreground sm:p-6 lg:px-14 lg:py-9">
				<div className="flex items-center max-sm:flex-col gap-6 justify-between">
					<Logo />
					<p className="text-sm max-sm:hidden">Developed by me</p>
					<Socials />
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
