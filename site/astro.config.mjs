// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
	site: 'https://samuelireson.github.io',
	base: '/notes',
	integrations: [starlight({
		title: 'notes',
		social: {
			github: 'https://github.com/samuelireson/notes'
		},
		sidebar: [
			{
				label: 'Introduction to Topological Manifolds',
				items: [
					{ label: 'Topological spaces', slug: 'introduction-to-topological-manifolds/chapters/topological-spaces' },
					{ label: 'New spaces from old', slug: 'introduction-to-topological-manifolds/chapters/new-spaces-from-old' },
				],
			},
		],
		customCss: [
			'./node_modules/katex/dist/katex.css',
			'./src/styles/custom.css',
			'./src/fonts/font-face.css'
		]
	})],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	}
});
