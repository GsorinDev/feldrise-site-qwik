import {component$} from '@builder.io/qwik';
import cx from 'classnames';

interface ICalendlyButtonProps {
	className?: string;
    buttonStyle?: 'primary' | 'secondary';
}

export default component$<ICalendlyButtonProps>((props) => {
	let className = cx(
		'w-fit px-8 py-2 duration-300 rounded-md text-xl text-center',
		props.className,
	);

	if (props.buttonStyle == 'secondary') {
		className += ' bg-white text-primary hover:bg-primary-dark hover:text-white';
	} else {
		className += ' bg-primary hover:bg-primary-dark';
	}

	return (
		<a class={className} href='https://calendly.com/feldrise-victor/45min?primary_color=aa33ff' target="_blank">
			Prendre rendez-vous
		</a>
	);
});
