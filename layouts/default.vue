<template>
    <v-app>
        <d-header />

        <v-main>
            <v-container>
                <slot />
            </v-container>
        </v-main>

        <d-footer />

        <v-snackbar
            v-model="snackbarStatus"
            :color="snackbar?.color ?? 'info'"
            :timeout="snackbar?.timeout ?? 6000"
            :location="snackbar?.location ?? 'top'"
        >
            <div v-html="snackbar?.text" />

            <template v-slot:actions>
                <v-btn color="white" variant="text" @click="snackbarStatus = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-app>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {useSnackbar} from '~/composables/useSnackbar'
import type {SnackbarProps} from '~/contracts/components/common/SnackbarProps'


// variables
const snackbarStatus = ref<boolean>(false)


// computed properties
const snackbar = computed<SnackbarProps | null>(() => {
    if (useSnackbar().state.value.length) {
        snackbarStatus.value = true

        return useSnackbar().state.value[useSnackbar().state.value.length - 1]
    }

    return null
})
</script>
