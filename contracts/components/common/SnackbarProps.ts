interface BaseSnackbar {
    id?: number | string,
    status: boolean,
}

export interface SnackbarOptions {
    color?: 'success' | 'error' | 'info' | 'warning'
    closable?: boolean,
    location?: 'top' | 'bottom',
    timeout?: number
}

export interface SnackbarProps extends BaseSnackbar, SnackbarOptions {
    text: string
}
