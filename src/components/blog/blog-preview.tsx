import {component$} from '@builder.io/qwik';
import ArticleTag from './article-tag';

interface IBlogPreviewProps {
	title: string;
	description: string;
	imageUrl: string;
	date: string;
	slug: string;
	tags: string[];
}

export default component$<IBlogPreviewProps>(props => {
	return (
		<a href={`/blog/${props.slug}`}>
			<div
				class="
				text-whiteoverflow-hidden
				flex max-w-[320px]
				flex-col
				gap-4 rounded-2xl border
				border-[1px] border-secondary pb-10
				shadow-lg transition  duration-200 ease-in-out hover:scale-100 hover:cursor-pointer
			"
			>
				<img
					width={400}
					height={200}
					src={props.imageUrl}
					alt="This is the preview image of the blog"
					class="rounded-t-md"
					style={{
						width: '100%',
						height: 'auto',
					}}
				/>
				<div class="justify-starts mb-6 mt-6 flex flex-wrap items-center px-6">
					{props.tags.map(tag => (
						<ArticleTag title={tag} key={tag} />
					))}
				</div>

				<div class="px-6 py-2 text-xl font-[800] text-secondary lg:text-2xl">{props.title}</div>
				<div class="line-clamp-3 px-6 font-light">{props.description}</div>
				<div class="px-6 font-medium">{props.date}</div>
			</div>
		</a>
	);
});
