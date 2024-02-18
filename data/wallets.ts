import type {Wallet} from '~/contracts/types/Wallet'


export const wallets: Wallet[] = [
    {
        key: 'btc',
        label: 'Bitcoin',
        address: 'bc1q6zl5020swat3vlyn3l9xf3d35q3uxfj8g0cdw8',
        network: 'BTC',
        icon: 'btc',
    },
    {
        key: 'eth',
        label: 'Ethereum',
        address: '0x3640B6a2743cA03b50C319AE043912b369ABAe61',
        network: 'ERC20',
        icon: 'eth',
    },
    {
        key: 'usdt',
        label: 'Tether',
        address: 'TFqCG7q7cGA4aNr8ov1xkUpB4cSFkhRnJ1',
        network: 'TRC20',
        icon: 'usdt',
    }
]
