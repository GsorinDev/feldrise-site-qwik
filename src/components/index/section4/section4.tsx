import {component$} from '@builder.io/qwik';
import Button from '~/components/button';
import CalendlyButton from '~/components/calendly-button';

export default component$(() => {
	return (
		<section
			class="
			flex
			w-full items-center justify-center
			bg-office bg-cover bg-fixed bg-center
		"
		>
			<div
				class="
				flex
				max-w-desktop flex-col
				items-center justify-center gap-16 px-24 py-48
			"
			>
				<div
					class="flex
					h-full items-center justify-center gap-4
				"
				>
                    
					<div
						class="
						flex flex-col gap-8 rounded-2xl
						bg-[rgba(0,0,0,0.45)] p-12 shadow-lg backdrop-blur
					"
					>
                        <h2
					class="text-5xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px]"
					style={{
						textDecorationSkipInk: 'none',
					}}
				>
					Découvrez nos bureaux virtuelles
				</h2>
				<p>
					Rejoignez-nous dans les bureaux Gather de Feldrise !
				</p>
				<p>
					Nous sommes ravis de vous inviter à rejoindre notre espace Gather, le centre de notre communauté Feldrise. 
					Que vous soyez un membre de notre équipe, un partenaire commercial ou simplement intéressé par ce que nous 
					faisons, nos bureaux Gather est l'endroit idéal pour se connecter, collaborer et échanger des idées.
				</p>
				<Button href="https://app.gather.town/app/0raFgE4sC0iW2rE4/Feldrise">Rejoindre les bureaux</Button>
					</div>
				</div>
			</div>
		</section>
	);
});
