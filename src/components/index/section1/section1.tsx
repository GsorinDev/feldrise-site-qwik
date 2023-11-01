import {component$} from '@builder.io/qwik';
import Header from './header';
import Projects from './projects';

export default component$(() => {
	return (
		<section
			class="
			flex
			w-full flex-col
			items-center justify-center gap-16 bg-header bg-cover
			bg-fixed bg-center py-12 md:py-24
		"
		>
			<Header />
			<Projects />
		</section>
	);
});
