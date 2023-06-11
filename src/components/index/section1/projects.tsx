import {component$} from '@builder.io/qwik';
import ProjectCard from './project-card';
import Button from '~/components/button';

export default component$(() => {
	return (
		<section class="
			w-full max-w-desktop
			py-12 px-10
			flex flex-col justify-center items-center gap-16
			bg-[rgba(0,0,0,0.30)] shadow-lg backdrop-blur-lg rounded-md
		">
			<div class="
				flex flex-col items-start justify-start gap-8
			">
				<h2
					class="text-4xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px]"
					style={{
						textDecorationSkipInk: 'none',
					}}
				>
					Les projets accompagnés par Feldrise
				</h2>

				<div class="
					w-full
					flex flex-col md:flex-row items-center justify-center gap-4
				">
					{/* Néo Voice */}
					<ProjectCard
						image='/images/projects/neovoice.webp'
						projectTitle='Néo Voice'
						site='https://neovoice.fr'
						color='bg-[#E21D54]'
						textColor='text-white' />

					{/* My Demenageur */}
					<ProjectCard
						image='/images/projects/mydemenageur.webp'
						projectTitle='My Demenageur'
						site='https://mydemenageur.com'
						color='bg-[#8142ff]'
						textColor='text-white' />

					{/* My Pool Process */}
					<ProjectCard
						image='/images/projects/mypoolprocess.webp'
						projectTitle='My Pool Process'
						site='https://mypoolprocess.fr'
						color='bg-[#0054AC]'
						textColor='text-white' />
				</div>

				<Button href='/projets'>Découvrir tous les projets</Button>
			</div>
		</section>
	);
});
