import {component$, useComputed$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import {useLocation} from '@builder.io/qwik-city';
import {getPostBySlug} from '~/helpers/blog-helper';
import cx from 'classnames';
import {QMarkdown} from '~/integrations/react/markdown';

export default component$(() => {
	const loc = useLocation();
	const postDetails = useComputed$(() => getPostBySlug(loc.params.slug));

	return (
		<article class="max-w-none flex flex-col break-normal prose prose-dark md:prose-xl-dark">
			<section
				class={cx('w-full py-12 md:py-24 px-8 lg:pr-[400px] flex justify-center items-center flex-col bg-cover bg-center bg-fixed')}
				style={{
					backgroundImage: `url(${postDetails.value.data.banner})`,
				}}
			>
				<div class="p-12 bg-[rgba(0,0,0,0.30)] shadow-lg backdrop-blur-lg rounded-md flex justify-center items-center max-w-7xl">
					<h1
						class="text-4xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px] m-0"
						style={{
							textDecorationSkipInk: 'none',
						}}
					>
						{postDetails.value.data.title}
					</h1>
				</div>
			</section>
			<p class="w-full my-4 p-4 px-12 lg:pr-[400px] text-lg text-white bg-primary">
				<span class="max-w-7xl">
					<a class="text-white" href="/blog">Accueil</a> &gt; {postDetails.value.data.title}
				</span>
			</p>
			<section
				class="w-full px-12 lg:pr-[400px] flex justify-center items-center flex-col bg-cover bg-center"
			>
				<QMarkdown details={postDetails.value.content} />
			</section>
		</article>
	);
});

export const head: DocumentHead = {
	title: 'Feldrise Blog',
	meta: [
		{
			name: 'description',
			content: 'Bienvenue sur le blog de Feldrise',
		},
		{
			name: 'og:title',
			content: 'Feldrise Blog',
		},
		{
			name: 'og:description',
			content: 'Bienvenue sur le blog de Feldrise',
		},
		{
			name: 'og:url',
			content: 'https://feldrise.com/blog',
		},
		{
			name: 'og:image',
			content: 'https://feldrise.com/logo-feldrise/icon-white-logo.png',
		},

	],
};
