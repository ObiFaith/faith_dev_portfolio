import Image from 'next/image';
import { Card } from '..';
import { right_gradient } from '/public/assets';

const Projects = () => {
	return (
		<section id="projects" className="relative">
			<div className="w-11/12 mx-auto">
				<h2 className="section-heading font-montserrat">Projects</h2>
				<div className="lg:grid max-lg:flex max-lg:*:w-full flex-wrap gap-6 lg:grid-cols-9 *:gap-6 lg:grid-rows-[500px_500px]">
					<div className="lg:col-span-4">
						<Card
							title="Social Media App"
							tools={['HTML', 'CSS', 'react']}
						/>
					</div>
					<div className="lg:col-span-5">
						<Card
							title="Social Media App"
							tools={['HTML', 'CSS', 'react']}
						/>
					</div>
					<div className="lg:col-span-3">
						<Card
							title="Social Media App"
							tools={['HTML', 'CSS', 'react']}
						/>
					</div>
					<div className="lg:col-span-3">
						<Card
							title="Social Media App"
							tools={['HTML', 'CSS', 'react']}
						/>
					</div>
					<div className="lg:col-span-3">
						<Card
							title="Social Media App"
							tools={['HTML', 'CSS', 'react']}
						/>
					</div>
				</div>
			</div>
			<div className="absolute top-0 -z-10 right-0">
				<Image height={320} src={right_gradient} alt="gradient" />
			</div>
		</section>
	);
};

export default Projects;
