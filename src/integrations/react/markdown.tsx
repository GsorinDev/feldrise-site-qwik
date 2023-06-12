/** @jsxImportSource react */

import {qwikify$} from '@builder.io/qwik-react';
import Markdown from 'markdown-to-jsx';
// import { ReactNode } from 'react';

export const QMarkdown = qwikify$(({details}: {details: string}) => {
	return (
		<Markdown
			options={{
				wrapper: 'article',
				forceBlock: false,
				overrides: {
					// pre: {
					// 	component: CodeBlock,
					// },
					a: {
						props: {
							target: '_blank',
							rel: 'noreferrer',
						},
					},
				},
			}}
		>
			{details}
		</Markdown>
	);
});
