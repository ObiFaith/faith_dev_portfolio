import { Header } from '..';
import Image from 'next/image';
import { gradient, left_gradient } from '/public/assets';

const Hero = () => {
	return (
		<section>
			<div className="min-h-[85svh] relative mx-auto">
				<div className="w-11/12 mx-auto">
					<Header />
					<div className="grid gap-6 pt-10 items-center md:grid-cols-2">
						<div className="grid gap-4 max-md:text-center">
							<h1>
								<span>Hi, my name is</span> <br />
								<span className="text-primary font-bold text-6xl">
									Faith Obi
								</span>
							</h1>
							<p className="text-lg text-balance">
								I'm a Frontend Developer who transforms design
								ideas into beautifully functional web
								interfaces, focused on user experience.
							</p>
						</div>
						<div className="">Hello</div>
					</div>
					{/* Skill Icons */}
					<div className=""></div>
				</div>
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
