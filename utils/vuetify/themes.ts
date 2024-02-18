import type {ThemeDefinition} from 'vuetify'

export const light: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#ffffff',
        surface: '#ffffff',
        primary: '#e11d48',
        secondary: '#f4f4f5',
        error: '#ef4444',
        info: '#dedede',
        success: '#00966D',
        warning: '#FAB005'
    }
}

export const dark: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#0c0a09',
        surface: '#0c0a09',
        primary: '#e11d48',
        secondary: '#27272a',
        error: '#7f1d1d',
        info: '#424244',
        success: '#00966D',
        warning: '#FAB005'
    }
}

