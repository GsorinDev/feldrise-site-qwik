import {component$} from '@builder.io/qwik';
import cx from 'classnames';

interface IPortraitImageProps {
	image?: string;
    class?: string;
}

export default component$<IPortraitImageProps>((props) => {
	return (
		<div class={cx(
			'relative min-w-[200px] h-[290px] rounded-3xl border-2 border-solid border-primary overflow-hidden',
			props.class,
		)}>
			<img
				src={props.image || '/images/me2.2.webp'}
				alt="Image portrait"
				width={100} height={200}
				class="w-full h-full" />
		</div>
	);
});
