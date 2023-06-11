import {Slot, component$} from '@builder.io/qwik';
import cx from 'classnames';

interface IOfferCardProps {
	image: string
	title: string
	price: string
}

export default component$<IOfferCardProps>((props) => {
	const className = cx('flex flex-col items-center justify-end min-h-[200px] bg-cover bg-center h-10 p-4', props.image);
	return (
		<article class='w-full h-full grow border border-primary rounded-md'>
			{/* L'image de l'offre */}
			<div class={className}>
				<h3 class='text-2xl bg-neutral py-2 px-4 rounded-md'>{props.title}</h3>
			</div>
			<div class='p-6 flex flex-col gap-4'>
				<p class='text-secondary'>{props.price}</p>
				<Slot />
			</div>
		</article>
	);
});
