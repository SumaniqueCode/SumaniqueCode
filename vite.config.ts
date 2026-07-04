import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

/**
 * Preloads the About section's LCP images (profile + background, smallest/480w variant)
 * by reading the actual hashed filenames out of the build output, so the preload hints
 * never go stale on rebuild the way a hardcoded <link> would.
 */
const preloadLcpImages = (): Plugin => {
  const targets = [
    { match: /pp1-480-.*\.avif$/ },
    { match: /ppbg1-480-.*\.avif$/ },
  ];

  return {
    name: 'preload-lcp-images',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle;
        if (!bundle) return html;

        const links: string[] = [];
        for (const fileName of Object.keys(bundle)) {
          if (targets.some((t) => t.match.test(fileName))) {
            links.push(
              `<link rel="preload" as="image" href="/${fileName}" type="image/avif" fetchpriority="high">`
            );
          }
        }

        if (links.length === 0) return html;
        return html.replace('</head>', `${links.join('\n  ')}\n</head>`);
      },
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    preloadLcpImages(),
  ],
  assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.JPEG'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
