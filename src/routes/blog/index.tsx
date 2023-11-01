import {component$, useComputed$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import BlogPreview from '~/components/blog/blog-preview';
import {getAllPosts} from '~/helpers/blog-helper';
import type {TypeBlogDetails} from '~/types/type-blog-details';

export default component$(() => {
	const posts = useComputed$(() => getAllPosts());

	return (
		<div class="w-full grow">
			<section
				class="
				flex
				w-full flex-col items-center justify-center
				bg-header-blog bg-cover bg-fixed bg-center
				px-8 py-12 md:py-24 lg:pr-[400px]
			"
			>
				<div class="flex w-full max-w-7xl items-center justify-center rounded-md bg-[rgba(0,0,0,0.30)] px-8 py-16 shadow-lg backdrop-blur-lg">
					<h1
						class="text-5xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px]"
						style={{
							textDecorationSkipInk: 'none',
						}}
					>
						Le blog
					</h1>
				</div>
			</section>
			<section
				class="
				w-full px-12 md:px-24 lg:pr-[400px]
			"
			>
				<div class="flex w-full flex-wrap justify-start gap-5 p-5">
					{posts.value.map((blogItem: TypeBlogDetails) => (
						<BlogPreview
							key={blogItem.slug}
							slug={blogItem.slug}
							title={blogItem.data.title}
							description={blogItem.data.description}
							imageUrl={blogItem.data.banner}
							tags={blogItem.data.tags}
							date={blogItem.data.date}
						/>
					))}
				</div>
			</section>
		</div>
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
