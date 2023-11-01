import {component$} from '@builder.io/qwik';
import ProjectCard from './project-card';

export default component$(() => {
	return (
		<section class="flex w-full items-center justify-center">
			<div class="mx-8 my-24 flex w-full max-w-desktop grow flex-wrap items-center justify-center gap-4">
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

				{/* Logi Soap */}
				<ProjectCard image="/images/projects/logisoap.webp" projectTitle="Logi Soap" site="https://logisoap.com" color="bg-[#03035A]" textColor="text-white" />
			</div>
		</section>
	);
});
