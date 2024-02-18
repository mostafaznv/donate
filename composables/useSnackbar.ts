import type {SnackbarProps} from '~/contracts/components/common/SnackbarProps'


export function useSnackbar() {
    const autoIncrementId = useState<number>('toast-id', () => 1)
    const state = useState<SnackbarProps[]>('toast-items', () => [])
    
    
    function toast(item: SnackbarProps): SnackbarProps {
        state.value.push({
            id: autoIncrementId.value++,
            ...item,
        })
        
        return item
    }
    
    
    
    return {
        autoIncrementId,
        state,
        toast
    }
}
