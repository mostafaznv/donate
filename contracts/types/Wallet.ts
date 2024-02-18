export type WalletKey = 'btc' | 'eth' | 'usdt'

export type Wallet = {
    key: WalletKey
    label: string,
    address: string,
    network: string,
    icon: string,
}
