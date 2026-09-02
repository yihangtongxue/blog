import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

function lazyLoadMarkdownImages() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'element' && node.tagName === 'img') {
        node.properties ??= {};
        node.properties.loading = 'lazy';
        node.properties.decoding = 'async';
      }

      node.children?.forEach(visit);
    };

    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  image: {
    domains: ['images.unsplash.com'],
  },
  markdown: {
    rehypePlugins: [lazyLoadMarkdownImages],
  },
  integrations: [mdx(), sitemap(), tailwind()]
});
