import {component$} from '@builder.io/qwik';
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
