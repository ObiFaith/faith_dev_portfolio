import Link from 'next/link';

const Button = ({ text, variant, href }) => {
	return (
		<Link
			href={href}
			className={`font-montserrat delay-100 font-semibold text-sm sm:text-base rounded-md transition-all py-2.5 px-8 ${
				variant == 'primary'
					? 'bg-primary text-dark hover:bg-dark hover:text-white border border-primary hover:border-foreground'
					: 'bg-dark text-white hover:text-dark hover:bg-primary border border-background hover:border-primary'
			}`}
		>
			{text}
		</Link>
	);
};

export default Button;
