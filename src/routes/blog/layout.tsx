import {Slot, component$} from '@builder.io/qwik';
import Sidebar from '~/components/blog/sidebar';

export default component$(() => {
	return (
		<main class="items-left flex w-full flex-col">
			<div class="sticky bottom-28 top-28 hidden w-full lg:block">
				<div class="absolute right-8 w-[324px]">
					<div class="mt-16 flex items-center justify-center rounded-md  bg-[rgba(0,0,0,0.30)] p-8 shadow-lg backdrop-blur-lg">
						<Sidebar />
					</div>
				</div>
			</div>
			<Slot />
		</main>
	);
});
