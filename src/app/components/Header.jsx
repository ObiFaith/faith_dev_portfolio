'use client';
import { useState } from 'react';
import { Button, Navbar } from '..';
import { CodeXml, Menu, X } from 'lucide-react';

const Header = () => {
	const [isMenu, setMenu] = useState(false);
	return (
		<header className="my-8 md:my-12 transition-all px-4 sm:px-7 lg:px-14 py-4 bg-white text-dark border-2 border-dark rounded-xl lg:rounded-2xl">
			<div className="max-sm:flex justify-between items-center">
				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center">
						<div className="md:p-2 p-1 rounded-lg  bg-dark text-white">
							<CodeXml strokeWidth={3} />
						</div>
						<h1 className="font-semibold tracking-wide font-montserrat text-base lg:text-lg">
							Faith Dev
						</h1>
					</div>
					<Navbar className="max-sm:hidden" />
					<div className="max-sm:hidden">
						<Button
							type="link"
							href="/"
							text="Resume"
							variant="dark"
						/>
					</div>
				</div>
				<div
					onClick={() => setMenu(!isMenu)}
					className="sm:hidden cursor-pointer transition-all"
				>
					{!isMenu ? <Menu strokeWidth={2} /> : <X strokeWidth={2} />}
				</div>
			</div>
			{isMenu && (
				<Navbar className="flex-col py-2 text-center" />
			)}
		</header>
	);
};

export default Header;
