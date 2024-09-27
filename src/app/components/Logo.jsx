import Link from 'next/link';
import { CodeXml } from 'lucide-react';

const Logo = ({ variant }) => {
	return (
		<Link href="/" className="flex gap-2 items-center">
			<div
				className={`p-2 rounded-lg ${
					variant === 'dark' ? 'bg-background' : 'bg-foreground'
				}`}
			>
				<CodeXml
					strokeWidth={3}
					className={
						variant == 'dark'
							? 'text-foreground'
							: 'text-background'
					}
				/>
			</div>
			<h1
				className={`font-semibold tracking-wide font-montserrat text-lg ${
					variant == 'dark' ? 'text-background' : 'text-foreground'
				}`}
			>
				Faith Dev
			</h1>
		</Link>
	);
};

export default Logo;
