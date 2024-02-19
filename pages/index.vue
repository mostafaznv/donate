<template>
    <v-row class="mb-3">
        <v-col v-for="wallet in wallets" cols="12" md="4" :key="wallet.key">
            <d-glow-card @click="copy(wallet)" class="cursor-pointer" fill-height>
                <div class="d-flex flex-column align-center justify-center text-center fill-height py-3">
                    <div>
                        <d-btc-icon v-if="wallet.key === 'btc'" />
                        <d-eth-icon v-else-if="wallet.key === 'eth'" />
                        <d-usdt-icon v-else-if="wallet.key === 'usdt'" />
                    </div>

                    <h3 class="mt-2 mb-4 d-flex align-center ga-1">
                        <span class="text-primary">{{ wallet.label }}</span>


                        <span class="bg-primary rounded px-1 font-weight-light text-title-4 mt-1">
                            {{ wallet.network }}
                        </span>
                    </h3>

                    <div class="mb-4">
                        <d-btc-qr v-if="wallet.key === 'btc'" />
                        <d-eth-qr v-else-if="wallet.key === 'eth'" />
                        <d-usdt-qr v-else-if="wallet.key === 'usdt'" />
                    </div>

                    <span class="font-weight-light text-body-3" :title="wallet.address">
                        {{ wallet.address }}
                    </span>
                </div>
            </d-glow-card>
        </v-col>
    </v-row>

    <d-glow-card>
        <div class="d-flex flex-column align-center justify-center w-100 py-8 py-md-12">
            <!--<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" class="text-surface-variant" fill="currentColor" viewBox="0 0 512 512">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>

            <h2 class="mb-6 mt-2">
                Thank you for your support!
            </h2>-->

            <p class="text-center">
                <span class="font-weight-bold">Your contribution, no matter how small, is deeply appreciated.</span>
                <br /><br />
                I believe in open source software and its power to change the world for the better. However, I also recognize that developing and maintaining high-quality open source projects requires significant time and effort. By supporting me, you are helping to ensure that this project remains healthy and active, and that it can continue to benefit people around the world.
            </p>
        </div>
    </d-glow-card>
</template>

<script lang="ts" setup>
import {wallets} from '~/data/wallets'
import {useClipboard} from '~/composables/useClipboard'
import type {Wallet} from '~/contracts/types/Wallet'



function copy(wallet: Wallet) {
    const msg = `The <span class="bg-primary rounded px-1">${wallet.label}</span> address has been copied to the clipboard`

    useClipboard().copyToClipboard(wallet.address, msg)
}
</script>
