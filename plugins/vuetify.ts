import {createVuetify} from 'vuetify'
import {defineNuxtPlugin} from '#app'
import {aliases as iconAliases, mdi} from 'vuetify/iconsets/mdi-svg'
import {light, dark} from '@/utils/vuetify/themes'
import {defaults} from '~/utils/vuetify/defaults'
import {aliases} from '~/utils/vuetify/aliases'


export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        ssr: false,
        aliases,
        defaults,
        
        theme: {
            defaultTheme: 'dark',
            themes: {
                light,
                dark
            },
            variations: {
                colors: ['primary', 'secondary'],
                lighten: 3,
                darken: 3
            }
        },
        icons: {
            defaultSet: 'mdi',
            aliases: iconAliases,
            sets: {
                mdi
            }
        }
    })
    
    app.vueApp.use(vuetify)
})
