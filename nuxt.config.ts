import vuetify from 'vite-plugin-vuetify'


export default defineNuxtConfig({
    ssr: false,
    
    app: {
        head: {
            title: 'Donate',
            
            meta: [
                {name: 'msapplication-TileColor', content: '#e11d48'},
                {name: 'theme-color', content: '#ffffff'}
            ],
            
            link: [
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png'},
                {rel: 'manifest', href: '/favicon/site.webmanifest'}
            ]
        }
    },
    
    css: [
        'vuetify/styles',
        '@/assets/scss/main.scss'
    ],
    
    components: [
        {
            path: '@/components',
            pathPrefix: false
        }
    ],
    
    features: {
        inlineStyles: false
    },
    
    devtools: {
        enabled: true
    },
    
    sourcemap: {
        client: false,
        server: false
    },
    
    modules: [
        '@nuxtjs/google-fonts',
        '@vueuse/nuxt',
        
        // this adds the vuetify vite plugin
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) =>
                // @ts-ignore
                config.plugins.push(
                    vuetify({
                        autoImport: true,
                        styles: {
                            configFile: 'assets/scss/vuetify.scss'
                        }
                    })
                )
            )
        }
    ],
    
    
    googleFonts: {
        families: {
            Figtree: [300, 400, 500, 600, 700]
        },
        display: 'swap'
    },
    
    build: {
        transpile: ['vuetify']
    },
    
    vite: {
        ssr: {
            noExternal: ['vuetify']
        },
        
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/assets/scss/variables/_variables.scss" as *;
                        @use "vuetify/lib/styles/settings/variables" as *;
                    `
                }
            }
        }
    }
})
