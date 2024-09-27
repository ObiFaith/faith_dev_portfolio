'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Navbar } from '..';
import { CodeXml, Menu, X } from 'lucide-react';

const Header = () => {
	const [isMenu, setMenu] = useState(false);
	return (
		<header className="my-8 md:my-12 transition-all px-4 sm:px-7 lg:px-14 py-4 bg-white text-dark border-2 border-dark rounded-xl lg:rounded-2xl">
			<div className="max-sm:flex justify-between items-center">
				<div className="flex justify-between items-center">
					<Link href="/" className="flex gap-2 items-center">
						<div className="md:p-2 p-1 rounded-lg bg-dark text-white">
							<CodeXml strokeWidth={3} />
						</div>
						<h1 className="font-semibold tracking-wide font-montserrat text-base lg:text-lg">
							Faith Dev
						</h1>
					</Link>
					<Navbar className="max-sm:hidden" />
					<div className="max-sm:hidden">
						<Button href="/" text="Resume" variant="dark" />
					</div>
				</div>
				<div
					onClick={() => setMenu(!isMenu)}
					className="sm:hidden cursor-pointer"
				>
					{!isMenu ? <Menu strokeWidth={2} /> : <X strokeWidth={2} />}
				</div>
			</div>
			{isMenu && (
				<div className="sm:hidden py-4 text-center">
					<nav>
						<ul
							className={`flex transition-all *:font-semibold gap-3 md:gap-6 lg:gap-10 flex-col mb-8`}
						>
							<li onClick={() => setMenu(!isMenu)}>
								<Link
									className="pb-1 delay-100 border-primary hover:border-b-2"
									href="#about"
								>
									About
								</Link>
							</li>
							<li onClick={() => setMenu(!isMenu)}>
								<Link
									className="pb-1 delay-100 border-primary hover:border-b-2"
									href="#projects"
								>
									Projects
								</Link>
							</li>
							<li onClick={() => setMenu(!isMenu)}>
								<Link
									className="pb-1 delay-100 border-primary hover:border-b-2"
									href="/"
								>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
					<Button href="/" text="Resume" variant="dark" />
				</div>
			)}
		</header>
	);
};

export default Header;
