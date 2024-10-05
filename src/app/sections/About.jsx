const About = () => {
	return (
		<section id="about" className="bg-dark text-[#fafafa]">
			<h2 className="w-11/12 sm:px-6 lg:px-14 mx-auto section-heading font-montserrat">
				About Me
			</h2>
			<div className="w-11/12 text-sm leading-6 md:text-base mx-auto grid gap-6">
				<p>
					<span>
						I'm{' '}
						<strong className="tracking-widest">Faith Obi</strong>,
						a passionate{' '}
						<strong className="tracking-widest">
							Frontend Web Developer
						</strong>{' '}
						based in{' '}
						<strong className="tracking-widest">
							Lagos, Nigeria.
						</strong>{' '}
					</span>
					<span>
						My expertise lies in{' '}
						<strong className="tracking-widest">
							JavaScript, React, NextJs, and Tailwind CSS,
						</strong>
						where I excel in creating visually appealing and
						responsive interfaces that elevate user experiences.
					</span>
				</p>
				<p>
					I hold a{' '}
					<strong className="tracking-widest">
						B.Sc in Computer Science
					</strong>{' '}
					from the{' '}
					<strong className="tracking-widest">
						University of Nigeria, Nsukka,
					</strong>{' '}
					and during my academic journey, I interned at Chidono
					Limited as a Frontend Developer. There, I worked on{' '}
					<strong className="tracking-widest">
						ASP.NET projects
					</strong>
					, revamping existing websites to enhance both{' '}
					<strong className="tracking-widest">
						user interfaces (UI)
					</strong>{' '}
					and{' '}
					<strong className="tracking-widest">
						user experiences (UX)
					</strong>
					. This hands-on experience solidified my passion for
					frontend development and sharpened my skills in delivering
					seamless digital experiences.
				</p>
				<p>
					I'm always looking forward to the next challenge—whether
					it's improving a product, mentoring someone new, or just
					exploring new technologies.{' '}
					<strong>Let's build something amazing together!</strong>
				</p>
			</div>
		</section>
	);
};

export default About;
