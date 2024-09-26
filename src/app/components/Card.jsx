import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const Card = ({ title, tools, bgImg, github = '/', demo = '/' }) => {
	return (
		<div
			style={{ background: `url(${bgImg}) no-repeat center/cover` }}
			className="min-h-full rounded-lg border grid px-6 lg:px-10"
		>
			<p className='pt-5 lg:pt-8 text-lg font-semibold tracking-wider'>{title}</p>
			<div className="flex lg:gap-8 self-end border items-center justify-between">
				<div className="flex items-center gap-2">
					{tools.map((tool, index) => (
						<span
							key={index}
							className="px-2 py-1 font-semibold bg-[#1D212D] text-white font-montserrat uppercase rounded-lg"
						>
							{tool}
						</span>
					))}
				</div>
				<div className="flex gap-2">
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
	);
};

export default Card;
