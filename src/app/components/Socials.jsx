import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
const Socials = () => {
	return (
		<div className="flex gap-4">
			<Link
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/ObiFaith"
				className="p-1 md:p-2 hover:bg-primary bg-foreground rounded-md md:rounded-lg max-sm:size-8"
			>
				<Github className="text-background hover:text-dark" />
			</Link>
			<Link
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.linkedin.com/in/faithdev/"
				className="p-1 md:p-2 hover:bg-primary bg-foreground rounded-md md:rounded-lg max-sm:size-8"
			>
				<Linkedin className="text-background hover:text-dark" />
			</Link>
			<Link
				target="_blank"
				rel="noopener noreferrer"
				href="https://x.com/Faith_Dev_"
				className="p-1 md:p-2 hover:bg-primary bg-foreground rounded-md md:rounded-lg max-sm:size-8"
			>
				<Twitter className="text-background hover:text-dark" />
			</Link>
		</div>
	);
};

export default Socials;
