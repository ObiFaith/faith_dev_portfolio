import { Card } from '..';
import Image from 'next/image';
import {
	right_gradient,
	restApi,
	ecommerce,
	tipCalc,
	delve,
	kodeCamp,
} from '/public/assets';

const Projects = () => {
	return (
		<section id="projects" className="relative">
			<div className="w-11/12 mx-auto">
				<h2 className="section-heading font-montserrat">Projects</h2>
				<div className="lg:grid max-lg:flex max-lg:*:w-full flex-wrap gap-6 lg:grid-cols-9 *:gap-6 lg:grid-rows-[500px_500px]">
					<div className="lg:col-span-4">
						<Card
							bgImg={kodeCamp}
							title="KodeCamp X"
							tools={['ReactJs', 'Tailwind CSS', 'Redux']}
							demo="https://x-project-fe-ten.vercel.app/"
						/>
					</div>
					<div className="lg:col-span-5">
						<Card
							bgImg={delve}
							title="Delve: A Language Learning AI Game"
							demo="https://delve.fun/"
							tools={[
								'NextJs',
								'AI',
								'ThreeJS',
								'Tailwind CSS',
								'Redux',
							]}
						/>
					</div>
					<div className="lg:col-span-3">
						<Card
							bgImg={restApi}
							tools={['HTML', 'CSS', 'API', 'JavaScript']}
							github="https://github.com/ObiFaith/REST_API"
							demo="https://rest-country-api-iota.vercel.app/"
							title="REST Countries API with Color Theme Switcher"
						/>
					</div>
					<div className="lg:col-span-3">
						<Card
							bgImg={ecommerce}
							tools={['ReactJs', 'Tailwind CSS']}
							title="Ecommerce Search & Filtering System"
							demo="https://ecommerce-search-and-filtering-system.vercel.app/"
							github="https://github.com/ObiFaith/Ecommerce_Search_and_Filtering_System"
						/>
					</div>
					<div className="lg:col-span-3">
						<Card
							bgImg={tipCalc}
							title="Tip Calculator App"
							tools={['HTML', 'CSS', 'JavaScript']}
							demo="https://tip-calculator-app-main-seven-pink.vercel.app/"
							github="https://github.com/ObiFaith/tip-calculator-app-main"
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
