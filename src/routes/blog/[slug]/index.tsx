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
		<article class="md:prose-xl-dark prose prose-dark flex max-w-none flex-col break-normal">
			<section
				class={cx('flex w-full flex-col items-center justify-center bg-cover bg-fixed bg-center px-8 py-12 md:py-24 lg:pr-[400px]')}
				style={{
					backgroundImage: `url(${postDetails.value.data.banner})`,
				}}
			>
				<div class="flex max-w-7xl items-center justify-center rounded-md bg-[rgba(0,0,0,0.30)] p-12 shadow-lg backdrop-blur-lg">
					<h1
						class="m-0 text-4xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px]"
						style={{
							textDecorationSkipInk: 'none',
						}}
					>
						{postDetails.value.data.title}
					</h1>
				</div>
			</section>
			<p class="my-4 w-full bg-primary p-4 px-12 text-lg text-white lg:pr-[400px]">
				<span class="max-w-7xl">
					<a class="text-white" href="/blog">
						Accueil
					</a>{' '}
					&gt; {postDetails.value.data.title}
				</span>
			</p>
			<section class="flex w-full flex-col items-center justify-center bg-cover bg-center px-12 lg:pr-[400px]">
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
