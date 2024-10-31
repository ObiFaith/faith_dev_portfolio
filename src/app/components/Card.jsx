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
			className="min-h-96 md:min-h-[500px] rounded-lg hover:shadow-lg grid items-end"
		>
			<div className="backdrop-blur-sm bg-[#121212]/40 py-5 px-3 md:py-7 md:px-5">
				<p className="text-lg md:text-xl text-white pb-4 font-semibold tracking-wider">
					{title}
				</p>
				<div className="flex gap-3 self-end items-center justify-between">
					<div className="flex flex-wrap items-center gap-1">
						{tools.map((tool, index) => (
							<span
								key={index}
								className="px-2 py-1 sm:text-sm text-xs bg-[#1D212D] text-white font-montserrat uppercase rounded-lg"
							>
								{tool}
							</span>
						))}
					</div>
					<div className="flex gap-1">
						{demo !== '/' && (
							<Link
								target="_blank"
								rel="noopener noreferrer"
								href={demo}
								className="p-1 md:p-2 hover:bg-primary bg-foreground rounded-md md:rounded-lg max-sm:size-8"
							>
								<ExternalLink className="text-background hover:text-dark" />
							</Link>
						)}
						{github !== '/' && (
							<Link
								target="_blank"
								rel="noopener noreferrer"
								href={github}
								className="p-1 md:p-2 hover:bg-primary bg-foreground rounded-md md:rounded-lg max-sm:size-8"
							>
								<Github className="text-background hover:text-dark" />
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
