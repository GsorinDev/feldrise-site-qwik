import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import Header from '~/components/projets/header';
import Projects from '~/components/projets/projects';

export default component$(() => {
	return (
		<main class="w-full flex flex-col justify-center items-center">
			<Header />
			<Projects />
		</main>
	);
});

export const head: DocumentHead = {
	title: 'Feldrise - La solution CTO en Bretagne',
	meta: [
		{
			name: 'description',
			content: 'Vous trouverez une liste de projets que Feldrise a pu accompanger jusqu\'a présent.',
		},
		{
			name: 'og:title',
			content: 'Feldrise - La solution CTO en Bretagne',
		},
		{
			name: 'og:description',
			content: 'Vous trouverez une liste de projets que Feldrise a pu accompanger jusqu\'a présent.',
		},
		{
			name: 'og:url',
			content: 'https://feldrise.com',
		},
		{
			name: 'og:image',
			content: 'https://feldrise.com/logo-feldrise/icon-white-logo.png',
		},

	],
};
