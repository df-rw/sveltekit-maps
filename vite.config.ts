import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
    },
    resolve: {
        alias: {
            '@raywhite/data-client': '/node_modules/@raywhite/data-client/lib/index.js',
        },
    },
});
