import type {DefaultsInstance} from 'vuetify/lib/framework.mjs'


export const defaults: DefaultsInstance = {
    VAppBar: {
        elevation: 0
    },
    
    VSnackbar: {
        variant: 'flat',
        location: 'top',
        width: '100%',
        maxWidth: '600px',
        transition: 'fade-transition',
        multiLine: true
    },
}
