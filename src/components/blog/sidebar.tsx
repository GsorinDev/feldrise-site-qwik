import {component$} from '@builder.io/qwik';
import CalendlyButton from '../calendly-button';

export default component$(() => {
	return (
		<>
			<div class="flex flex-col items-center gap-6 text-center">
				<div class="h-[128px] w-[128px] rounded-full border border-8 border-primary">
					<img src="/logo-feldrise/icon-white-logo.svg" alt="Logo de Feldrise" width={128} height={128} />
				</div>
				<p>Vous souhaitez allez plus loin ? Nous sommes là pour répondre à vos problématiques.</p>
				<CalendlyButton />
				<a class="text-secondary" href={`mailto:contact@feldrise.com?subject=Demande de contact depuis le site`}>
					Ou nous envoyer un message
				</a>
			</div>
		</>
	);
});
