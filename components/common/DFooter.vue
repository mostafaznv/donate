<template>
    <v-footer height="60" app>
        <v-container class="d-flex align-center justify-space-between">
            <div class="text-body-2 text-gray-700">
                <span>© {{ year }} - Mostafa Zeinivand</span>
            </div>

            <div class="d-flex align-center justify-end ga-2">
                <a class="d-flex" href="https://github.com/mostafaznv" target="_blank">
                    <d-github-icon />
                </a>
            </div>
        </v-container>
    </v-footer>
</template>

<script lang="ts" setup>
import {ref} from '#imports'
import {mdiCurrencyUsd} from '@mdi/js'

const year = ref<number>(new Date().getFullYear())
</script>


<style lang="scss" scoped>
.v-footer {
    border-top: 1px solid rgb(var(--v-theme-secondary));
}
</style>
