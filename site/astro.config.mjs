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
		title: '✍ notes',
		favicon: '/favicon.ico',
		social: {
			github: 'https://github.com/samuelireson/notes'
		},
		sidebar: [
			{
				label: 'Introduction to Topological Manifolds',
				items: [
					{ label: 'Topological spaces', slug: 'introduction-to-topological-manifolds/chapters/topological-spaces' },
					{ label: 'New spaces from old', slug: 'introduction-to-topological-manifolds/chapters/new-spaces-from-old' },
					{ label: 'Connectedness and compactness', slug: 'introduction-to-topological-manifolds/chapters/connectedness-and-compactness' },
					{ label: 'Cell complexes', slug: 'introduction-to-topological-manifolds/chapters/cell-complexes' },
					{ label: 'Compact surfaces', slug: 'introduction-to-topological-manifolds/chapters/compact-surfaces' },
					{ label: 'Homotopy and the fundamental group', slug: 'introduction-to-topological-manifolds/chapters/homotopy-and-the-fundamental-group' },
					{ label: 'The circle', slug: 'introduction-to-topological-manifolds/chapters/the-circle' },
					{ label: 'Some group theory', slug: 'introduction-to-topological-manifolds/chapters/some-group-theory' },
					{ label: 'The Seifert-Van Kampen theorem', slug: 'introduction-to-topological-manifolds/chapters/seifert-van-kampen' },
					{ label: 'Covering maps', slug: 'introduction-to-topological-manifolds/chapters/covering-maps' },
					{ label: 'Group actions and covering maps', slug: 'introduction-to-topological-manifolds/chapters/group-actions-and-covering-maps' },
					{ label: 'Homology', slug: 'introduction-to-topological-manifolds/chapters/homology' },
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
		rehypePlugins: [
			[rehypeKatex, {
				macros: {
					"\\boundary": "\\partial\\!",
					"\\exterior": "\\mathrm{Ext}",
					"\\homeomorphic": "\\approx",
					"\\interior": "\\mathrm{Int}",
					"\\identity": "\\mathrm{Id}",
				}
			}]
		],
	}
});
