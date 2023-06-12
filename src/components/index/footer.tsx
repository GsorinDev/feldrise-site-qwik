import {component$} from '@builder.io/qwik';
import {LuFacebook, LuLinkedin, LuMail, LuTwitter} from '@qwikest/icons/lucide';

export default component$(() => {
	return (
		<footer class="w-full max-w-desktop px-8 py-12 flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center">
			<span class="text-xl text-center md:text-left">
				Copyright © 2022 <span class='text-primary'>Feldrise</span>
			</span>
			<div class="flex gap-4">
				<a href="https://fr.linkedin.com/in/feldrise" target="_blank" rel="noreferrer">
					<LuLinkedin class="text-2xl" />
				</a>
				<a href="https://fr-fr.facebook.com/feldrisepage" target="_blank" rel="noreferrer">
					<LuFacebook class="text-2xl" />
				</a>
				<a href="https://twitter.com/feldrise" target="_blank" rel="noreferrer">
					<LuTwitter class="text-2xl" />
				</a>
				<a href={`mailto:contact@feldrise.com?subject=Demande de contact depuis le site`} target="_blank" rel="noreferrer">
					<LuMail class="text-2xl" />
				</a>
			</div>
		</footer>
	);
});
