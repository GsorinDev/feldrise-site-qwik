import {component$} from '@builder.io/qwik';
import PortraitImage from './portrait-image';

export default component$(() => {
	return (
		<section class="
			w-full
			flex justify-center items-center
			bg-cats bg-cover bg-fixed
		">
			<div class="
				max-w-desktop
				py-8 px-24
				flex flex-col items-center justify-center gap-16
			">
				<h2
					class="text-5xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px]"
					style={{
						textDecorationSkipInk: 'none',
					}}
				>
					Ils en parlent mieux que nous
				</h2>

				<div class="
					h-full
					flex justify-center items-center gap-4
				">
					<div class="
						p-12 col-span-2
						rounded-2xl bg-[rgba(0,0,0,0.45)] shadow-lg backdrop-blur
					">
						<p>
							<span class="text-3xl text-primary">Emilie NOUVEAU</span>
							&nbsp;-&nbsp;
							Néovoice
						</p>
						<div class="bg-primary my-2 h-1 w-1/3" />
						<p class="mt-6">
							J'ai contacté Feldrise pour m'aider à accompagner mes deux salariés dans le domaine
							du développement. En tant qu'entrepreneuse j'ai trouvé auprès de Victor un véritable
							soutien. Sérieux, disponible et toujours dans une très bonne ambiance, il a su être à l'écoute
							de mon projet et me proposer un service sur mesure de très grande qualité.
						</p>
					</div>
					<PortraitImage image="/images/reviews/emilie.jpeg" class="hidden lg:block" />
				</div>
			</div>
		</section>
	);
});
