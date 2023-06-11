import {component$} from '@builder.io/qwik';

interface ISectionTitle {
	title: string,
	alignment?: 'start' | 'end'
}

export default component$<ISectionTitle>((props) => {
	return (
		<div class="
			w-full
			flex items-center justify-center
			py-8 md:py-12
			bg-primary
		">
			<div class={`grow max-w-desktop px-8 flex ${props.alignment == 'end' ? 'justify-end' : 'justify-start'}`}>
				<h2 class="uppercase text-5xl font-bold">{props.title}</h2>
			</div>
		</div>
	);
});
