import Link from 'next/link';

const Navbar = ({ className }) => {
	return (
		<>
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
							className="pb-1 delay-100 border-primary hover:border-b-2"
							href="/"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
