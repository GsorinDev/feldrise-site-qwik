import {Slot, component$} from '@builder.io/qwik';
import Sidebar from '~/components/blog/sidebar';

export default component$(() => {
	return (
		<main class="w-full flex flex-col items-left">
			<div class="hidden lg:block w-full sticky top-28 bottom-28">
				<div class="absolute right-8 w-[324px]">
					<div class="flex items-center justify-center mt-16 p-8  bg-[rgba(0,0,0,0.30)] shadow-lg backdrop-blur-lg rounded-md">
						<Sidebar />
					</div>
				</div>
			</div>
			<Slot />
		</main>
	);
});
