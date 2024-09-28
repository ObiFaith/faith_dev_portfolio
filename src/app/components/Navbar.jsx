import Link from 'next/link';

const Navbar = ({ className }) => {
	return (
		<nav>
			<ul
				className={`flex transition-all *:font-semibold gap-3 md:gap-6 lg:gap-10 ${className}`}
			>
				<li>
					<Link
						className="pb-1 delay-100 border-primary hover:border-b-2"
						href="#about"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						className="pb-1 delay-100 border-primary hover:border-b-2"
						href="#projects"
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						target="_blank"
						className="pb-1 delay-100 border-primary hover:border-b-2"
						href="mailto:obifth@gmail.com?subject=Project%20Booking%20Request&body=Hello,%20I%20would%20like%20to%20book%20a%20job%20for%20a%20project.%20Here%20are%20the%20details:%0A%0A-%20Project%20Description:%0A- %20Requirements:%0A- %20Timeline:%0A- %20Budget:%0A%0AThank%20you!"
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
