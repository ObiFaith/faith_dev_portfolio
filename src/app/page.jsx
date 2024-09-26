import { Hero, Footer, About, Projects } from '.';

export default function Home() {
	return (
		<main className="max-w-[1569px]">
			<Hero />
			<About />
			<Projects />
			<Footer />
		</main>
	);
}
