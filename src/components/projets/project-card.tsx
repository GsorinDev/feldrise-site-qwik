import {component$} from '@builder.io/qwik';
import cx from 'classnames';

interface IProjectCardProps {
	image: string
	projectTitle: string
	site: string
	color: string
	textColor: string
}

export default component$<IProjectCardProps>((props) => {
	const className = cx(
		'w-full px-8 py-2 duration-300 rounded-md text-xl text-center',
		props.color, props.textColor,
	);

	return (
		<div class="
			max-w-[500px]
			p-4
			grow flex flex-col items-center gap-4
			rounded-md bg-white
		">
			<img
				src={props.image}
				alt={props.projectTitle}
				width={739} height={200} />

			<a class={className} href={props.site} target='_blank'>
				Voir le site
			</a>
		</div>
	);
});
