import { Header, Socials } from '..';
import Image from 'next/image';
import { gradient, left_gradient, profile } from '/public/assets';

const Hero = () => {
	return (
		<section>
			<div className="min-h-[85svh] relative mx-auto">
				<div className="w-11/12 mx-auto">
					<Header />
					<div className="grid gap-12 md:w-11/12 mx-auto lg:w-full pt-10 items-center lg:grid-cols-2">
						<div className="grid gap-4 max-lg:text-center">
							<h1>
								<span>Hi, my name is</span> <br />
								<span className="text-primary font-bold text-6xl">
									Faith Obi
								</span>
							</h1>
							<p className="lg:text-lg text-base text-balance">
								I build scalable, secure web applications from idea to production.<br/>
								Full-Stack Web Developer specializing in Next.js, TypeScript, NestJS, and Python, with experience building payment systems, APIs, microservices, and AI-powered tools.
							</p>
							<div className="max-lg:hidden">
								<Socials />
							</div>
						</div>
						<div
							style={{
								background: `url(${profile.src}) no-repeat top center/cover`,
							}}
							className="max-sm:hidden sm:min-h-[640px] md:min-h-[800px] lg:min-h-[600px] rounded-t-lg"
						></div>
					</div>
					{/* Skill Icons */}
					<div className=""></div>
				</div>
				<div
					style={{
						background: `url(${profile.src}) no-repeat top center/cover`,
					}}
					className="max-sm:min-h-[550px] mt-10 md:hidden rounded-t-lg"
				></div>
				<div className="absolute -z-10 bottom-0">
					<Image height={200} src={left_gradient} alt="gradient" />
				</div>
			</div>
			{/* gradient */}
			<div className="absolute -z-10 right-0 -top-20">
				<Image height={320} src={gradient} alt="gradient" />
			</div>
		</section>
	);
};

export default Hero;
