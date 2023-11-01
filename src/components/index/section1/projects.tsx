import {component$} from '@builder.io/qwik';
import Button from '~/components/button';
import ProjectCard from '~/components/projets/project-card';

export default component$(() => {
	return (
		<section
			class="
			flex w-full
			max-w-desktop flex-col
			items-center justify-center gap-16 rounded-md bg-[rgba(0,0,0,0.30)]
			px-10 py-12 shadow-lg backdrop-blur-lg
		"
		>
			<div
				class="
				flex flex-col items-start justify-start gap-8
			"
			>
				<h2
					class="text-4xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px]"
					style={{
						textDecorationSkipInk: 'none',
					}}
				>
					Les projets accompagnés par Feldrise
				</h2>

				<div
					class="
					flex
					w-full flex-col items-center justify-center gap-4 md:flex-row
				"
				>
					{/* Néo Voice */}
					<ProjectCard image="/images/projects/neovoice.webp" projectTitle="Néo Voice" site="https://neovoice.fr" color="bg-[#E21D54]" textColor="text-white" />

					{/* My Demenageur */}
					<ProjectCard
						image="/images/projects/mydemenageur.webp"
						projectTitle="My Demenageur"
						site="https://mydemenageur.com"
						color="bg-[#8142ff]"
						textColor="text-white"
					/>

					{/* My Pool Process */}
					<ProjectCard
						image="/images/projects/mypoolprocess.webp"
						projectTitle="My Pool Process"
						site="https://mypoolprocess.fr"
						color="bg-[#0054AC]"
						textColor="text-white"
					/>
				</div>

				<Button href="/projets">Découvrir tous les projets</Button>
			</div>
		</section>
	);
});
