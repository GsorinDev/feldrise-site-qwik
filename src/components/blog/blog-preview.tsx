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

export default component$<IBlogPreviewProps>((props) => {
	return (
		<a href={`/blog/${props.slug}`}>
			<div class="
				max-w-[320px]
				flex flex-col
				pb-10
				text-whiteoverflow-hidden shadow-lg gap-4
				border border-[1px] border-secondary
				rounded-2xl hover:cursor-pointer  transition ease-in-out duration-200 hover:scale-100
			">
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
				<div class="flex flex-wrap justify-starts items-center mt-6 px-6 mb-6">
					{props.tags.map((tag) => (
						<ArticleTag title={tag} key={tag} />
					))}
				</div>

				<div class="text-secondary font-[800] text-xl lg:text-2xl px-6 py-2">
					{props.title}
				</div>
				<div class="line-clamp-3 font-light px-6">
					{props.description}
				</div>
				<div class="font-medium px-6">{props.date}</div>
			</div>
		</a>
	);
});
