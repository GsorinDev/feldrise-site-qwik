import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import Section1 from '~/components/index/section1/section1';
import Section2 from '~/components/index/section2/section2';
import Section3 from '~/components/index/section3/section3';
import Section4 from '~/components/index/section4/section4';

export default component$(() => {
	return (
		<main class="
			w-full
			flex flex-col justify-center items-center
		">
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
		</main>
	);
});

export const head: DocumentHead = {
	title: 'Welcome to Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description',
		},
	],
};
