import {component$} from '@builder.io/qwik';
import Button from '~/components/button';
import CalendlyButton from '~/components/calendly-button';

export default component$(() => {
	return (
		<div class="grow max-w-desktop gap-8">
			<section class="
				lg:w-1/2
				py-12 px-10
				flex flex-col items-start
				bg-[rgba(0,0,0,0.30)] shadow-lg backdrop-blur-lg rounded-md
			">
				<img alt="Logo de Feldrise" src="/logo-feldrise/white-logo.svg" width={263} height={92} />

				<h1 class="text-2xl font-bold">La solution CTO pour les startups et PME</h1>
				<div class="h-12" />
				<p>
					Parcequ'un projet digital ne se réalise pas seul, nous sommes là pour vous aider à innover
					et atteindre vos objectifs grâce à l’expertise de nos CTO.
				</p>
				<div class="h-12" />

				{/* The Buttons */}
				<div class="
					w-full
					flex flex-col md:flex-row items-center gap-4
				">
					<CalendlyButton />
					<Button href='#whyacto' buttonStyle='secondary'>
						En savoir plus
					</Button>
				</div>
			</section>
		</div>
	);
});
