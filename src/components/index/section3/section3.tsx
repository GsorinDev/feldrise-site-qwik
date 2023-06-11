import {component$} from '@builder.io/qwik';
import SectionTitle from '~/components/section-title';
import OfferCard from './offer-card';
import CalendlyButton from '~/components/calendly-button';

export default component$(() => {
	return (
		<section class="w-full">
			<SectionTitle title="Nos offres et tarifs" />
			<div class="w-full flex justify-center items-center">
				<div class='grow max-w-4xl flex flex-col gap-8 py-8 lg:py-20 px-8'>
					<div class='grow flex flex-col md:flex-row items-stretch justify-evenly gap-8'>
						<OfferCard
							image='bg-offer1'
							price='Gratuit'
							title='Le rendez-vous'
						>
							Prendre rendez-vous avec un de nos CTO sera toujours gratuit. Pendant 30 minutes,
							nous discuterons de vous, votre projet et là où vous en êtes.
						</OfferCard>

						<OfferCard
							image='bg-offer2'
							price='Sur devis'
							title="L'accompagnement"
						>
							Parce que cette aventure est unique, un tarif sera déterminé sur mesure pour répondre
							au mieux à votre besoin.
						</OfferCard>
					</div>
					<div class='flex flex-col md:flex-row items-center justify-start gap-8 bg-primary rounded-md px-8 py-16'>
						<h2 class='grow text-5xl'>Trouver un CTO chez Feldrise</h2>
						<CalendlyButton buttonStyle='secondary' />
					</div>
				</div>
			</div>
		</section>
	);
});
