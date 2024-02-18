import {useSnackbar} from '~/composables/useSnackbar'


export function useClipboard() {
    async function copyToClipboard(text: string, message: string | null = null): Promise<void> {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(text)

            useSnackbar().toast({
                status: true,
                color: 'warning',
                text: message ?? 'Copied to clipboard.',
                location: 'top'
            })
        }
        else {
            useSnackbar().toast({
                status: true,
                color: 'error',
                text: 'Clipboard API not available.',
                location: 'top'
            })
        }
    }

    async function readClipboard(): Promise<string | void> {
        if (navigator.clipboard) {
            return await navigator.clipboard.readText()
        }
        else {
            useSnackbar().toast({
                status: true,
                color: 'warning',
                text: 'Clipboard API not available.',
                location: 'top'
            })
        }
    }


    return {
        copyToClipboard,
        readClipboard
    }
}
