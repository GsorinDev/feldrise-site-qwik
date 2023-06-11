import {component$} from '@builder.io/qwik';
import Header from './header';
import Projects from './projects';

export default component$(() => {
	return (
		<section class="
			w-full
			py-12 md:py-24
			flex flex-col items-center justify-center gap-16
			bg-header bg-cover bg-center bg-fixed
		">
			<Header />
			<Projects />
		</section>
	);
});
