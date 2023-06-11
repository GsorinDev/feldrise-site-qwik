import {component$, useSignal} from '@builder.io/qwik';
import {LuMenu, LuX} from '@qwikest/icons/lucide';
import cx from 'classnames';
import CalendlyButton from './calendly-button';

interface IRoute {
	name: string;
	href: string;
}

const routes: IRoute[] = [
	{
		name: 'Accueil',
		href: '/',
	},
	{
		name: 'Projets',
		href: '/projets',
	},
	{
		name: 'Le Blog',
		href: '/blog',
	},
];

export default component$(() => {
	const showSlider = useSignal<boolean>(false);

	return (
		<>
			<header
				class='fixed top-0 w-full min-h-[90px] bg-neutral py-8 flex justify-center items-center z-40'
			>
				<div class='max-w-desktop px-8 grow flex justify-between items-center'>
					<a href="/" class="hidden 2xl:block">
						<img src="/logo-feldrise/white-logo.svg" width={197} height={48} alt="Website's logo"/>
					</a>
					<a href="/" class="block 2xl:hidden">
						<img src="/logo-feldrise/icon-white-logo.svg" width={75} height={48} alt="Website's logo"/>
					</a>
					<div class="flex gap-8">
						<CalendlyButton />
						<button
							class="block"
							onClick$={() => showSlider.value = true}
						>
							<LuMenu class="text-4xl" />
						</button>
					</div>
				</div>
			</header>
			<div class={cx(
				showSlider.value ? 'translate-x-0' : 'translate-x-full',
				'fixed top-0 right-0 min-w-[400px] h-full flex flex-col',
				'bg-neutral shadow-2xl shadow-black z-50',
				'duration-300',
			)}>
				<button
					class="w-fit px-4 py-4"
					onClick$={() => showSlider.value = false}
				>
					<LuX class="text-3xl" />
				</button>
				{routes.map((route, index) =>
					<a href={route.href} key={index} class={cx(
						'relative !py-4 text-white text-center text-2xl hover:bg-primary',
						'after:content-[\'\'] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[90%] after:h-1',
						'after:bg-primary',
					)}
					onClick$={() => showSlider.value = false}
					>
						{route.name}
					</a>,
				)}
			</div>
		</>
	);
});
