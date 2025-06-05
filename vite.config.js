import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    optimizeDeps: {
        include: ['highlight.js', 'showdown'],
    },
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                'projects/package_registry': resolve(__dirname, 'projects/package-registry.html'),
                'projects/procedural_planet': resolve(__dirname, 'projects/procedural-planet.html'),
                'projects/shorturl': resolve(__dirname, 'projects/shorturl.html'),
                'projects/trackify': resolve(__dirname, 'projects/trackify.html'),
                'projects/fingerprint_scanner': resolve(__dirname, 'projects/fingerprint-scanner.html'),
                'projects/quote_generator': resolve(__dirname, 'projects/quote-generator.html'),
            },
            // output: {
            //     // ...
            //     entryFileNames: '[name].[hash].js',
            //     chunkFileNames: 'helpers/[name].[hash].js',
            //     // assetFileNames: '[name].[ext]',
            // }
        },
        commonjsOptions: {
            include: [/highlight.js/, /showdown/, /node_modules/],
            transformMixedEsModules: true
        },
    },
})