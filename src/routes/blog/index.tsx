import {component$, useComputed$} from '@builder.io/qwik';
import BlogPreview from '~/components/blog/blog-preview';
import {getAllPosts} from '~/helpers/blog-helper';
import type {TypeBlogDetails} from '~/types/type-blog-details';

export default component$(() => {
	const posts = useComputed$(() => getAllPosts());

	return (
		<div class="w-full grow">
			<section class="
				w-full
				py-12 md:py-24 px-8 lg:pr-[400px]
				flex justify-center items-center flex-col
				bg-header-blog bg-cover bg-center bg-fixed
			">
				<div class="w-full max-w-7xl px-8 py-16 bg-[rgba(0,0,0,0.30)] shadow-lg backdrop-blur-lg rounded-md flex justify-center items-center">
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
			<section class="
				w-full px-12 md:px-24 lg:pr-[400px]
			">
				<div class="w-full flex flex-wrap p-5 gap-5 justify-start">
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
