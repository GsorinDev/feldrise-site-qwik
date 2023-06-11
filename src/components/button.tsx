import {Slot, component$} from '@builder.io/qwik';
import cx from 'classnames';

interface IButtonProps {
	href?: string;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
    buttonStyle?: 'primary' | 'secondary';
	onClick?: () => void;
}

export default component$<IButtonProps>((props) => {
	let className = cx(
		'w-fit px-8 py-2 duration-300 rounded-md text-xl text-center',
		props.className,
	);

	if (props.buttonStyle == 'secondary') {
		className += ' bg-white text-primary hover:bg-primary-dark hover:text-white';
	} else {
		className += ' bg-primary hover:bg-primary-dark';
	}

	return props.href ? (
		<a class={className} href={props.href}>
			<Slot />
		</a>
	) : (
		<button
			class={className}
			type={props.type}
			onClick$={props.onClick}
		>
			<Slot />
		</button>
	);
});
