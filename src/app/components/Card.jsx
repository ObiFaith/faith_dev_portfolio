'use client';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Card = ({ title, tools, bgImg, github = '/', demo = '/' }) => {
	const [img, setImg] = useState('');
	useEffect(() => {
		if (bgImg) setImg(bgImg.src);
	}, [bgImg]);
	return (
		<div
			style={{ background: `url(${img}) no-repeat center/cover` }}
			className="min-h-full rounded-lg"
		>
			<div className="bg-[#121212]/90 rounded-md py-8 px-4 min-h-[500px] grid">
				<p className="md:text-lg text-base px-6 lg:px-10 text-center font-semibold tracking-wider">
					{title}
				</p>
				<div className="flex gap-3 self-end items-center justify-between">
					<div className="flex flex-wrap items-center gap-1">
						{tools.map((tool, index) => (
							<span
								key={index}
								className="px-2 py-1 max-md:text-sm bg-[#1D212D] text-white font-montserrat uppercase rounded-lg"
							>
								{tool}
							</span>
						))}
					</div>
					<div className="flex gap-1">
						<Link
							href={demo}
							className="p-1 md:p-2 hover:bg-primary bg-foreground rounded-md md:rounded-lg max-sm:size-8"
						>
							<ExternalLink className="text-background hover:text-dark" />
						</Link>
						<Link
							href={github}
							className="p-1 md:p-2 hover:bg-primary bg-foreground rounded-md md:rounded-lg max-sm:size-8"
						>
							<Github className="text-background hover:text-dark" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
